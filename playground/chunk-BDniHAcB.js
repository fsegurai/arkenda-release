import{kt as Uo,nr as oe}from"./chunk-CibnGSF9.js";var i$1=class a{_active=Uo([]);active=this._active.asReadonly();add(t){return this._active.update(e=>[...e.filter(n=>n.id!==t.id),t]),()=>this._active.update(e=>e.filter(n=>n!==t))}static ɵfac=function(e){return new(e||a)};static ɵprov=oe({token:a,factory:a.ɵfac,providedIn:`root`})};var t={"md-tables":()=>import(`./chunk-CerxzVQ2.js`).then(n=>n.installTables),"md-typographic":()=>import(`./chunk-xgZAufwt.js`).then(n=>n.installTypographic),"md-spoiler":()=>import(`./chunk-BnI3DWEV.js`).then(n=>n.installSpoiler),"md-tabs":()=>import(`./chunk-C-WoQ-rl.js`).then(n=>n.installTabs),"md-timeline":()=>import(`./chunk-BYbF_Bku.js`).then(n=>n.installTimeline),"md-code":()=>import(`./chunk-BOC1JEHr.js`).then(n=>n.installCode),"md-mermaid-export":()=>import(`./chunk-Bh7ib9P5.js`).then(n=>n.installMermaidExport),"md-map":()=>import(`./chunk-CNFD6w2I.js`).then(n=>n.installMap),"md-accordion":()=>import(`./chunk-CbdDS9JH.js`).then(n=>n.installAccordion),"md-kanban":()=>import(`./chunk-MxMVhswx.js`).then(n=>n.installKanban),"md-slide":()=>import(`./chunk-DT3Fhu-y.js`).then(n=>n.installSlide),"md-comments":()=>import(`./chunk-KU0_g6Ih.js`).then(n=>n.installComments),"md-lists":()=>import(`./chunk-DQ5zh15z.js`).then(n=>n.installLists),"md-inline":()=>import(`./chunk-D-KZqH9T.js`).then(n=>n.installInline)};var e=[`blocks`,`inline`,`tables`,`diagrams`];var i=[{id:`md-spoiler`,group:`blocks`,syntax:"```spoiler\ntitle: Ending\n---\nThe butler did it.\n```",insertKey:`markdownFeatures.insert.spoiler`},{id:`md-tabs`,group:`blocks`,syntax:`\`\`\`tabs
label: One

First tab
---
label: Two

Second tab
\`\`\``,insertKey:`markdownFeatures.insert.tabs`},{id:`md-accordion`,group:`blocks`,syntax:"```accordion\ntitle: Details\n---\nOpens and closes.\n```",insertKey:`markdownFeatures.insert.accordion`},{id:`md-kanban`,group:`blocks`,syntax:`\`\`\`kanban
## To do
- Draft @ana !high

## Done
- Outline
\`\`\``,insertKey:`markdownFeatures.insert.kanban`},{id:`md-slide`,group:`blocks`,syntax:`\`\`\`presentation
title: Review
---
# First slide
---
## Second slide
\`\`\``,insertKey:`markdownFeatures.insert.slide`},{id:`md-comments`,group:`blocks`,syntax:"```comments\nauthor: Ana\ntype: note\n---\nCheck this figure.\n```",insertKey:`markdownFeatures.insert.comment`},{id:`md-code`,group:`blocks`,syntax:'```ts title="app.ts" {2} showLineNumbers\nconst a = 1;\nconst b = 2;\n```',insertKey:null},{id:`md-lists`,group:`blocks`,syntax:`a. First
b. Second

i. One
ii. Two`,insertKey:null},{id:`md-embeds`,group:`blocks`,syntax:`https://www.youtube.com/watch?v=…`,insertKey:null},{id:`md-typographic`,group:`inline`,syntax:`"Quotes" -- dashes --- and...`,insertKey:null},{id:`md-inline`,group:`inline`,syntax:`++inserted++ x^2^ H~2~O`,insertKey:null},{id:`md-tables`,group:`tables`,syntax:`[Sales]
| Region || Total |
| ------ | --- | ----- |
| North  | Q1  | 10    |`,insertKey:null},{id:`md-timeline`,group:`diagrams`,syntax:'```timeline\n---\ndate: "2026-01-01"\n## Launch\n```',insertKey:`markdownFeatures.insert.timeline`},{id:`md-map`,group:`diagrams`,syntax:"```map\nlat: 9.9281\nlon: -84.0907\nzoom: 12\n```",insertKey:`markdownFeatures.insert.map`},{id:`md-mermaid-export`,group:`diagrams`,syntax:"```mermaid\ngraph LR\n  A --> B\n```",insertKey:null,capability:`page-download`}];export{i$1 as i,i as n,t as r,e as t};