function u(e,r,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!n:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(e):n?n.value:r.get(e)}function _(e,r,t,n,a){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!a:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?a.call(e,t):a?a.value=t:r.set(e,t),t}var i;function d(e,r=!1){return window.__TAURI_INTERNALS__.transformCallback(e,r)}async function o(e,r={},t){return window.__TAURI_INTERNALS__.invoke(e,r,t)}class E{get rid(){return u(this,i,"f")}constructor(r){i.set(this,void 0),_(this,i,r,"f")}async close(){return o("plugin:resources|close",{rid:this.rid})}}i=new WeakMap;var s;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WEBVIEW_CREATED="tauri://webview-created",e.FILE_DROP="tauri://file-drop",e.FILE_DROP_HOVER="tauri://file-drop-hover",e.FILE_DROP_CANCELLED="tauri://file-drop-cancelled"})(s||(s={}));async function c(e,r){await o("plugin:event|unlisten",{event:e,eventId:r})}async function l(e,r,t){const n=typeof t?.target=="string"?{kind:"AnyLabel",label:t.target}:t?.target??{kind:"Any"};return o("plugin:event|listen",{event:e,target:n,handler:d(r)}).then(a=>async()=>c(e,a))}async function p(e,r,t){return l(e,n=>{r(n),c(e,n.id).catch(()=>{})},t)}async function f(e,r){await o("plugin:event|emit",{event:e,payload:r})}async function w(e,r,t){await o("plugin:event|emit_to",{target:typeof e=="string"?{kind:"AnyLabel",label:e}:e,event:r,payload:t})}const y=Object.freeze(Object.defineProperty({__proto__:null,get TauriEvent(){return s},emit:f,emitTo:w,listen:l,once:p},Symbol.toStringTag,{value:"Module"}));export{E as R,s as T,w as a,y as b,f as e,o as i,l,p as o};