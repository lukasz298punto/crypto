import{r as n,A as l,j as e,y as f,S as h}from"./index-O7jm2W6K.js";import{u as j,a as v}from"./useSettingsDb-DY7g-VkU.js";import{P as y}from"./Progress-BgpPIP7B.js";import{S as C,T as u,m as S}from"./map-Cb5YD0IJ.js";import{u as b,C as w,a as k}from"./useTranslation-7PPNFCvX.js";import{D as z}from"./Divider-CyBEU3IC.js";import{G as c,C as D}from"./Grid2-DU71Nwxz.js";import"./isMuiElement-Clr0U7KM.js";function I({id:t,label:r}){const s=f(),{updateSettings:d,getLanguage:o}=j(),a=v(),[m,g]=n.useState(0),[x,p]=n.useState(0);return n.useEffect(()=>{a==null||a.words.find({selector:{languageId:o(),levelId:t}}).exec().then(i=>g(i.length)),a==null||a.words.find({selector:{languageId:o(),levelId:t,isKnown:!0}}).exec().then(i=>p(i.length))},[a,o,t]),e.jsx(w,{children:e.jsx(D,{onClick:()=>d({settings:{key:h.Level,value:t},onSuccess:()=>s("/categories")}),children:e.jsxs(k,{children:[e.jsx(u,{variant:"h5",className:"mb-1 text-center font-medium",children:r}),e.jsx(y,{total:m,value:x})]})})})}function B(){const{t}=b(),r=n.useMemo(()=>[{id:l.Beginner,label:t("Początkujący")},{id:l.Intermediate,label:t("Średniozaawansowany")},{id:l.Advanced,label:t("Zaawansowany")}],[t]);return e.jsxs(C,{gap:2,children:[e.jsx(u,{variant:"h3",className:"text-center font-medium",children:t("Wybierz poziom nauki")}),e.jsx(z,{}),e.jsx(c,{justifyContent:"center",container:!0,spacing:2,children:S(r,s=>e.jsx(c,{size:{xs:12,md:4,lg:3},children:e.jsx(I,{id:s.id,label:s.label})},s.id))})]})}export{B as default};