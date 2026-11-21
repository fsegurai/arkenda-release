import{c as V,g as ye}from"./chunk-AVKg-Lq8.js";import{r as Oe}from"./chunk-ByZpXeJg.js";import{u as ue}from"./chunk-CQqV3Kvp.js";import{kt as x}from"./main-IMHIOCVI.js";import{n as H}from"./chunk-D4ljdc47.js";var E=`whiteboard`;var f=`\`\`\`${V}
${ye}
\`\`\`
`;async function h(t){let e=t.get(x),p=t.get(Oe).translate(`whiteboard.newTitle`),r=await e.create({title:p,body:f});try{await e.transform(r.id,(o,d)=>H(o,E,d))}catch(o){console.error(`The new whiteboard could not be typed; it opens as a note.`,o)}await t.get(ue).navigate([`/notes`,r.id])}export{f as n,h as r,E as t};