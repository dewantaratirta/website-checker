function B(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(L)}function F(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function lt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function ut(t,n,e,i,r,s){if(r){const l=O(n,e,i,s);t.p(l,r)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ft(t){return t==null?"":t}let $=!1;function I(){$=!0}function G(){$=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:J(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<s.length&&l[c].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(l[c],a)}}function W(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function at(t,n,e){$&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function dt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function R(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function _t(){return j(" ")}function ht(){return j("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){V(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(n))}function yt(t,n,e){return X(t,n,e,R)}function Y(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function gt(t){return Y(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function $t(t){E().$$.on_mount.push(t)}function Et(t){E().$$.after_update.push(t)}function vt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=Z(n,e,{cancelable:i});return r.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function wt(t,n){return E().$$.context.set(t,n),n}const _=[],S=[],x=[],M=[],T=Promise.resolve();let w=!1;function D(){w||(w=!0,T.then(q))}function kt(){return D(),T}function k(t){x.push(t)}const v=new Set;let g=0;function q(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),tt(n.$$)}for(h(null),_.length=0,g=0;S.length;)S.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(_.length);for(;M.length;)M.pop()();w=!1,v.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let d;function jt(){d={r:0,c:[],p:d}}function Nt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function At(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ct(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[s]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function St(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const c=s.map(L).filter(F);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(k)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,r,s,l,o=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:B,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...N)=>{const A=N.length?N[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=A)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](A),a&&rt(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){I();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(Q)}else u.fragment&&u.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),G(),q()}h(c)}class Ot{$destroy(){it(this,1),this.$destroy=B}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ct as A,St as B,it as C,z as D,kt as E,lt as F,ut as G,st as H,ot as I,W as J,ft as K,mt as L,vt as M,dt as N,S as O,Ot as S,_t as a,at as b,gt as c,Nt as d,ht as e,nt as f,jt as g,Q as h,Lt as i,wt as j,Et as k,R as l,yt as m,B as n,$t as o,U as p,pt as q,bt as r,ct as s,At as t,j as u,Y as v,xt as w,Mt as x,Bt as y,et as z};
