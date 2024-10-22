import{g as I,a as R,w as x,x as P,s as b,c as n,m,b as f,r as q,u as w,h as N,j as i,d as O,e as S,l as z,k as M}from"./index-BzY3eGNP.js";import{S as T,T as D}from"./useTranslation-jSH4eCKQ.js";function A(e){return I("MuiLinearProgress",e)}R("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const v=4,y=x`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,U=typeof y!="string"?P`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,h=x`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,K=typeof h!="string"?P`
        animation: ${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,C=x`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,V=typeof C!="string"?P`
        animation: ${C} 3s infinite linear;
      `:null,E=e=>{const{classes:r,variant:a,color:t}=e,s={root:["root",`color${n(t)}`,a],dashed:["dashed",`dashedColor${n(t)}`],bar1:["bar",`barColor${n(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${n(t)}`,a==="buffer"&&`color${n(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return S(s,A,r)},$=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?z(e.palette[r].main,.62):M(e.palette[r].main,.5),X=b("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${n(a.color)}`],r[a.variant]]}})(m(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:$(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),F=b("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${n(a.color)}`]]}})(m(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(f()).map(([r])=>{const a=$(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),V||{animation:`${C} 3s infinite linear`}),_=b("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(m(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:U||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),G=b("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(m(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(f()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:$(e,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:K||{animation:`${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),H=q.forwardRef(function(r,a){const t=w({props:r,name:"MuiLinearProgress"}),{className:s,color:j="primary",value:g,valueBuffer:k,variant:l="indeterminate",...B}=t,c={...t,color:j,variant:l},p=E(c),L=N(),u={},d={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&g!==void 0){u["aria-valuenow"]=Math.round(g),u["aria-valuemin"]=0,u["aria-valuemax"]=100;let o=g-100;L&&(o=-o),d.bar1.transform=`translateX(${o}%)`}if(l==="buffer"&&k!==void 0){let o=(k||0)-100;L&&(o=-o),d.bar2.transform=`translateX(${o}%)`}return i.jsxs(X,{className:O(p.root,s),ownerState:c,role:"progressbar",...u,ref:a,...B,children:[l==="buffer"?i.jsx(F,{className:p.dashed,ownerState:c}):null,i.jsx(_,{className:p.bar1,ownerState:c,style:d.bar1}),l==="determinate"?null:i.jsx(G,{className:p.bar2,ownerState:c,style:d.bar2})]})});function W({total:e,value:r}){const a=e??0,t=r??0,s=a>0?t/a*100:0;return i.jsxs(T,{gap:1,alignItems:"center",direction:"row",children:[i.jsx(H,{className:"flex-1",variant:"determinate",value:s,color:s===100?"success":"warning"}),i.jsx(D,{variant:"body2",sx:{color:"text.secondary"},children:`${r||0}/${e||0}`})]})}export{W as P};
