import{r as n,v as l,j as e,o as f,q as h,n as j,S as v}from"./index-uLly-UbI.js";import{u as C}from"./useSettingsDb-CBLn-H6x.js";import{P as y}from"./Progress-BoAGx-aD.js";import{c as S,S as b,T as d}from"./useTranslation-D4ii-OIQ.js";import{D as w}from"./Divider-C68EZ9eV.js";import{G as c,C as k}from"./Grid2-CTKyymt5.js";import{C as z,a as D}from"./CardContent-CZS6-a7P.js";import"./isMuiElement-Dc1xrwxF.js";function I({id:t,label:r}){const s=h(),{updateSettings:u,language:o}=C(),a=j(),[m,g]=n.useState(0),[x,p]=n.useState(0);return n.useEffect(()=>{a==null||a.words.find({selector:{languageId:o,levelId:t}}).exec().then(i=>g(i.length)),a==null||a.words.find({selector:{languageId:o,levelId:t,isKnown:!0}}).exec().then(i=>p(i.length))},[a,t,o]),e.jsx(z,{children:e.jsx(k,{onClick:()=>u({settings:{key:v.Level,value:t},onSuccess:()=>s("/categories")}),children:e.jsxs(D,{children:[e.jsx(d,{variant:"h5",className:"mb-1 text-center font-medium",children:r}),e.jsx(y,{total:m,value:x})]})})})}function q(){const{t}=S(),r=n.useMemo(()=>[{id:l.Beginner,label:t("Początkujący")},{id:l.Intermediate,label:t("Średniozaawansowany")},{id:l.Advanced,label:t("Zaawansowany")}],[t]);return e.jsxs(b,{gap:2,children:[e.jsx(d,{variant:"h3",className:"text-center font-medium",children:t("Wybierz poziom nauki")}),e.jsx(w,{}),e.jsx(c,{justifyContent:"center",container:!0,spacing:2,children:f(r,s=>e.jsx(c,{size:{xs:12,md:4,lg:3},children:e.jsx(I,{id:s.id,label:s.label})},s.id))})]})}export{q as default};