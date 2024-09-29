import{E as G,r as u,y as T,j as d,F as $,G as U,x as B,c as I}from"./index-O7jm2W6K.js";import{C as W,K as w,a as g,V as N}from"./VoiceIcon-Cm54lenY.js";import{u as z,C as P,a as Z}from"./useTranslation-7PPNFCvX.js";import{S as y,T as C,i as H,_ as Q,c as X,d as Y,e as R,f as V,g as j,h as nn,m as en,j as rn,k as tn,l as sn,n as K}from"./map-Cb5YD0IJ.js";import{a as an,u as cn}from"./useSettingsDb-DY7g-VkU.js";import"./IconButton-2TB6bt-n.js";import"./createSvgIcon-BeooMAY-.js";var on=function(e,n,t){if(!G)return[n,function(){}];var r=u.useState(function(){try{var o=sessionStorage.getItem(e);return typeof o!="string"?(sessionStorage.setItem(e,t?String(n):JSON.stringify(n)),n):t?o:JSON.parse(o||"null")}catch{return n}}),s=r[0],a=r[1];return u.useEffect(function(){try{var o=t?String(s):JSON.stringify(s);sessionStorage.setItem(e,o)}catch{}}),[s,a]};function dn({onReset:e}){const{t:n}=z(),t=T();return d.jsx(W,{maxWidth:"sm",children:d.jsx(P,{className:"p-2",children:d.jsxs(y,{justifyContent:"center",alignItems:"center",children:[d.jsx(C,{variant:"h3",gutterBottom:!0,children:n("Sesja zakończona")}),d.jsx(C,{gutterBottom:!0,children:n("Gratulacje! Ukończyłeś wszystko z tej sesji")}),d.jsxs(y,{className:"mt-3 w-full",direction:"row",gap:1,children:[d.jsx(w,{className:"flex-1",variant:"contained",color:"error",onClick:e,keyCode:g.Space,children:n("Zresetuj sesję")}),d.jsx(w,{className:"flex-1",variant:"contained",onClick:()=>{t("/")},keyCode:g.Enter,children:n("Rozpocznij nową sesję")})]})]})})})}function ln(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}var un=ln,O=H;function fn(e,n){if(e!==n){var t=e!==void 0,r=e===null,s=e===e,a=O(e),o=n!==void 0,l=n===null,i=n===n,c=O(n);if(!l&&!c&&!a&&e>n||a&&o&&i&&!l&&!c||r&&o&&i||!t&&i||!s)return 1;if(!r&&!a&&!c&&e<n||c&&t&&s&&!r&&!a||l&&t&&s||!o&&s||!i)return-1}return 0}var mn=fn,gn=mn;function yn(e,n,t){for(var r=-1,s=e.criteria,a=n.criteria,o=s.length,l=t.length;++r<o;){var i=gn(s[r],a[r]);if(i){if(r>=l)return i;var c=t[r];return i*(c=="desc"?-1:1)}}return e.index-n.index}var xn=yn,_=Q,wn=R,pn=nn,hn=X,Cn=un,jn=V,bn=xn,kn=Y,Sn=j;function _n(e,n,t){n.length?n=_(n,function(a){return Sn(a)?function(o){return wn(o,a.length===1?a[0]:a)}:a}):n=[kn];var r=-1;n=_(n,jn(pn));var s=hn(e,function(a,o,l){var i=_(n,function(c){return c(a)});return{criteria:i,index:++r,value:a}});return Cn(s,function(a,o){return bn(a,o,t)})}var $n=_n,vn=$n,E=j;function An(e,n,t,r){return e==null?[]:(E(n)||(n=n==null?[]:[n]),t=r?void 0:t,E(t)||(t=t==null?[]:[t]),vn(e,n,t))}var Bn=An;const Nn=$(Bn);function On({selector:e}){const[n,t]=u.useState([]),r=an();u.useEffect(()=>{var c;const i=(c=r==null?void 0:r.words)==null?void 0:c.find({selector:e}).$.subscribe(x=>{const h=en(x,m=>m.toJSON()),f=Nn(h,[m=>m.correct+m.incorrect,m=>m.correct===0?m.incorrect:m.incorrect/m.correct],["asc","desc"]);t(f)});return()=>i==null?void 0:i.unsubscribe()},[r,e]);const s=u.useCallback(async i=>{if(!r)return;const c=await r.words.findOne({selector:{id:i}}).exec();c&&await c.update({$inc:{correct:1}})},[r]),a=u.useCallback(async i=>{if(!r)return;const c=await r.words.findOne({selector:{id:i}}).exec();c&&await c.update({$inc:{incorrect:1}})},[r]),o=u.useCallback(async i=>{const c=await(r==null?void 0:r.words.findOne({selector:{id:i}}).exec());c&&await c.update({$set:{isKnown:!0}})},[r]),l=u.useCallback(async i=>{if(!r)return null;const c=await r.words.findOne({selector:{id:i}}).exec();return c?c.toJSON():null},[r]);return{words:n,incrementCorrect:s,setWordAsKnown:o,incrementIncorrect:a,findWordById:l}}var En=rn;function Fn(e){return En(e).toLowerCase()}var Ln=Fn;const F=$(Ln);var L=tn,Mn=sn,Wn=j,M=L?L.isConcatSpreadable:void 0;function zn(e){return Wn(e)||Mn(e)||!!(M&&e&&e[M])}var Pn=zn,Kn=K,Dn=Pn;function D(e,n,t,r,s){var a=-1,o=e.length;for(t||(t=Dn),s||(s=[]);++a<o;){var l=e[a];n>0&&t(l)?n>1?D(l,n-1,t,r,s):Kn(s,l):r||(s[s.length]=l)}return s}var Jn=D;function qn(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var Gn=qn,Tn=K,Un=Jn,In=Gn,Zn=j;function Hn(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0],r=e;r--;)n[r-1]=arguments[r];return Tn(Zn(t)?In(t):[t],Un(n,1))}var Qn=Hn;const Xn=$(Qn);function Yn(){const e=U(),{getLanguage:n,getLevel:t}=cn(),[r,s]=on("usedWords",[]),[a,o]=u.useState(!1),{words:l,setWordAsKnown:i,incrementCorrect:c,incrementIncorrect:x,findWordById:h}=On({selector:u.useMemo(()=>({categoryId:{$eq:e.categoryId},levelId:{$eq:t()},languageId:{$eq:n()},id:{$nin:r},isKnown:{$eq:!1}}),[n,t,e.categoryId,r])});console.log(l,"words22");const f=u.useMemo(()=>l[0],[l]),m=u.useCallback(()=>{s(Xn(r,f.id))},[f,s,r]),b=u.useCallback(async()=>{await i(f.id)},[f,i]),v=u.useCallback((k,p)=>F(k)===F(p),[]),J=u.useCallback(()=>{s([])},[s]),q=u.useCallback(async k=>{if(v(f.translation,k)){await c(f.id);const p=await h(f.id),S=p.incorrect+p.correct,A=p.correct/S*100;(S>=3&&A===100||S>=10&&A>=95)&&b(),o(!0)}else await x(f.id),o(!1)},[f,h,c,x,v,b]);return{isCorrect:a,currentWord:f,check:q,nextWord:m,skip:b,reset:J}}function ae(){const{t:e}=z(),{currentWord:n,nextWord:t,skip:r,check:s,reset:a}=Yn(),[o,l]=u.useState(!1),i=()=>{l(!0)},c=()=>{s(n.translation),l(!1),t()},x=()=>{s(n.translation+"sss"),l(!1),t()};return n?d.jsx(W,{maxWidth:"md",children:d.jsx(P,{className:"p-2",children:d.jsx(Z,{children:d.jsxs(y,{alignItems:"center",justifyContent:"center",children:[d.jsxs(y,{direction:"row",alignItems:"center",children:[d.jsx(C,{variant:"h2",className:"font-medium",children:n==null?void 0:n.word}),d.jsx(N,{name:n==null?void 0:n.word,keyCode:g.Two,language:B.Pl})]}),d.jsxs(y,{direction:"row",alignItems:"center",className:I("mb-2 h-[45px]",{"opacity-0":!o}),children:[d.jsx(C,{variant:"h5",color:"text.secondary",children:n==null?void 0:n.translation}),o&&d.jsx(N,{name:n==null?void 0:n.translation,keyCode:g.One,language:B.En,autoPlay:!0})]}),o?d.jsxs(y,{className:"w-full",direction:"row",gap:1,children:[d.jsx(w,{className:"flex-1",color:"error",variant:"contained",onClick:x,keyCode:g.Space,children:e("Źle")}),d.jsx(w,{className:"flex-1",color:"success",variant:"contained",onClick:c,keyCode:g.Enter,children:e("Dobrze")})]}):d.jsxs(y,{className:"w-full",direction:"row",gap:1,children:[d.jsx(w,{className:"flex-1",color:"error",variant:"contained",onClick:()=>{r()},keyCode:g.Space,children:e("Pomiń")}),d.jsx(w,{className:"flex-1",variant:"contained",onClick:i,keyCode:g.Enter,children:e("Sprawdź")})]})]})})})}):d.jsx(dn,{onReset:a})}export{ae as default};