import{c as V,g as ye}from"./chunk-AVKg-Lq8.js";import{r as Oe}from"./chunk-BnonM08p.js";import{m as ue}from"./chunk-BGTr8CtY.js";import{jt as x}from"./main-G4CTUYVQ.js";import{n as H}from"./chunk-YTwKBz3I.js";var E=`whiteboard`;var f=`\`\`\`${V}
${ye}
\`\`\`
`;async function h(t){let e=t.get(x),p=t.get(Oe).translate(`whiteboard.newTitle`),r=await e.create({title:p,body:f});try{await e.transform(r.id,(o,d)=>H(o,E,d))}catch(o){console.error(`The new whiteboard could not be typed; it opens as a note.`,o)}await t.get(ue).navigate([`/notes`,r.id])}export{f as n,h as r,E as t};