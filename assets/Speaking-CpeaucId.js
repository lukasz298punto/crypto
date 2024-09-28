import{q as $,v as D,c as m,r as k,a as z,j as e}from"./index-X_hScAMt.js";import{C as A,V as N,B as g}from"./VoiceIcon-i_U9U9Gh.js";import{g as T,a as U,b as j,m as I,d as V,c as E,e as F,S as c,T as y}from"./Stack-DTH2VSBZ.js";import{u as B,C as K,a as W}from"./useTranslation-BxsxkDgR.js";import{A as q}from"./Alert-NKKJH4pt.js";import"./createSvgIcon-s20u4GF2.js";import"./IconButton-8ArnYtN0.js";import"./useSlot-lRID2jQ7.js";function G(s){return T("MuiCircularProgress",s)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const i=44,v=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,C=$`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,H=typeof v!="string"?D`
        animation: ${v} 1.4s linear infinite;
      `:null,O=typeof C!="string"?D`
        animation: ${C} 1.4s ease-in-out infinite;
      `:null,Z=s=>{const{classes:r,variant:a,color:t,disableShrink:o}=s,n={root:["root",a,`color${m(t)}`],svg:["svg"],circle:["circle",`circle${m(a)}`,o&&"circleDisableShrink"]};return F(n,G,r)},J=j("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:a}=s;return[r.root,r[a.variant],r[`color${m(a.color)}`]]}})(I(({theme:s})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:s.transitions.create("transform")}},{props:{variant:"indeterminate"},style:H||{animation:`${v} 1.4s linear infinite`}},...Object.entries(s.palette).filter(V()).map(([r])=>({props:{color:r},style:{color:(s.vars||s).palette[r].main}}))]}))),L=j("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(s,r)=>r.svg})({display:"block"}),Q=j("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(s,r)=>{const{ownerState:a}=s;return[r.circle,r[`circle${m(a.variant)}`],a.disableShrink&&r.circleDisableShrink]}})(I(({theme:s})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:s.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:O||{animation:`${C} 1.4s ease-in-out infinite`}}]}))),X=k.forwardRef(function(r,a){const t=z({props:r,name:"MuiCircularProgress"}),{className:o,color:n="primary",disableShrink:p=!1,size:u=40,style:M,thickness:l=3.6,value:h=0,variant:w="indeterminate",...R}=t,d={...t,color:n,disableShrink:p,size:u,thickness:l,value:h,variant:w},f=Z(d),x={},P={},S={};if(w==="determinate"){const b=2*Math.PI*((i-l)/2);x.strokeDasharray=b.toFixed(3),S["aria-valuenow"]=Math.round(h),x.strokeDashoffset=`${((100-h)/100*b).toFixed(3)}px`,P.transform="rotate(-90deg)"}return e.jsx(J,{className:E(f.root,o),style:{width:u,height:u,...P,...M},ownerState:d,ref:a,role:"progressbar",...S,...R,children:e.jsx(L,{className:f.svg,ownerState:d,viewBox:`${i/2} ${i/2} ${i} ${i}`,children:e.jsx(Q,{className:f.circle,style:x,ownerState:d,cx:i,cy:i,r:(i-l)/2,fill:"none",strokeWidth:l})})})});function or(){const[s]=k.useState(""),{t:r}=B(),a={wordPolish:"Dom",wordEnglish:"House",pronunciation:"house"},[t,o]=k.useState(!1),n=()=>{o(!0)},p=()=>{console.log("Użytkownik zaznaczył odpowiedź jako poprawną"),o(!1)};return e.jsx(A,{maxWidth:"md",children:e.jsx(K,{className:"p-2",children:e.jsx(W,{children:e.jsxs(c,{alignItems:"center",justifyContent:"center",children:[e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(y,{variant:"h2",className:"font-medium",children:a.wordPolish}),e.jsx(N,{isPlaying:!0,onPlay:()=>{}})]}),e.jsxs(c,{direction:"row",alignItems:"center",className:E("mb-2",{"opacity-0":!t}),children:[e.jsx(y,{variant:"h5",color:"text.secondary",children:a.wordEnglish}),e.jsx(N,{isPlaying:!0,onPlay:()=>{}})]}),t&&e.jsx(e.Fragment,{children:e.jsx(q,{severity:(a==null?void 0:a.wordEnglish)===s?"success":"error",className:"mb-2 h-[56px] w-full xy-center",children:s})}),!t&&e.jsxs(c,{gap:1,direction:"row",alignItems:"center",className:"mb-2 h-[56px]",children:[e.jsx(X,{size:20}),e.jsx(y,{children:r("Trwa nagrywanie dzwięku...")})]}),t?e.jsx(g,{className:"w-full flex-1",variant:"contained",onClick:p,children:r("Następne słowo (Enter)")}):e.jsxs(c,{className:"w-full",direction:"row",gap:1,children:[e.jsx(g,{className:"flex-1",color:"error",variant:"contained",onClick:n,children:r("Pomiń (Spacja)")}),e.jsx(g,{className:"flex-1",variant:"contained",onClick:n,children:r("Nagraj (Enter)")})]})]})})})})}export{or as default};
