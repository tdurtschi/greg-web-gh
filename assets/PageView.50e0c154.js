import{d as p,c as e,a as s,F as l,r as _,t as o,u as v,o as n,P as b,C as g,_ as f}from"./index.cdcd99b4.js";const m={class:"page-layout"},y={class:"content"},x=["src"],k={key:1,class:"caption"},I={key:2},P={class:"about"},w={class:"about-container"},C={class:"two-col"},V={class:"col-a"},B=["innerHTML"],L=p({__name:"PageView",props:{content:null,about:null},setup(a){const r=c=>c instanceof b,d=c=>c instanceof g,h=v();return console.log(h.name),(c,T)=>{var i,u;return n(),e("div",m,[s("div",y,[(n(!0),e(l,null,_(a.content,t=>(n(),e(l,null,[r(t)?(n(),e("img",{key:0,src:t.path},null,8,x)):d(t)?(n(),e("div",k,o(t.text),1)):(n(),e("div",I,o(t)+"\xA0",1))],64))),256))]),s("div",P,[s("p",null,"["+o((i=a.about.superTitle)!=null?i:"")+"]",1),s("h1",null,o(a.about.title),1),s("div",w,[(n(!0),e(l,null,_(a.about.titleSections,t=>(n(),e("div",C,[s("div",V,o(t.label),1),s("div",null,o(t.value),1)]))),256))]),s("p",{innerHTML:(u=a.about.description)!=null?u:""},null,8,B)])])}}});const H=f(L,[["__scopeId","data-v-f055f5bb"]]);export{H as default};
