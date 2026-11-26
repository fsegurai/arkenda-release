import{c as st,s as it}from"./chunk-C2CzVnvN.js";import{Gt as Zt,zt as Xt}from"./chunk-BStajcYz.js";import{n as i}from"./chunk-CeMi-6cj.js";import{a as k}from"./chunk-DHWUMPbx.js";function U(i,e){return{id:`comment`,icon:`comment-add`,label:i.translate(`comments.comment`),shortcut:i.shortcut(),run:e}}var Le=3e4;function Re(i,e){let n=e.now??Date.now,t=null,r=null,o=0,a=0,l=async()=>{try{return t=await Promise.resolve().then(i),t}catch(s){return o++,e.onFailure(s,o>=2),a=n()+e.retryMs,null}finally{r=null}};return()=>t!==null?Promise.resolve(t):r||(o>=2||n()<a?Promise.resolve(null):(r=l(),r))}var X=`
:root {
  --ark-comment-hl: color-mix(in srgb, var(--ark-color-accent) 14%, transparent);
  --ark-comment-hl-overlap: color-mix(in srgb, var(--ark-color-accent) 26%, transparent);
  --ark-comment-hl-active: color-mix(in srgb, var(--ark-color-accent) 34%, transparent);
  --ark-comment-line: color-mix(in srgb, var(--ark-color-accent) 70%, transparent);
  --ark-comment-changed: var(--ark-color-warning);
}
:root[data-contrast='more'] {
  --ark-comment-hl: transparent;
  --ark-comment-hl-overlap: color-mix(in srgb, var(--ark-color-accent) 12%, transparent);
  --ark-comment-hl-active: color-mix(in srgb, var(--ark-color-accent) 22%, transparent);
  --ark-comment-line: var(--ark-color-accent);
}
::highlight(ark-comment) {
  background-color: var(--ark-comment-hl);
  text-decoration: underline solid var(--ark-comment-line);
  text-decoration-thickness: 2px;
}
::highlight(ark-comment-overlap) {
  background-color: var(--ark-comment-hl-overlap);
  text-decoration: underline double var(--ark-comment-line);
  text-decoration-thickness: 3px;
}
::highlight(ark-comment-changed) {
  text-decoration: underline dashed var(--ark-comment-changed);
  text-decoration-thickness: 2px;
}
::highlight(ark-comment-active) {
  background-color: var(--ark-comment-hl-active);
}
::highlight(ark-comment-resolved) {
  text-decoration: underline dotted var(--ark-color-text-subtle);
  text-decoration-thickness: 1px;
}
::highlight(ark-comment-pending) {
  background-color: var(--ark-color-selection);
}
.ark-comment-marker {
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 22px;
  padding: 0 6px;
  border: 1px solid var(--ark-color-border);
  border-radius: 999px;
  background: var(--ark-color-elevated);
  color: var(--ark-color-text-muted);
  font: 600 var(--ark-font-size-xs)/1 var(--ark-font-sans);
  cursor: pointer;
  user-select: none;
  transition: background-color var(--ark-motion-fast) var(--ark-ease-standard),
    border-color var(--ark-motion-fast) var(--ark-ease-standard);
}
.ark-comment-marker::after { content: attr(data-count); }
.ark-comment-marker svg { width: 12px; height: 12px; }
.ark-comment-marker:hover { background: var(--ark-color-bg-hover); color: var(--ark-color-text); }
.ark-comment-marker:focus-visible { outline: none; box-shadow: var(--ark-focus-ring); }
.ark-comment-marker[data-active] {
  border-color: var(--ark-color-accent);
  color: var(--ark-color-accent);
  background: var(--ark-color-accent-subtle);
}
.ark-comment-marker[data-changed] { border-color: var(--ark-comment-changed); color: var(--ark-comment-changed); }
.ark-comment-heading-add {
  position: absolute;
  z-index: 1;
  width: 26px;
  height: 26px;
  display: inline-grid;
  place-items: center;
  padding: 0;
  border: 1px solid var(--ark-color-border);
  border-radius: var(--ark-radius-md);
  background: var(--ark-color-elevated);
  color: var(--ark-color-text-muted);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--ark-motion-fast) var(--ark-ease-standard);
}
.ark-comment-heading-add[data-shown], .ark-comment-heading-add:hover, .ark-comment-heading-add:focus-visible {
  opacity: 1;
}
.ark-comment-heading-add:focus-visible { outline: none; box-shadow: var(--ark-focus-ring); }
.ark-comment-heading-add svg { width: 14px; height: 14px; }
.ark-comment-float {
  position: fixed;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 10px 0 8px;
  border: 1px solid var(--ark-color-border);
  border-radius: var(--ark-radius-md);
  background: var(--ark-color-elevated);
  box-shadow: var(--ark-shadow-popover);
  color: var(--ark-color-text);
  font: 500 var(--ark-font-size-sm)/1 var(--ark-font-sans);
  cursor: pointer;
  animation: ark-comment-float-in var(--ark-motion-base) var(--ark-ease-enter);
}
.ark-comment-float svg { width: 14px; height: 14px; color: var(--ark-color-accent); }
.ark-comment-float:hover { background: var(--ark-color-bg-hover); }
.ark-comment-float:focus-visible { outline: none; box-shadow: var(--ark-focus-ring); }
:root[data-touch] .ark-comment-float { height: 44px; padding: 0 14px 0 12px; }
@keyframes ark-comment-float-in {
  from { opacity: 0; transform: translateY(var(--ark-motion-shift)); }
}
:root[data-contrast='more'] .ark-comment-marker, :root[data-contrast='more'] .ark-comment-float {
  border-color: var(--ark-color-text);
}
`;var Y=/* @__PURE__ */ new WeakSet;function H(i){if(Y.has(i))return;Y.add(i);let e=i.defaultView;if(e?.CSSStyleSheet&&`adoptedStyleSheets`in i&&`replaceSync`in e.CSSStyleSheet.prototype){let t=new e.CSSStyleSheet;t.replaceSync(X),i.adoptedStyleSheets=[...i.adoptedStyleSheets,t];return}let n=i.createElement(`style`);n.textContent=X,i.head.append(n)}var V={pointer:30,touch:44};function ue(i){let{end:e,width:n,viewport:t,touch:r}=i,o=Math.max(8,Math.min(t.width-n-8,e.right-n/2));if(!r){let s=e.top-V.pointer-6;return{top:s>=8?s:e.bottom+6,left:o}}let a=e.bottom+28;return{top:a+V.touch<=t.height-8?a:Math.max(8,e.top-V.touch-6-28),left:o}}function J(i,e,n){H(i);let t=i.createElement(`button`);t.type=`button`,t.className=`ark-comment-float`,t.dataset.commentUi=``,t.title=n.shortcut?`${n.label} (${n.shortcut})`:n.label,t.innerHTML=Xt,t.append(i.createTextNode(n.label)),t.addEventListener(`mousedown`,a=>a.preventDefault()),t.addEventListener(`click`,()=>{t.remove(),n.onComment()}),i.body.append(t);let r=i.defaultView,o=ue({end:e,width:t.offsetWidth||110,viewport:{width:r?.innerWidth??1024,height:r?.innerHeight??768},touch:i.documentElement.hasAttribute(`data-touch`)});return t.style.top=`${o.top}px`,t.style.left=`${o.left}px`,()=>t.remove()}var he=`[data-comment-ui]`;function w(i){let e=Number(i.dataset?.line);return Number.isInteger(e)&&e>0?e:0}function fe(i){return[...i.querySelectorAll(`[data-line]`)].filter(e=>w(e)>0)}function Q(i,e){let n=null,t=0;for(let r of i){let o=w(r);o<=e&&o>=t&&(n=r,t=o)}return n}function re(i){let e=[0];for(let n=i.indexOf(`
`);n>=0;n=i.indexOf(`
`,n+1))e.push(n+1);return e}function N(i,e){return{blocks:fe(i),lineStarts:re(e)}}function Z(i,e){let{lineStarts:n}=i,t=0,r=n.length-1;for(;t<r;){let o=t+r+1>>1;n[o]<=e?t=o:r=o-1}return t+1}function O(i,e,n){return e<=i.lineStarts.length?i.lineStarts[Math.max(0,e-1)]:n}function oe(i,e){return O({lineStarts:re(i)},e,i.length)}function ie(i,e){let n=i.ownerDocument,t=n.createRange();t.setStartBefore(i),t.setEndAfter(e);let r=n.createTreeWalker(t.commonAncestorContainer,NodeFilter.SHOW_TEXT),o=[],a=``;for(let l=r.nextNode();l;l=r.nextNode()){if(!t.intersectsNode(l)||l.parentElement?.closest(he))continue;let m=l.nodeValue??``;m&&(o.push({node:l,start:a.length}),a+=m)}return{text:a,segments:o}}function ee(i,e,n){let{segments:t}=i;if(!t.length)return null;let r=0,o=t.length-1;for(;r<o;){let s=r+o+1>>1;t[s].start<e||!n&&t[s].start===e?r=s:o=s-1}let a=t[r],l=a.node.nodeValue?.length??0;return{node:a.node,offset:Math.max(0,Math.min(l,e-a.start))}}function L(i){let e=``,n=[],t=!1;for(let r=0;r<i.length;r++){let o=i[r];if(/\s/.test(o)){!t&&e.length&&(e+=` `,n.push(r)),t=!0;continue}t=!1,e+=o,n.push(r)}return e.endsWith(` `)&&(e=e.slice(0,-1),n.pop()),{text:e,index:n}}function ge(i){return k(i).replace(/!?\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^[ \t]*(?:#{1,6}[ \t]+|>[ \t]?|[-*+][ \t]+(?:\[[ xX]\][ \t]+)?|\d+[.)][ \t]+)/gm,``).replace(/(\*\*|__|~~|==|\*|_|`)/g,``)}function te(i,e,n){let t=-1,r=-1,o=i.indexOf(e);for(let a=0;o>=0;a++){if(r<0&&(r=o),a===n){t=o;break}o=i.indexOf(e,o+1)}return t>=0?t:r}function ae(i,e,n,t=0){if(!e)return-1;let r=i.indexOf(e,t);for(let o=0;r>=0&&o<n;o++)r=i.indexOf(e,r+1);return r}function C(i,e,n=Number.POSITIVE_INFINITY){if(!e)return 0;let t=0;for(let r=i.indexOf(e);r>=0&&r<n;r=i.indexOf(e,r+1))t++;return t}function F(i,e,n,t){let r=C(i,n);return r===C(e,n)?ae(i,n,C(e,n,t)):r===1?i.indexOf(n):-1}function pe(i,e,n){let t=te(i.text,e,n);if(t>=0&&e)return{from:t,to:t+e.length};let r=L(i.text);for(let o of[e,ge(e)]){let a=L(o).text;if(!a)continue;let l=te(r.text,a,n);if(l>=0)return{from:r.index[l],to:r.index[l+a.length-1]+1}}return null}function B(i,e,n,t,r=N(i,e)){let{blocks:o}=r;if(!o.length||t<=n)return null;let a=Z(r,n),l=Z(r,Math.max(n,t-1)),s=Q(o,a),m=Q(o,l)??s;if(!s||!m)return null;let[c,g]=s.compareDocumentPosition(m)&Node.DOCUMENT_POSITION_PRECEDING?[m,s]:[s,m],u=ie(c,g),d=e.slice(n,t),h=O(r,w(c),e.length),b=e.slice(h,n),k=0;for(let p=b.indexOf(d);p>=0&&d;p=b.indexOf(d,p+1))k++;let f=i.ownerDocument,y=pe(u,d,k);if(y){let p=ee(u,y.from,!1),v=ee(u,y.to,!0);if(p&&v){let E=f.createRange();return E.setStart(p.node,p.offset),E.setEnd(v.node,v.offset),{range:E,approximate:!1}}}let _=f.createRange();return _.setStart(c,0),c.contains(g)?_.setEnd(c,c.childNodes.length):_.setEnd(g,g.childNodes.length),{range:_,approximate:!0}}function ne(i,e){let t=(e instanceof Element?e:e.parentElement)?.closest(`[data-line]`)??null;return t&&i.contains(t)?t:null}function ve(i,e,n){let t=i.segments.find(o=>o.node===e);if(t)return t.start+n;let r=e.ownerDocument?.createRange();if(!r)return 0;r.setStart(e,n);for(let o of i.segments)if(r.comparePoint(o.node,0)>=0)return o.start;return i.text.length}var be=200;function se(i,e,n,t=N(i,e)){let r=n.toString(),o=r.trim();if(!o)return null;let a=ne(i,n.startContainer),l=ne(i,n.endContainer)??a;if(!a||!l)return null;let s=w(a),m=Math.max(s,w(l)),c=0;for(let x of t.blocks){let T=w(x);T>m&&(!c||T<c)&&(c=T)}let g=O(t,s,e.length),u=c?O(t,c,e.length):e.length,d=e.slice(g,u),h=(x,T)=>({from:g+x,to:g+x+T}),b=ie(a,l),k=ve(b,n.startContainer,n.startOffset)+(r.length-r.trimStart().length),f=F(d,b.text,o,k);if(f>=0)return h(f,o.length);let y=L(o).text,_=L(b.text),p=_.index.findIndex(x=>x>=k),v=L(d),E=F(v.text,_.text,y,p<0?1/0:p);if(E>=0)return{from:g+v.index[E],to:g+v.index[E+y.length-1]+1};let R=o.split(/\s+/).filter(Boolean);if(!R.length)return null;let me=R[0],I=R[R.length-1],P=F(d,b.text,me,k);if(P<0)return null;let W=ae(d,I,C(o,I)-1,P);if(W<0)return null;let G=W+I.length-P;return G>o.length*2+be?null:h(P,G)}var de=[`ark-comment-resolved`,`ark-comment`,`ark-comment-changed`,`ark-comment-overlap`,`ark-comment-active`,`ark-comment-pending`];var ke=300;var _e=300;var le=[`pointerup`,`pointercancel`,`touchend`,`contextmenu`];var ye=5e3;var xe=`ark-note-preview`;function S(i$1){let e=i$1.closest(`[data-note-id]`)?.dataset.noteId;if(!e)return null;try{return i(e)}catch{return null}}function Ee(i,e){if(i.compareBoundaryPoints(Range.END_TO_START,e)>=0||e.compareBoundaryPoints(Range.END_TO_START,i)>=0)return null;let n=i.cloneRange();return i.compareBoundaryPoints(Range.START_TO_START,e)<0&&n.setStart(e.startContainer,e.startOffset),i.compareBoundaryPoints(Range.END_TO_END,e)>0&&n.setEnd(e.endContainer,e.endOffset),n.collapsed?null:n}function we(i,e,n,t){let r=new Map(de.map(u=>[u,[]])),o=(u,d)=>r.get(u)?.push(d),a=/* @__PURE__ */ new Map,l=/* @__PURE__ */ new Map,s=[],m=N(i,e),c=0;for(let u of n){if(c>=ke)break;let{thread:d,anchor:h,place:b}=u;if(h.status!==`exact`&&h.status!==`changed`||b===`orphaned`||d.target.kind===`whole`||d.target.kind===`element`||b===`resolved`&&!t.showResolved)continue;let k=d.target.kind===`section`,f=k?B(i,e,h.from,Math.min(h.to,Se(e,h.from)),m):B(i,e,h.from,h.to,m);if(!f)continue;c++;let y=t.activeThread===d.id;if(l.set(d.id,f.range),b===`resolved`){k||o(`ark-comment-resolved`,f.range);continue}k||(u.changed?o(`ark-comment-changed`,f.range):(o(`ark-comment`,f.range),s.push(f.range)),y&&o(`ark-comment-active`,f.range));let _=f.range.startContainer,p=(_ instanceof Element?_:_.parentElement)?.closest(`[data-line]`);if(!p)continue;let v=a.get(p);v?(v.ids.push(d.id),v.changed&&=u.changed,v.active||=y):a.set(p,{range:f.range,ids:[d.id],changed:u.changed,active:y,section:k})}for(let u=0;u<s.length;u++)for(let d=u+1;d<s.length;d++){let h=Ee(s[u],s[d]);h&&o(`ark-comment-overlap`,h)}let g=t.pending;if(g){let u=B(i,e,g.from,g.to,m);u&&o(`ark-comment-pending`,u.range)}return{ranges:r,markers:[...a].map(([u,d])=>({block:u,range:d.range,threadIds:d.ids,changed:d.changed,active:d.active,section:d.section})),threads:l}}function Se(i,e){let n=i.indexOf(`
`,e);return n<0?i.length:n}var Te=`h1[data-line], h2[data-line], h3[data-line], h4[data-line], h5[data-line], h6[data-line]`;var ce=class{constructor(e,n,t){this._host=e;this._doc=n;this._options=t;H(n),this._unsubscribe=e.onChange(()=>{this.schedule(),this.recheck()}),n.addEventListener(`selectionchange`,this._onSelection),n.addEventListener(`pointerdown`,this._onPointerDown,!0);for(let r of le)n.addEventListener(r,this._onPointerEnd,!0);n.addEventListener(`keydown`,this._onKeydown,!0),n.addEventListener(`visibilitychange`,this._onLeave),n.defaultView?.addEventListener(`blur`,this._onLeave)}_host;_doc;_options;_roots=/* @__PURE__ */ new Set;_paint=/* @__PURE__ */ new Map;_unlisten=/* @__PURE__ */ new Map;_frame=0;_settle;_bar=null;_float=null;_turn=0;_pointer=!1;_waiting=null;_headingButton=/* @__PURE__ */ new Map;_unsubscribe=null;_disposed=!1;_reveal=null;_onSelection=()=>{this.hideBar(),this.scheduleSettle()};_onPointerDown=e=>{this.inBar(e.target)||(this._pointer=!0,clearTimeout(this._settle))};_onPointerEnd=()=>{this._pointer&&(this._pointer=!1,this.scheduleSettle())};_onLeave=()=>{this._pointer=!1};_onKeydown=e=>{!this._bar||!this._options.barKey?.(e)||(e.preventDefault(),e.stopPropagation(),this._bar.focus())};process=e=>{this._disposed||(this._roots.has(e)||(this._roots.add(e),this.listen(e)),this.render(e),this.revealPending())};adopt(){if(!this._disposed)for(let e of this._doc.querySelectorAll(xe))e.querySelector(`:scope > markdown`)&&S(e)&&this.process(e)}reveal(e){this._disposed||(this._reveal={threadId:e,until:Date.now()+ye},this.revealPending()||this.schedule())}dispose(){this._disposed=!0,cancelAnimationFrame(this._frame),clearTimeout(this._settle),this._unsubscribe?.(),this._unsubscribe=null,this._doc.removeEventListener(`selectionchange`,this._onSelection),this._doc.removeEventListener(`pointerdown`,this._onPointerDown,!0);for(let e of le)this._doc.removeEventListener(e,this._onPointerEnd,!0);this._doc.removeEventListener(`keydown`,this._onKeydown,!0),this._doc.removeEventListener(`visibilitychange`,this._onLeave),this._doc.defaultView?.removeEventListener(`blur`,this._onLeave),this.hideBar();for(let e of this._roots)this.forget(e);this._roots.clear(),this._paint.clear(),this.flush()}schedule(){this._disposed||(cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame(()=>{for(let e of[...this._roots]){if(!e.isConnected){this.forget(e),this._roots.delete(e),this._paint.delete(e);continue}this.render(e,!1)}this.flush(),this.revealPending()}))}revealPending(){let e=this._reveal;if(!e)return!1;if(Date.now()>e.until)return this._reveal=null,!1;for(let[n,t]of this._paint){let r=t.threads.get(e.threadId);if(!r||!n.isConnected)continue;let o=r.startContainer,a=o instanceof Element?o:o.parentElement;if(a)return this._reveal=null,a.scrollIntoView?.({block:`center`}),!0}return!1}render(e,n=!0){let t=S(e),r=t?this._host.sessions().get(t):void 0;if(!r)this.clearMarkers(e),this._paint.delete(e);else{let o=this._host.pending(),a=we(e,r.source(),r.threads(),{activeThread:this._host.activeThread(),showResolved:this._host.tab()===`resolved`,pending:o?.noteId===t?o:null});this._paint.set(e,a),this.drawMarkers(e,a)}n&&this.flush()}flush(){let e=this._doc.defaultView,n=e?.CSS?.highlights,t=e?.Highlight;!n||!t||de.forEach((r,o)=>{let a=[...this._paint.values()].flatMap(s=>s.ranges.get(r)??[]);if(!a.length){n.delete(r);return}let l=new t(...a);l.priority=o,n.set(r,l)})}column(e){return e.querySelector(`:scope > markdown`)??e}place(e,n,t){return{top:t.top-n.top+e.scrollTop,left:t.left-n.left+e.scrollLeft,right:t.right-n.left+e.scrollLeft}}clearMarkers(e){for(let n of e.querySelectorAll(`.ark-comment-marker`))n.remove()}drawMarkers(e,n){let t=e.getBoundingClientRect(),r=this.place(e,t,this.column(e).getBoundingClientRect()),o=`${Math.min(e.scrollLeft+e.clientWidth-34,r.right+8)}px`,a=n.markers.map(s=>{let m=s.range.getClientRects()[0]??s.block.getBoundingClientRect();return{marker:s,top:`${Math.max(0,this.place(e,t,m).top+(m.height-22)/2)}px`}});if(this.clearMarkers(e),!a.length)return;let l=this._doc.createDocumentFragment();for(let{marker:s,top:m}of a){let c=this._doc.createElement(`button`);c.type=`button`,c.className=`ark-comment-marker`,c.dataset.commentUi=``,c.dataset.threads=s.threadIds.join(` `),c.dataset.count=String(s.threadIds.length),s.changed&&(c.dataset.changed=``),s.active&&(c.dataset.active=``),s.section&&(c.dataset.section=``),c.setAttribute(`contenteditable`,`false`),c.setAttribute(`aria-label`,this._options.translate(`comments.marker`,{count:s.threadIds.length})),c.innerHTML=Zt,c.style.top=m,c.style.left=o,l.append(c)}e.append(l)}listen(e){if(this._unlisten.has(e))return;let n=o=>this.clicked(e,o),t=o=>this.hovered(e,o),r=o=>this.left(e,o);e.addEventListener(`click`,n),e.addEventListener(`mouseover`,t),e.addEventListener(`mouseout`,r),this._unlisten.set(e,()=>{e.removeEventListener(`click`,n),e.removeEventListener(`mouseover`,t),e.removeEventListener(`mouseout`,r)})}forget(e){this._unlisten.get(e)?.(),this._unlisten.delete(e),this.clearMarkers(e),this._headingButton.get(e)?.remove(),this._headingButton.delete(e)}clicked(e,n){let t=n.target instanceof Element?n.target:null,r=t?.closest(`.ark-comment-marker`);if(r){n.preventDefault();let s=r.dataset.threads?.split(` `)[0];s&&this._host.focusThread(s);return}if(t?.closest(`a, button, input, textarea, select, label, summary`))return;let o=this._doc.getSelection();if(o&&!o.isCollapsed)return;let a=this._paint.get(e);if(!a?.threads.size)return;let l=Me(this._doc,n.clientX,n.clientY);if(l)for(let[s,m]of a.threads)try{if(m.isPointInRange(l.node,l.offset)){this._host.focusThread(s);return}}catch{}}hovered(e,n){let t=n.target instanceof Element?n.target:null,r=this._headingButton.get(e);if(r&&t&&r.contains(t))return;let o=t?.closest(Te),a=S(e);if(!o||!e.contains(o)||!a||!this._host.mayComment(a)){r&&delete r.dataset.shown;return}this.showHeadingButton(e,o)}left(e,n){let t=n.relatedTarget instanceof Node?n.relatedTarget:null;if(t&&e.contains(t))return;let r=this._headingButton.get(e);r&&delete r.dataset.shown}showHeadingButton(e,n){let t=this._headingButton.get(e);if(!t){let s=this._doc.createElement(`button`);s.type=`button`,s.className=`ark-comment-heading-add`,s.dataset.commentUi=``,s.setAttribute(`contenteditable`,`false`),s.setAttribute(`aria-label`,this._options.translate(`comments.section.add`)),s.title=this._options.translate(`comments.section.add`),s.innerHTML=Xt,s.addEventListener(`click`,m=>{m.preventDefault(),m.stopPropagation(),this.commentOnSection(e,Number(s.dataset.line))}),this._headingButton.set(e,s),t=s}t.parentElement!==e&&e.append(t);let r=e.getBoundingClientRect(),o=n.getBoundingClientRect(),a=this.place(e,r,o),l=this.place(e,r,this.column(e).getBoundingClientRect());t.dataset.line=n.dataset.line??``,t.style.top=`${a.top+(o.height-26)/2}px`,t.style.left=`${Math.min(e.scrollLeft+e.clientWidth-30,l.right+8)}px`,t.dataset.shown=``}commentOnSection(e,n){let t=S(e),r=t?this._host.sessions().get(t):void 0;if(!t||!r||!Number.isInteger(n))return;let o=r.source(),a=it(o,n);if(!a)return;let l=oe(o,n);this._host.commentOn(t,a,{from:l,to:l})}scheduleSettle(){clearTimeout(this._settle),this._turn++,!(this._pointer||this._disposed)&&(this._settle=setTimeout(()=>this.settled(),_e))}inBar(e){return e instanceof Element&&e.closest(`[data-comment-bar]`)!==null}settled(){if(this._disposed||this._pointer)return;let e=this._doc.getSelection();if(!e||e.isCollapsed||!e.rangeCount)return;let n=e.getRangeAt(0),t=[...this._roots].find(c=>c.contains(n.commonAncestorContainer));if(!t)return;let r=S(t),o=r?this._host.sessions().get(r):void 0;if(!r)return;if(this._waiting=null,!o){this._waiting=this._turn;return}let a=o.source(),l=se(t,a,n),s=l?st(a,l.from,l.to):null;if(!l||!s)return;let m={noteId:r,from:l.from,to:l.to,target:s};this._host.select(m),this._host.mayComment(r)?this.showBar(t,n,m):this._waiting=this._turn}recheck(){let e=this._waiting;if(e===null||this._disposed)return;if(e!==this._turn||this._bar||this._float){this._waiting=null;return}let n=this._doc.getSelection(),t=n?.rangeCount?n.getRangeAt(0):null,r=t&&[...this._roots].find(a=>a.contains(t.commonAncestorContainer)),o=r?S(r):null;!o||!this._host.sessions().get(o)||!this._host.mayComment(o)||(this._waiting=null,this.settled())}async showBar(e,n,t){this.hideBar();let r=this._turn,o=U(this._options,()=>this._host.commentOn(t.noteId,t.target,{from:t.from,to:t.to})),a=await this._options.showBar({root:e,range:n,actions:[o],attributes:{"data-comment-ui":``,"data-comment-bar":``},onHidden:()=>{this._bar===a&&(this._bar=null)}});if(this._disposed||r!==this._turn){a?.hide();return}if(a){this._bar=a;return}let l=n.getClientRects(),s=l[l.length-1]??n.getBoundingClientRect();this._float=J(this._doc,s,{label:o.label,shortcut:o.shortcut,onComment:()=>{this._float=null,o.run()}})}hideBar(){let e=this._bar;this._bar=null,e?.hide(),this._float?.(),this._float=null}};function Me(i,e,n){let t=i,r=t.caretPositionFromPoint?.(e,n);if(r)return{node:r.offsetNode,offset:r.offset};let o=t.caretRangeFromPoint?.(e,n);return o?{node:o.startContainer,offset:o.startOffset}:null}export{S as a,Re as i,J as n,U as o,Le as r,ce as s,H as t};