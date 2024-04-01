function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CM5sneY7.js","assets/index-CKM4EYV8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c as n,t as _,_ as i,s as d}from"./index-CM5sneY7.js";var l=_("<div class=Corner>");const s=(await i(()=>import("./index-CM5sneY7.js").then(e=>e.a),__vite__mapDeps([0,1]))).createSignal(window.settings.size);await(await i(()=>import("./event-BS10l0P-.js").then(e=>e.b),[])).listen("size",async e=>{s[1](e.payload.message.Size)});const m=async e=>(()=>{var r=l();return n(t=>{var o=v({id:"Default"},e).id,a=`${s[0]()}px`;return o!==t.e&&d(r,"data-corner",t.e=o),a!==t.t&&((t.t=a)!=null?r.style.setProperty("--Corner",a):r.style.removeProperty("--Corner")),t},{e:void 0,t:void 0}),r})(),{mergeProps:v}=await i(()=>import("./index-CM5sneY7.js").then(e=>e.a),__vite__mapDeps([0,1]));export{s as Size,m as default,v as mergeProps};
