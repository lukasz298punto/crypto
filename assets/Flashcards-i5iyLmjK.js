import{r as m,j as e}from"./index-X_hScAMt.js";import{C as x,V as t,B as n}from"./VoiceIcon-i_U9U9Gh.js";import{S as s,T as l,c as j}from"./Stack-DTH2VSBZ.js";import{u as p,C as u,a as f}from"./useTranslation-BxsxkDgR.js";import"./createSvgIcon-s20u4GF2.js";import"./IconButton-8ArnYtN0.js";function z(){const{t:a}=p(),r={wordPolish:"Dom",wordEnglish:"House",pronunciation:"house"},[c,o]=m.useState(!1),i=()=>{o(!0)},d=()=>{console.log("Użytkownik zaznaczył odpowiedź jako poprawną"),o(!1)},h=()=>{console.log("Użytkownik zaznaczył odpowiedź jako błędną"),o(!1)};return e.jsx(x,{maxWidth:"md",children:e.jsx(u,{className:"p-2",children:e.jsx(f,{children:e.jsxs(s,{alignItems:"center",justifyContent:"center",children:[e.jsxs(s,{direction:"row",alignItems:"center",children:[e.jsx(l,{variant:"h2",className:"font-medium",children:r.wordPolish}),e.jsx(t,{isPlaying:!0,onPlay:()=>{}})]}),e.jsxs(s,{direction:"row",alignItems:"center",className:j("mb-2",{"opacity-0":!c}),children:[e.jsx(l,{variant:"h5",color:"text.secondary",children:r.wordEnglish}),e.jsx(t,{isPlaying:!0,onPlay:()=>{}})]}),c?e.jsxs(s,{className:"w-full",direction:"row",gap:1,children:[e.jsx(n,{className:"flex-1",color:"error",variant:"contained",onClick:h,children:a("Źle (Spacja)")}),e.jsx(n,{className:"flex-1",color:"success",variant:"contained",onClick:d,children:a("Dobrze (Enter)")})]}):e.jsxs(s,{className:"w-full",direction:"row",gap:1,children:[e.jsx(n,{className:"flex-1",color:"error",variant:"contained",onClick:i,children:a("Pomiń (Spacja)")}),e.jsx(n,{className:"flex-1",variant:"contained",onClick:i,children:a("Sprawdź (Enter)")})]})]})})})})}export{z as default};
