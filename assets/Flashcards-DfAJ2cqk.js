import{r as i,j as e}from"./index-D5Bqqgnq.js";import{u as x}from"./useKeyPress-CurcwxKW.js";import{B as u,C as j,V as d}from"./VoiceIcon-D6jz8QEi.js";import{S as n,T as m,c as f}from"./Stack-kShsHRXB.js";import{u as w,C as P,a as g}from"./useTranslation-S1hyASnT.js";import"./createSvgIcon-CHOeamkR.js";import"./IconButton-6ne25Ouw.js";function k({keyPress:s,onClick:r,...o}){const[a]=x(s);return i.useEffect(()=>{a&&(r==null||r({}))},[a,r]),e.jsx(u,{...o,onClick:r})}const c=i.memo(k);var t=(s=>(s[s.Space=32]="Space",s[s.Enter=13]="Enter",s[s.One=49]="One",s[s.Two=50]="Two",s[s.Three=51]="Three",s))(t||{});function I(){const{t:s}=w(),r={wordPolish:"Dom",wordEnglish:"House",pronunciation:"house"},[o,a]=i.useState(!1),l=()=>{a(!0)},h=()=>{console.log("Użytkownik zaznaczył odpowiedź jako poprawną"),a(!1)},p=()=>{console.log("Użytkownik zaznaczył odpowiedź jako błędną"),a(!1)};return e.jsx(j,{maxWidth:"md",children:e.jsx(P,{className:"p-2",children:e.jsx(g,{children:e.jsxs(n,{alignItems:"center",justifyContent:"center",children:[e.jsxs(n,{direction:"row",alignItems:"center",children:[e.jsx(m,{variant:"h2",className:"font-medium",children:r.wordPolish}),e.jsx(d,{isPlaying:!0,onPlay:()=>{}})]}),e.jsxs(n,{direction:"row",alignItems:"center",className:f("mb-2",{"opacity-0":!o}),children:[e.jsx(m,{variant:"h5",color:"text.secondary",children:r.wordEnglish}),e.jsx(d,{isPlaying:!0,onPlay:()=>{}})]}),o?e.jsxs(n,{className:"w-full",direction:"row",gap:1,children:[e.jsx(c,{className:"flex-1",color:"error",variant:"contained",onClick:p,keyPress:t.Space,children:s("Źle (Spacja)")}),e.jsx(c,{className:"flex-1",color:"success",variant:"contained",onClick:h,keyPress:t.Enter,children:s("Dobrze (Enter)")})]}):e.jsxs(n,{className:"w-full",direction:"row",gap:1,children:[e.jsx(c,{className:"flex-1",color:"error",variant:"contained",onClick:l,keyPress:t.Space,children:s("Pomiń (Spacja)")}),e.jsx(c,{className:"flex-1",variant:"contained",onClick:l,keyPress:t.Enter,children:s("Sprawdź (Enter)")})]})]})})})})}export{I as default};
