import{o,p as c,j as a,q as m,S as d}from"./index-BAhXjIB1.js";import{u as g}from"./useSettingsDb-CSfXoRdG.js";import{c as u,S as l,T as e}from"./useTranslation-ODiXJTJo.js";import{D as p}from"./Divider-ScsUMk-9.js";import{G as n,C as x}from"./Grid2-DU84v9Zz.js";import{C as j,a as h}from"./CardContent-Chb9VCzs.js";import"./isMuiElement-CGsx1D9i.js";const f=[{id:o.En,name:"English"}];function L(){const{t}=u(),i=c(),{updateSettings:r}=g();return a.jsxs(l,{gap:2,children:[a.jsx(e,{variant:"h3",className:"text-center font-medium",children:t("Wybierz język")}),a.jsx(p,{}),a.jsx(n,{justifyContent:"center",container:!0,spacing:2,children:m(f,s=>a.jsx(n,{size:{xs:12,md:4,lg:3},children:a.jsx(j,{children:a.jsx(x,{onClick:()=>r({settings:{key:d.Language,value:s.id},onSuccess:()=>i("/levels")}),children:a.jsx(h,{children:a.jsx(e,{variant:"h5",className:"text-center font-medium",children:s.name})})})})},s.id))})]})}export{L as default};