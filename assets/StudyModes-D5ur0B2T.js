import{q as o,r as l,j as i,o as d}from"./index-BogYDXi7.js";import{c as m,S as p,T as e}from"./useTranslation-DGqiniSL.js";import{D as x}from"./Divider-rquqnK2t.js";import{G as t,C as h}from"./Grid2-CGhK28ji.js";import{C as u,a as g}from"./CardContent-CGUsZxsU.js";import"./isMuiElement-CbFjXV-c.js";var r=(a=>(a.Flashcards="flashcards",a.Writing="writing",a.Speaking="speaking",a))(r||{});function y(){const{t:a}=m(),n=o(),c=l.useMemo(()=>[{id:r.Flashcards,label:a("Fiszki")},{id:r.Writing,label:a("Pisanie")},{id:r.Speaking,label:a("Mówienie")}],[a]);return i.jsxs(p,{gap:2,children:[i.jsx(e,{variant:"h3",className:"text-center font-medium",children:a("Wybierz tryb nauki")}),i.jsx(x,{}),i.jsx(t,{justifyContent:"center",container:!0,spacing:2,children:d(c,s=>i.jsx(t,{size:{xs:12,md:4,lg:3},children:i.jsx(u,{children:i.jsx(h,{onClick:()=>n(`${s.id}`),children:i.jsx(g,{children:i.jsx(e,{variant:"h5",className:"text-center font-medium",children:s.label})})})})},s.id))})]})}export{y as default};