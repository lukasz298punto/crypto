import{r as N,j as a,y as u,d as m,B as T}from"./index-DwYHCt07.js";import{u as v,F as I,C as S,N as b,V as d,K as s,H as F,a as i}from"./useWord-CdxOG12R.js";import{u as U}from"./useSettingsDb-D1oE0WAS.js";import{c as B,S as n,T as h}from"./useTranslation-D0ElvFKS.js";import{C as D,a as E}from"./CardContent-BET2l6Vy.js";import"./IconButton-DrsGSIKw.js";import"./createSvgIcon-DkbpZzzk.js";function z(){const{t}=B(),{currentWord:e,nextWord:c,skip:j,check:x,reset:p,lang:r,nativeLang:g,isLoading:C}=v(),[o,l]=N.useState(!1),{language:y}=U(),f=()=>{l(!0)},k=()=>{x(e.translation),l(!1),c()},w=()=>{x(e.translation+"sss"),l(!1),c()};return C?a.jsx(u,{}):e?(console.log(e,"currentWord"),a.jsx(S,{maxWidth:"md",children:a.jsx(D,{className:"p-2",children:a.jsx(E,{children:a.jsxs(n,{alignItems:"center",justifyContent:"center",children:[a.jsxs(n,{direction:"row",alignItems:"center",children:[a.jsx(b,{word:(e==null?void 0:e.word)+` (${e==null?void 0:e.wordDesc})`}),a.jsx(d,{name:e==null?void 0:e.word,keyCode:s.Three,language:g,autoPlay:!0})]}),a.jsxs(n,{direction:"row",alignItems:"center",className:m("mb-2 h-[45px]",{"opacity-0":!o}),children:[a.jsx(h,{variant:"h5",color:"text.secondary",children:e==null?void 0:e.translation}),o&&a.jsx(d,{name:e==null?void 0:e.translation,keyCode:s.Three,language:r,autoPlay:!0})]}),a.jsx(T,{className:m({"opacity-0":!o}),children:(e==null?void 0:e.exampleUsedTranslation)&&a.jsxs(n,{direction:"row",alignItems:"center",children:[a.jsx(F,{text:e==null?void 0:e.exampleUsedTranslation,trans:y===r?e.translation:e.word}),a.jsx(d,{name:e==null?void 0:e.exampleUsedTranslation,keyCode:s.Four,language:r})]})}),(e==null?void 0:e.exampleUsed)&&a.jsx(h,{className:"mb-2",color:"text.secondary",variant:"body2",align:"center",children:e==null?void 0:e.exampleUsed}),o?a.jsxs(a.Fragment,{children:[a.jsxs(n,{className:"w-full flex-wrap",direction:"row",gap:1,children:[a.jsx(i,{className:"flex-1",color:"error",variant:"contained",onClick:w,keyCode:s.One,children:t("Źle")}),a.jsx(i,{className:"flex-1",color:"success",variant:"contained",onClick:k,keyCode:s.Two,children:t("Dobrze")})]}),a.jsx(i,{className:"mt-1 w-full",variant:"contained",color:"secondary",onClick:()=>{j(),l(!1),c()},keyCode:s.Space,children:t("Znam to")})]}):a.jsx(i,{className:"w-full",variant:"contained",onClick:f,keyCode:s.Enter,children:t("Sprawdź")})]})})})})):a.jsx(I,{onReset:p})}export{z as default};
