import{r,p as S,j as e,d as R,M as v}from"./index-DiWq7wI7.js";import{u as E,F as b,C as I,N as T,V as p,K as a,d as m}from"./useWord-f0zd_IUy.js";import{c as W,S as o,T as g}from"./useTranslation-Btd0DIib.js";import{C as F,a as L}from"./CardContent-C7UW1qKJ.js";import{A as P}from"./Alert-n_PwOXOC.js";import"./IconButton-B1h8b2Mm.js";import"./createSvgIcon-Boyc4cOD.js";import"./useSettingsDb-DOi01xiI.js";import"./useSlot-iKVX7ulO.js";const K=window.SpeechRecognition||window.webkitSpeechRecognition,s=new K;s.continuous=!1;s.interimResults=!1;function D(){const{t:i}=W(),[u,c]=r.useState(!1),[n,l]=r.useState(""),{currentWord:t,nextWord:h,skip:f,check:x,reset:j,lang:d,nativeLang:w,isCorrect:C}=E(),y=r.useCallback(()=>{s.start(),s.lang=d===S.En?"en-US":"pl-PL",s.onresult=k=>{const N=k.results[0][0].transcript;l(N)},s.onend=()=>{c(!1)},s.onerror=()=>{c(!1)},s.onstart=()=>{c(!0)}},[d]);return r.useEffect(()=>()=>{s.stop()},[]),r.useEffect(()=>{n&&x(n)},[x,n]),t?e.jsx(I,{maxWidth:"md",children:e.jsx(F,{className:"p-2",children:e.jsx(L,{children:e.jsxs(o,{alignItems:"center",justifyContent:"center",children:[e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(T,{word:t.word}),e.jsx(p,{name:t.word,keyCode:a.One,language:w})]}),e.jsxs(o,{direction:"row",alignItems:"center",className:R("mb-2 h-[45px]",{"opacity-0":!n}),children:[e.jsx(g,{variant:"h5",color:"text.secondary",children:t.translation}),n&&e.jsx(p,{name:t.translation,keyCode:a.Two,language:d,autoPlay:!0})]}),n&&e.jsx(e.Fragment,{children:e.jsx(P,{severity:C?"success":"error",className:"mb-2 h-[56px] w-full xy-center",children:n})}),u&&e.jsxs(o,{gap:1,direction:"row",alignItems:"center",className:"mb-2 h-[56px]",children:[e.jsx(v,{size:20}),e.jsx(g,{children:i("Trwa nagrywanie dźwięku...")})]}),n?e.jsxs(e.Fragment,{children:[e.jsx(m,{keyCode:a.Enter,className:"w-full flex-1",variant:"contained",onClick:()=>{h(),l("")},children:i("Następne słowo")}),e.jsx(m,{className:"mt-1 w-full",variant:"contained",color:"secondary",onClick:()=>{f(),l("")},keyCode:a.S,children:i("Znam to")})]}):e.jsx(o,{className:"w-full",direction:"row",gap:1,children:e.jsx(m,{disabled:u,keyCode:a.Enter,className:"flex-1",variant:"contained",onClick:y,children:i("Nagraj")})})]})})})}):e.jsx(b,{onReset:j})}export{D as default};