import{r as n,z as a,j as s,y}from"./index-O7jm2W6K.js";import{u as j,a as h}from"./useSettingsDb-DY7g-VkU.js";import{P as p}from"./Progress-BgpPIP7B.js";import{S as f,T as m,m as C}from"./map-Cb5YD0IJ.js";import{u as k,C as v,a as z}from"./useTranslation-7PPNFCvX.js";import{D as P}from"./Divider-CyBEU3IC.js";import{G as c,C as I}from"./Grid2-DU71Nwxz.js";import"./isMuiElement-Clr0U7KM.js";function S({id:e,label:r}){const i=y(),{getLanguage:o,getLevel:l}=j(),t=h(),[u,g]=n.useState(0),[b,x]=n.useState(0);return n.useEffect(()=>{t==null||t.words.find({selector:{languageId:o(),levelId:l(),categoryId:e}}).exec().then(d=>g(d.length)),t==null||t.words.find({selector:{languageId:o(),levelId:l(),isKnown:!0,categoryId:e}}).exec().then(d=>x(d.length))},[t,o,l,e]),s.jsx(v,{children:s.jsx(I,{onClick:()=>i(`/${e}`),children:s.jsxs(z,{children:[s.jsx(m,{variant:"h5",className:"mb-1 text-center font-medium",children:r}),s.jsx(p,{total:u,value:b})]})})})}function Z(){const{t:e}=k(),r=n.useMemo(()=>[{id:a.Verbs,label:e("Czasowniki")},{id:a.Nouns,label:e("Rzeczowniki")},{id:a.Adjectives,label:e("Przymiotniki")},{id:a.Adverbs,label:e("Przysłówki")},{id:a.Pronouns,label:e("Zaimki")},{id:a.Prepositions,label:e("Przyimki")},{id:a.Conjunctions,label:e("Spójniki")},{id:a.Articles,label:e("Rodzajniki")},{id:a.Interjections,label:e("Wykrzykniki")},{id:a.PhrasalVerbs,label:e("Phrasal Verbs")},{id:a.Idioms,label:e("Idiomy")},{id:a.Synonyms,label:e("Synonimy")},{id:a.Antonyms,label:e("Antonimy")},{id:a.Phrases,label:e("Zwroty")},{id:a.Sentences,label:e("Zdania")}],[e]);return s.jsxs(f,{gap:2,children:[s.jsx(m,{variant:"h3",className:"text-center font-medium",children:e("Wybierz kategorię")}),s.jsx(P,{}),s.jsx(c,{justifyContent:"center",container:!0,spacing:2,children:C(r,i=>s.jsx(c,{size:{xs:12,md:4,lg:3},children:s.jsx(S,{id:i.id,label:i.label})},i.id))})]})}export{Z as default};