import{r,C as a,j as s,q as b,p as j,n as h}from"./index-BAhXjIB1.js";import{u as f}from"./useSettingsDb-CSfXoRdG.js";import{P as C}from"./Progress-BEGhTVo6.js";import{c as P,S as v,T as m}from"./useTranslation-ODiXJTJo.js";import{D as y}from"./Divider-ScsUMk-9.js";import{G as c,C as k}from"./Grid2-DU84v9Zz.js";import{C as z,a as S}from"./CardContent-Chb9VCzs.js";import"./isMuiElement-CGsx1D9i.js";function I({id:e,label:n}){const i=j(),{language:l,level:o}=f(),t=h(),[u,p]=r.useState(0),[g,x]=r.useState(0);return r.useEffect(()=>{t==null||t.words.find({selector:{languageId:l,levelId:o,categoryId:e}}).exec().then(d=>p(d.length)),t==null||t.words.find({selector:{languageId:l,levelId:o,isKnown:!0,categoryId:e}}).exec().then(d=>x(d.length))},[t,e,l,o]),s.jsx(z,{children:s.jsx(k,{onClick:()=>i(`/${e}`),children:s.jsxs(S,{children:[s.jsx(m,{variant:"h5",className:"mb-1 text-center font-medium",children:n}),s.jsx(C,{total:u,value:g})]})})})}function G(){const{t:e}=P(),n=r.useMemo(()=>[{id:a.Verbs,label:e("Czasowniki")},{id:a.Nouns,label:e("Rzeczowniki")},{id:a.Adjectives,label:e("Przymiotniki")},{id:a.Adverbs,label:e("Przysłówki")},{id:a.Pronouns,label:e("Zaimki")},{id:a.Prepositions,label:e("Przyimki")},{id:a.Conjunctions,label:e("Spójniki")},{id:a.PhrasalVerbs,label:e("Phrasal Verbs")},{id:a.Idioms,label:e("Idiomy")},{id:a.Phrases,label:e("Zwroty")},{id:a.Sentences,label:e("Zdania")},{id:a.PastSimple,label:e("Past Simple")},{id:a.MostPopular,label:e("Najpopularniejsze")}],[e]);return s.jsxs(v,{gap:2,children:[s.jsx(m,{variant:"h3",className:"text-center font-medium",children:e("Wybierz kategorię")}),s.jsx(y,{}),s.jsx(c,{justifyContent:"center",container:!0,spacing:2,children:b(n,i=>s.jsx(c,{size:{xs:12,md:4,lg:3},children:s.jsx(I,{id:i.id,label:i.label})},i.id))})]})}export{G as default};
