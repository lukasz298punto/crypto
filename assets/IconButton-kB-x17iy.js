import{d as v,a as B,g as N,s as I,c as i,m as b,i as R,b as C,r as O,u as $,j as k,e as E}from"./index-BAhXjIB1.js";import{B as h}from"./useTranslation-ODiXJTJo.js";function S(e){return typeof e=="string"}function W(e,s,t){return e===void 0||S(e)?s:{...s,ownerState:{...s.ownerState,...t}}}function H(e,s=[]){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!s.includes(n)).forEach(n=>{t[n]=e[n]}),t}function z(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]=="function")).forEach(t=>{s[t]=e[t]}),s}function Z(e){const{getSlotProps:s,additionalProps:t,externalSlotProps:n,externalForwardedProps:a,className:r}=e;if(!s){const f=v(t==null?void 0:t.className,r,a==null?void 0:a.className,n==null?void 0:n.className),g={...t==null?void 0:t.style,...a==null?void 0:a.style,...n==null?void 0:n.style},m={...t,...a,...n};return f.length>0&&(m.className=f),Object.keys(g).length>0&&(m.style=g),{props:m,internalRef:void 0}}const c=H({...a,...n}),y=z(n),p=z(a),o=s(c),l=v(o==null?void 0:o.className,t==null?void 0:t.className,r,a==null?void 0:a.className,n==null?void 0:n.className),d={...o==null?void 0:o.style,...t==null?void 0:t.style,...a==null?void 0:a.style,...n==null?void 0:n.style},u={...o,...t,...p,...y};return l.length>0&&(u.className=l),Object.keys(d).length>0&&(u.style=d),{props:u,internalRef:o.ref}}function D(e,s,t){return typeof e=="function"?e(s,t):e}function j(e){return N("MuiIconButton",e)}const M=B("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),U=e=>{const{classes:s,disabled:t,color:n,edge:a,size:r}=e,c={root:["root",t&&"disabled",n!=="default"&&`color${i(n)}`,a&&`edge${i(a)}`,`size${i(r)}`]};return E(c,j,s)},A=I(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,t.color!=="default"&&s[`color${i(t.color)}`],t.edge&&s[`edge${i(t.edge)}`],s[`size${i(t.size)}`]]}})(b(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:{disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:R(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),b(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(C()).map(([s])=>({props:{color:s},style:{color:(e.vars||e).palette[s].main}})),...Object.entries(e.palette).filter(C()).map(([s])=>({props:{color:s,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${(e.vars||e).palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:R((e.vars||e).palette[s].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${M.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}))),V=O.forwardRef(function(s,t){const n=$({props:s,name:"MuiIconButton"}),{edge:a=!1,children:r,className:c,color:y="default",disabled:p=!1,disableFocusRipple:o=!1,disableRipple:l=!1,size:d="medium",...u}=n,f={...n,edge:a,color:y,disabled:p,disableFocusRipple:o,disableRipple:l,size:d},g=U(f);return k.jsx(A,{className:v(g.root,c),centerRipple:!0,focusRipple:!o,disabled:p,disableRipple:l,ref:t,...u,ownerState:f,children:r})});export{V as I,W as a,H as e,Z as m,D as r};