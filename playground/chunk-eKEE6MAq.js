import{i as m$1,n as c,r as g}from"./chunk-BoPmkJ1X.js";import{$ as wt,Z as rt,m as K,n as A,o as E,r as B$1}from"./chunk-BmaFkWVF.js";import{n as s,t as r}from"./chunk-CtLIq420.js";var w=1600;var C=B$1.define();function D(i,n){let r=i.doc;if(i.lineBreak.length<2)return Math.min(Math.max(0,n),r.length);let s=1,t=r.lines;for(;s<t;){let e=s+t+1>>1;r.line(e).from+e-1<=n?s=e:t=e-1}let o=r.line(s);return Math.min(o.to,Math.max(o.from,n-(s-1)))}function I(i,n){return i.lineBreak.length<2?n:n+i.doc.lineAt(n).number-1}function B(i,n,r){let s=[];for(let t of i){if(!t.selection)continue;let o=n.find(c=>c.deviceId===t.deviceId),e=D(r,t.selection.head),a=!o||o.head!==e;s.push({deviceId:t.deviceId,name:t.name,color:g(t.color),anchor:D(r,t.selection.anchor),head:e,moves:a?(o?.moves??0)+1:o.moves})}return s}var f=class extends wt{constructor(r,s,t){super();this.color=r;this.label=s;this.moves=t}color;label;moves;eq(r){return r.color===this.color&&r.label===this.label&&r.moves===this.moves}toDOM(r){let s=r.dom.ownerDocument,t=s.createElement(`span`);t.className=`ark-presence-caret`,t.setAttribute(`aria-hidden`,`true`),t.style.setProperty(`--ark-presence-color`,this.color),t.style.setProperty(`--ark-presence-text`,c(this.color));let o=s.createElement(`span`);return o.className=`ark-presence-label`,o.dir=`auto`,o.textContent=this.label,t.append(o),s.defaultView?.matchMedia?.(`(max-width: 720px)`).matches||(t.classList.add(`is-moving`),setTimeout(()=>t.classList.remove(`is-moving`),w)),t}ignoreEvent(){return!0}};function V(i,n,r){let s=[],t=n.doc.length;for(let o of i){let e=Math.min(o.anchor,t),a=Math.min(o.head,t);e!==a&&s.push(E.mark({class:`ark-presence-selection`,attributes:{style:`background-color: ${o.color}40`}}).range(Math.min(e,a),Math.max(e,a))),s.push(E.widget({widget:new f(o.color,m$1(o.name,r),o.moves),side:a>=e?1:-1}).range(a))}return E.set(s,!0)}var F=`
.ark-presence-caret {
  position: relative; display: inline; box-sizing: border-box;
  margin-inline: -1px; border-inline: 1px solid var(--ark-presence-color);
  pointer-events: auto;
}
.ark-presence-caret::before {
  content: ''; position: absolute; inset-block: 0; inset-inline: -4px;
}
.ark-presence-label {
  position: absolute; inset-block-end: 100%; inset-inline-start: -1px; z-index: 5;
  max-inline-size: 12rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  padding: 0 4px; border-radius: 3px 3px 3px 0;
  background: var(--ark-presence-color); color: var(--ark-presence-text);
  font: 600 11px/16px var(--ark-font-sans, system-ui, sans-serif);
  pointer-events: none; user-select: none;
  opacity: 0; transition: opacity var(--ark-motion-fast) ease-out;
}
.ark-presence-caret.is-moving .ark-presence-label,
.ark-presence-caret:hover .ark-presence-label { opacity: 1; }
`;var R=`ark-presence-styles`;function O(i){if(i.getElementById(R))return;let n=i.createElement(`style`);n.id=R,n.textContent=F,i.head.append(n)}var m=/* @__PURE__ */ new WeakMap;function N(i){let{presence:n,noteId:r$1,unnamed:s$1}=i;return[rt.define({create:()=>({peers:[],decorations:E.none}),update(e,a){let c=e.peers;a.docChanged&&(c=c.map(l=>s(r({},l),{anchor:a.changes.mapPos(l.anchor,1),head:a.changes.mapPos(l.head,1)})));for(let l of a.effects)l.is(C)&&(c=B(l.value,c,a.state));return c===e.peers?e:{peers:c,decorations:V(c,a.state,s$1)}},provide:e=>A.decorations.from(e,a=>a.decorations)}),K.define(e=>{O(e.dom.ownerDocument);let a=!1,c=null,l=()=>{let{anchor:d,head:u}=e.state.selection.main;n.setLocal(r$1,{anchor:I(e.state,d),head:I(e.state,u)})},L=n.onRemote(r$1,d=>{let u=c!==null;c=d,!u&&queueMicrotask(()=>{let h=c;c=null,!a&&h&&e.dispatch({effects:C.of(h)})})});return(!m.get(n)?.dom.isConnected||e.hasFocus)&&(m.set(n,e),l()),{update(d){d.focusChanged&&e.hasFocus&&m.get(n)!==e?(m.set(n,e),l()):(d.selectionSet||d.docChanged)&&m.get(n)===e&&l()},destroy(){a=!0,L(),m.get(n)===e&&(m.delete(n),n.setLocal(null))}}})]}export{N as remoteCursors};