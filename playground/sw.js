/*
 * Arkenda's service worker (production web builds): the media range server of plan 4.1 M3, then
 * Angular's offline worker (`ngsw-worker.js`, generated from `ngsw-config.json`) for everything else.
 *
 * `GET`/`HEAD <scope>arkenda-media/<id>` is answered here, straight from the chunked media store in
 * IndexedDB (`arkenda-attachments-media`, written by `IdbMediaStore`), so `<audio>` and `<video>`
 * stream and seek natively and no page ever holds a whole file:
 * - only ids of 64 lower-case hex digits whose manifest is stored (and whose chunk hashes give that
 *   id back) are served; anything else under `arkenda-media/` is a 404, never passed on (the
 *   path is not `media/`: the build puts fonts and other style assets there, and ngsw serves them);
 * - `Range: bytes=a-b`, `bytes=a-` and `bytes=-n` get `206 Partial Content` (only the first range of
 *   a list), cut to at most `MAX_ANSWER_BYTES`: the element asks again for the rest; a range that
 *   starts past the end gets `416`; no or a malformed `Range` reads as `bytes=0-` (a `200` when that
 *   is the whole file);
 * - every chunk served is checked against its manifest hash first: a missing or tampered chunk is a
 *   `500` with no media bytes;
 * - `HEAD` reads the manifest only (`WebMediaSource` probes with it).
 * Every answer carries `X-Arkenda-Media: 1`, and refusals name why in `X-Arkenda-Media-Error`.
 *
 * The database is opened read-only and never created: when it does not exist yet, opening it is
 * aborted, so the app's own first open still creates it with its stores.
 *
 * Encryption at rest (plan 4.1 S9, "Encrypt media on this device"): a media sealed by the
 * `EncryptedAttachmentStore` decorator has no plain manifest but a sealed one, `sealed:<id>`, and its
 * chunks under `["sealed:<id>", index]` (format 1 of `@arkenda/kit/media`'s `sealed-media.ts`:
 * `nonce ‖ AES-256-GCM ciphertext ‖ tag`, associated data `"arkenda/media-chunk/v1\0" ‖ id ‖ index`).
 * The worker unseals them itself, in `readChunks`: it derives the media key exactly as the page does
 * (`MediaKeyRing`), from this origin's device key ring (`arkenda-keys`, opened read-only and never
 * created): the non-extractable device wrapping key opens the media vault key's sealed copy
 * (`vault-key-wrap.ts`), whose bytes only feed HKDF-SHA-256 into a non-extractable AES-GCM key and are
 * zeroed. No key is logged, sent, or kept anywhere but this worker's memory. Every opened chunk is
 * still checked against its plaintext hash. When the key cannot be read here (no key ring, a newer
 * key ring layout), the answer is a `503`: `WebMediaSource` then plays it through the page's
 * fallback, over the decorated store.
 *
 * Plain JavaScript on purpose: it is served as is (`angular.json` copies it), never bundled, so the
 * startup bundle does not change.
 */

/** Database of the chunked media store (`IdbAttachmentStore`'s `<name>-media`). */
const MEDIA_DB = 'arkenda-attachments-media';
/** The device key ring (`IdbKeyStore`): the wrapping key and the vault keys' sealed copies. */
const KEYS_DB = 'arkenda-keys';
/** Key prefix of sealed media in the media database (`IdbMediaStore`). */
const SEALED_PREFIX = 'sealed:';
/** `SEALED_CHUNK_OVERHEAD`, `SEALED_NONCE_BYTES`: nonce (12) and tag (16) of every sealed chunk. */
const SEALED_OVERHEAD = 28;
const NONCE_BYTES = 12;
/** `SEALED_CHUNK_CONTEXT`, `MEDIA_KEY_INFO` and the vault key wrap's context (all with their NUL). */
const CHUNK_CONTEXT = 'arkenda/media-chunk/v1\0';
const MEDIA_KEY_INFO = 'arkenda/media-at-rest/v1\0';
const WRAP_CONTEXT = 'arkenda/vault-key-wrap/v1\0';
const KEY_ID = /^[A-Za-z0-9_-]{1,64}$/;
/** `MEDIA_CHUNK_BYTES` of `@arkenda/kit/media`. */
const CHUNK_BYTES = 1024 * 1024;
/** Largest body of one answer: the element asks again for the rest. */
const MAX_ANSWER_BYTES = 4 * CHUNK_BYTES;
/** `MEDIA_ROOT_TAG` of `@arkenda/kit/media`: the start of every media id's hash input. */
const ROOT_TAG = 'arkenda.media.v1';
/** The chunked (audio and video) types of the media registry. */
const MEDIA_TYPES = new Set([
  'audio/mpeg',
  'audio/mp4',
  'audio/ogg',
  'audio/wav',
  'audio/flac',
  'video/mp4',
  'video/quicktime',
  'video/webm',
]);
const HASH = /^[0-9a-f]{64}$/;
const RANGE = /^bytes=\s*(\d*)\s*-\s*(\d*)\s*(?:,.*)?$/i;

/** `MEDIA_WORKER_PATH` of `WebMediaSource`, under the worker's scope. */
const mediaPrefix = `${new URL(self.registration.scope).pathname}arkenda-media/`;

/** Registered before ngsw's own listener, which then never sees these requests. */
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(mediaPrefix)) return;
  if (request.method !== 'GET' && request.method !== 'HEAD') return;
  event.stopImmediatePropagation();
  event.respondWith(serveMedia(request, url.pathname.slice(mediaPrefix.length)));
});

importScripts('ngsw-worker.js');

class MediaRefusal extends Error {
  /**
   * @param {number} status
   * @param {string} reason
   */
  constructor(status, reason) {
    super(reason);
    this.status = status;
    this.reason = reason;
  }
}

/**
 * @param {Request} request
 * @param {string} id
 * @returns {Promise<Response>}
 */
async function serveMedia(request, id) {
  try {
    if (!HASH.test(id)) throw new MediaRefusal(404, 'not-found');
    const db = await openDatabase();
    const manifest = await readStoredManifest(db, id);
    const headers = {
      'Content-Type': manifest.type,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Arkenda-Media': '1',
    };
    // A sealed media is offered only when its key opens here: else the probe's `503` sends the page
    // to its own fallback, instead of handing the element a URL whose reads would fail.
    if (manifest.sealed) await mediaKey(manifest.sealed.keyId);
    if (request.method === 'HEAD') {
      return new Response(null, { status: 200, headers: { ...headers, 'Content-Length': String(manifest.length) } });
    }
    const range = answerRange(request.headers.get('Range'), manifest.length);
    if (!range) {
      return new Response(null, {
        status: 416,
        headers: { ...headers, 'Content-Range': `bytes */${manifest.length}`, 'X-Arkenda-Media-Error': 'range' },
      });
    }
    const body = await readChunks(db, manifest, range.start, range.end);
    const whole = range.start === 0 && range.end === manifest.length;
    return new Response(body, {
      status: whole ? 200 : 206,
      headers: {
        ...headers,
        'Content-Length': String(body.length),
        ...(whole ? {} : { 'Content-Range': `bytes ${range.start}-${range.end - 1}/${manifest.length}` }),
      },
    });
  } catch (error) {
    const refusal = error instanceof MediaRefusal ? error : new MediaRefusal(503, 'unavailable');
    return new Response(null, {
      status: refusal.status,
      headers: { 'Cache-Control': 'no-store', 'X-Arkenda-Media': '1', 'X-Arkenda-Media-Error': refusal.reason },
    });
  }
}

/**
 * The bytes `[start, end)` one answer serves for `header` over a file of `length` bytes, or `null`
 * when the range is unsatisfiable (`416`).
 * @param {string | null} header
 * @param {number} length
 * @returns {{ start: number, end: number } | null}
 */
function answerRange(header, length) {
  const match = header ? RANGE.exec(header.trim()) : null;
  let start = 0;
  let end = length;
  if (match && (match[1] || match[2])) {
    if (!match[1]) {
      const suffix = Number(match[2]);
      if (suffix === 0) return null;
      start = Math.max(0, length - suffix);
    } else {
      start = Number(match[1]);
      if (match[2]) {
        const last = Number(match[2]);
        // A reversed range is malformed: read as no range at all.
        if (last < start) start = 0;
        else end = Math.min(length, last + 1);
      }
      if (start >= length) return null;
    }
  }
  return { start, end: Math.min(end, start + MAX_ANSWER_BYTES) };
}

/** @type {Promise<IDBDatabase> | null} */
let database = null;

/** @returns {Promise<IDBDatabase>} */
function openDatabase() {
  database ??= openExisting(MEDIA_DB, () => {
    database = null;
  });
  return database;
}

/**
 * Opens `name` as it is, never creating or upgrading it; `onClose` runs when a newer build asks for it.
 * @param {string} name
 * @param {() => void} onClose
 * @returns {Promise<IDBDatabase>}
 */
function openExisting(name, onClose) {
  return new Promise((resolve, reject) => {
    const open = indexedDB.open(name);
    // The database does not exist yet: never create it (the app creates it with its stores).
    open.onupgradeneeded = () => open.transaction?.abort();
    open.onsuccess = () => {
      const db = open.result;
      // A newer build upgrading the database must never wait on this worker.
      db.onversionchange = () => {
        db.close();
        onClose();
      };
      resolve(db);
    };
    open.onerror = () => reject(open.error?.name === 'AbortError' ? new MediaRefusal(404, 'not-found') : open.error);
  }).catch((error) => {
    onClose();
    throw error;
  });
}

/**
 * @template T
 * @param {IDBRequest<T>} request
 * @returns {Promise<T>}
 */
function settle(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * The manifest of `id`: the plain one, else the sealed one (with `sealed.keyId`), else a 404.
 * @param {IDBDatabase} db
 * @param {string} id
 * @returns {Promise<{ id: string, type: string, length: number, chunks: string[], sealed?: { keyId: string } }>}
 */
async function readStoredManifest(db, id) {
  try {
    return await readManifest(db, id, id);
  } catch (error) {
    if (!(error instanceof MediaRefusal) || error.reason !== 'not-found') throw error;
  }
  const manifest = await readManifest(db, SEALED_PREFIX + id, id);
  const sealed = /** @type {{ sealed?: { format?: unknown, keyId?: unknown } }} */ (manifest).sealed;
  if (sealed?.format !== 1 || typeof sealed.keyId !== 'string' || !KEY_ID.test(sealed.keyId)) {
    throw new MediaRefusal(500, 'tampered');
  }
  return { ...manifest, sealed: { keyId: sealed.keyId } };
}

/**
 * The manifest stored under `key` for media `id`, checked like `IdbMediaStore` and
 * `FileAttachmentStore` check it.
 * @param {IDBDatabase} db
 * @param {string} key
 * @param {string} id
 */
async function readManifest(db, key, id) {
  let manifest;
  try {
    manifest = await settle(db.transaction('manifests').objectStore('manifests').get(key));
  } catch (error) {
    // No store at all: an empty database.
    if (error instanceof DOMException && error.name === 'NotFoundError') throw new MediaRefusal(404, 'not-found');
    throw error;
  }
  if (manifest === undefined) throw new MediaRefusal(404, 'not-found');
  const tampered = new MediaRefusal(500, 'tampered');
  if (typeof manifest !== 'object' || manifest === null) throw tampered;
  const { version, type, length, chunkBytes, chunks } = manifest;
  if (version !== 1 || manifest.id !== id || chunkBytes !== CHUNK_BYTES || !MEDIA_TYPES.has(type)) throw tampered;
  if (!Number.isSafeInteger(length) || length < 1) throw tampered;
  if (!Array.isArray(chunks) || chunks.length !== Math.ceil(length / CHUNK_BYTES)) throw tampered;
  if (!chunks.every((hash) => typeof hash === 'string' && HASH.test(hash))) throw tampered;
  if ((await rootId(chunks)) !== id) throw tampered;
  return /** @type {{ id: string, type: string, length: number, chunks: string[] }} */ (manifest);
}

/**
 * `mediaRootId`: the SHA-256 of `ROOT_TAG ‖ raw chunk hashes`, as lower-case hex.
 * @param {string[]} chunks
 */
async function rootId(chunks) {
  const input = new Uint8Array(ROOT_TAG.length + 32 * chunks.length);
  for (let index = 0; index < ROOT_TAG.length; index++) input[index] = ROOT_TAG.charCodeAt(index);
  chunks.forEach((hash, chunk) => {
    for (let byte = 0; byte < 32; byte++) {
      input[ROOT_TAG.length + 32 * chunk + byte] = Number.parseInt(hash.slice(2 * byte, 2 * byte + 2), 16);
    }
  });
  return sha256Hex(input);
}

/** @param {Uint8Array} bytes */
async function sha256Hex(bytes) {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * The bytes `[start, end)` of the media, from the chunks that cover them, each checked against its
 * manifest hash and length before any byte of it is used. This is the one place chunk bytes are
 * read: sealed chunks are opened here first (a chunk that does not open is `tampered`).
 * @param {IDBDatabase} db
 * @param {{ id: string, length: number, chunks: string[], sealed?: { keyId: string } }} manifest
 * @param {number} start
 * @param {number} end
 */
async function readChunks(db, manifest, start, end) {
  const out = new Uint8Array(end - start);
  if (start === end) return out;
  const first = Math.floor(start / CHUNK_BYTES);
  const last = Math.floor((end - 1) / CHUNK_BYTES);
  const key = manifest.sealed ? await mediaKey(manifest.sealed.keyId) : null;
  const store = db.transaction('chunks').objectStore('chunks');
  const stored = manifest.sealed ? SEALED_PREFIX + manifest.id : manifest.id;
  const indexes = [];
  for (let index = first; index <= last; index++) indexes.push(index);
  const values = await Promise.all(indexes.map((index) => settle(store.get([stored, index]))));
  for (const [position, index] of indexes.entries()) {
    const chunkStart = index * CHUNK_BYTES;
    const chunkEnd = Math.min(chunkStart + CHUNK_BYTES, manifest.length);
    const value = key
      ? await openChunk(key, manifest.id, index, values[position], chunkEnd - chunkStart)
      : values[position];
    if (
      !(value instanceof Uint8Array) ||
      value.length !== chunkEnd - chunkStart ||
      (await sha256Hex(value)) !== manifest.chunks[index]
    ) {
      throw new MediaRefusal(500, 'tampered');
    }
    const from = Math.max(start, chunkStart);
    const to = Math.min(end, chunkEnd);
    out.set(value.subarray(from - chunkStart, to - chunkStart), from - start);
  }
  return out;
}

/** @param {string} text */
const ascii = (text) => Uint8Array.from(text, (char) => char.charCodeAt(0));

/**
 * Opens sealed chunk `index` of media `id` (`nonce ‖ ciphertext ‖ tag`); anything that does not open
 * is `tampered`. The plaintext is hash-checked by the caller.
 * @param {CryptoKey} key
 * @param {string} id
 * @param {number} index
 * @param {unknown} value
 * @param {number} length
 * @returns {Promise<Uint8Array>}
 */
async function openChunk(key, id, index, value, length) {
  if (!(value instanceof Uint8Array) || value.length !== length + SEALED_OVERHEAD) {
    throw new MediaRefusal(500, 'tampered');
  }
  const context = ascii(CHUNK_CONTEXT);
  const aad = new Uint8Array(context.length + 36);
  aad.set(context);
  for (let byte = 0; byte < 32; byte++)
    aad[context.length + byte] = Number.parseInt(id.slice(2 * byte, 2 * byte + 2), 16);
  new DataView(aad.buffer).setUint32(context.length + 32, index, false);
  try {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: value.slice(0, NONCE_BYTES), additionalData: aad, tagLength: 128 },
      key,
      value.slice(NONCE_BYTES),
    );
    return new Uint8Array(plain);
  } catch {
    throw new MediaRefusal(500, 'tampered');
  }
}

/** @type {Map<string, Promise<CryptoKey>>} */
const mediaKeys = new Map();

/**
 * The media key of vault key `keyId` (`MediaKeyRing.key`), derived once per worker life; a key that
 * cannot be read here is a `503` (the page then plays the media itself).
 * @param {string} keyId
 * @returns {Promise<CryptoKey>}
 */
function mediaKey(keyId) {
  let key = mediaKeys.get(keyId);
  if (!key) {
    key = deriveMediaKey(keyId).catch(() => {
      mediaKeys.delete(keyId);
      throw new MediaRefusal(503, 'unavailable');
    });
    mediaKeys.set(keyId, key);
  }
  return key;
}

/** @type {Promise<IDBDatabase> | null} */
let keysDatabase = null;

/**
 * @param {string} keyId
 * @returns {Promise<CryptoKey>}
 */
async function deriveMediaKey(keyId) {
  keysDatabase ??= openExisting(KEYS_DB, () => {
    keysDatabase = null;
  });
  const db = await keysDatabase;
  const transaction = db.transaction(['wrapping-key', 'wrapped-vault-keys']);
  const [wrapping, wrapped] = await Promise.all([
    settle(transaction.objectStore('wrapping-key').get('self')),
    settle(transaction.objectStore('wrapped-vault-keys').get(keyId)),
  ]);
  if (!(wrapping instanceof CryptoKey) || !wrapped || !(wrapped.nonce instanceof Uint8Array)) {
    throw new Error('No sealed copy of the media key');
  }
  const raw = new Uint8Array(
    await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: wrapped.nonce, additionalData: ascii(WRAP_CONTEXT + keyId), tagLength: 128 },
      wrapping,
      wrapped.ciphertext,
    ),
  );
  try {
    const base = await crypto.subtle.importKey('raw', raw, 'HKDF', false, ['deriveKey']);
    return await crypto.subtle.deriveKey(
      { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(0), info: ascii(MEDIA_KEY_INFO + keyId) },
      base,
      { name: 'AES-GCM', length: 256 },
      false,
      ['decrypt'],
    );
  } finally {
    raw.fill(0);
  }
}
