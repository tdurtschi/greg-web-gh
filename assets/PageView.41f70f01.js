import{d as I,c as m,a as o,b as g,w as h,u as s,r as P,o as a,e as v,p as y,f as D,g as t,_ as R,h as x,i as k,F as p,j as b,t as l,k as w,l as f,P as V}from"./index.31ec53fc.js";const L=e=>(y("data-v-3d2334d1"),e=e(),D(),e),S={class:"prev-next-links"},B=L(()=>t("div",{class:"spacer"},null,-1)),C=I({__name:"PrevNextLinks",props:{pageData:null,currentRoute:null},setup(e){const n=e,c=m(()=>{const r=n.pageData.findIndex(u=>u.routeName==n.currentRoute);return r<n.pageData.length-1?n.pageData[r+1].routeName:"home"}),_=m(()=>{const r=n.pageData.findIndex(u=>u.routeName==n.currentRoute);return r==0?"home":n.pageData[r-1].routeName});return(r,u)=>{const i=P("RouterLink");return a(),o("div",S,[g(i,{"data-link-prev":"",to:{name:s(_)},disabled:e.currentRoute=="home"},{default:h(()=>[v("<Previous")]),_:1},8,["to","disabled"]),B,g(i,{"data-link-next":"",to:{name:s(c)},disabled:e.currentRoute==e.pageData[e.pageData.length-1].routeName},{default:h(()=>[v("Next>")]),_:1},8,["to","disabled"])])}}});const N=R(C,[["__scopeId","data-v-3d2334d1"]]),$=e=>(y("data-v-21bcd158"),e=e(),D(),e),F={class:"page-layout"},T={class:"content"},j={class:"links-container-lg"},A=["src"],E={key:1},q={class:"about"},z={class:"links-container-sm"},G=$(()=>t("div",{class:"placeholder-lg"},"\xA0",-1)),H={class:"two-col"},J={class:"col-a"},K=I({__name:"PageView",props:{content:null,about:null},setup(e){const n=_=>_ instanceof V,c=w();return console.log(c.name),(_,r)=>{var u,i;return a(),o("div",F,[t("div",T,[t("div",j,[s(c).name!="home"?(a(),x(N,{key:0,"page-data":s(f),"current-route":s(c).name},null,8,["page-data","current-route"])):k("",!0)]),(a(!0),o(p,null,b(e.content,d=>(a(),o(p,null,[n(d)?(a(),o("img",{key:0,src:d.path},null,8,A)):(a(),o("div",E,l(d),1))],64))),256))]),t("div",q,[t("div",z,[s(c).name!="home"?(a(),x(N,{key:0,"page-data":s(f),"current-route":s(c).name},null,8,["page-data","current-route"])):k("",!0)]),G,t("p",null,"["+l((u=e.about.superTitle)!=null?u:"")+"]",1),t("h1",null,l(e.about.title),1),(a(!0),o(p,null,b(e.about.titleSections,d=>(a(),o("div",H,[t("div",J,l(d.label),1),t("div",null,l(d.value),1)]))),256)),t("p",null,l((i=e.about.description)!=null?i:""),1)])])}}});const O=R(K,[["__scopeId","data-v-21bcd158"]]);export{O as default};
