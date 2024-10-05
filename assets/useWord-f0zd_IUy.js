import{a0 as nn,r as l,R as en,a1 as an,c as v,j as f,d as E,e as Z,g as q,a as xr,s as I,m as yr,b as hr,u as Sr,f as tn,i as _,a2 as on,a3 as sn,a4 as cn,a5 as $r,a6 as ln,a7 as un,a8 as dn,A as M,a9 as Cr,y as j,F as Rr,aa as pn,ab as zr,ac as fn,ad as gn,ae as Or,af as wr,ag as vn,ah as Br,E as bn,ai as mn,aj as xn,ak as yn,p as hn,q as Sn,n as $n,o as Cn,al as Rn,am as zn,an as On,ao as wn,ap as Bn,_ as Pn,aq as Tn}from"./index-DiWq7wI7.js";import{h as En,b as In,a as Ln,i as _n,j as kn,B as Mn,e as jn,c as Pr,T as k,u as Wn,S as V}from"./useTranslation-Btd0DIib.js";import{r as An,m as Nn,a as Un,I as Fn}from"./IconButton-B1h8b2Mm.js";import{c as Tr}from"./createSvgIcon-Boyc4cOD.js";import{f as Dn,u as Er}from"./useSettingsDb-DOi01xiI.js";import{C as Gn}from"./CardContent-C7UW1qKJ.js";function Vn(r,n,e,a,o){const[t,s]=l.useState(()=>o&&e?e(r).matches:a?a(r).matches:n);return In(()=>{if(!e)return;const i=e(r),c=()=>{s(i.matches)};return c(),i.addEventListener("change",c),()=>{i.removeEventListener("change",c)}},[r,e]),t}const Hn={...en},Ir=Hn.useSyncExternalStore;function Jn(r,n,e,a,o){const t=l.useCallback(()=>n,[n]),s=l.useMemo(()=>{if(o&&e)return()=>e(r).matches;if(a!==null){const{matches:p}=a(r);return()=>p}return t},[t,r,a,o,e]),[i,c]=l.useMemo(()=>{if(e===null)return[t,()=>()=>{}];const p=e(r);return[()=>p.matches,u=>(p.addEventListener("change",u),()=>{p.removeEventListener("change",u)})]},[t,e,r]);return Ir(c,i,s)}function Kn(r,n={}){const e=nn(),a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:o=!1,matchMedia:t=a?window.matchMedia:null,ssrMatchMedia:s=null,noSsr:i=!1}=En({name:"MuiUseMediaQuery",props:n,theme:e});let c=typeof r=="function"?r(e):r;return c=c.replace(/^@media( ?)/m,""),(Ir!==void 0?Jn:Vn)(c,o,t,s,i)}const Lr=r=>{const n=l.useRef({});return l.useEffect(()=>{n.current=r}),n.current};function tr(r){var u;const{elementType:n,externalSlotProps:e,ownerState:a,skipResolvingSlotProps:o=!1,...t}=r,s=o?{}:An(e,a),{props:i,internalRef:c}=Nn({...t,externalSlotProps:s}),d=Ln(c,s==null?void 0:s.ref,(u=r.additionalProps)==null?void 0:u.ref);return Un(n,{...i,ref:d},a)}const Qn=an(),Zn=_n("div",{name:"MuiContainer",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.root,n[`maxWidth${v(String(e.maxWidth))}`],e.fixed&&n.fixed,e.disableGutters&&n.disableGutters]}}),qn=r=>kn({props:r,name:"MuiContainer",defaultTheme:Qn}),Xn=(r,n)=>{const e=c=>q(n,c),{classes:a,fixed:o,disableGutters:t,maxWidth:s}=r,i={root:["root",s&&`maxWidth${v(String(s))}`,o&&"fixed",t&&"disableGutters"]};return Z(i,e,a)};function Yn(r={}){const{createStyledComponent:n=Zn,useThemeProps:e=qn,componentName:a="MuiContainer"}=r,o=n(({theme:s,ownerState:i})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!i.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}}),({theme:s,ownerState:i})=>i.fixed&&Object.keys(s.breakpoints.values).reduce((c,d)=>{const p=d,u=s.breakpoints.values[p];return u!==0&&(c[s.breakpoints.up(p)]={maxWidth:`${u}${s.breakpoints.unit}`}),c},{}),({theme:s,ownerState:i})=>({...i.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},...i.maxWidth&&i.maxWidth!=="xs"&&{[s.breakpoints.up(i.maxWidth)]:{maxWidth:`${s.breakpoints.values[i.maxWidth]}${s.breakpoints.unit}`}}}));return l.forwardRef(function(i,c){const d=e(i),{className:p,component:u="div",disableGutters:x=!1,fixed:m=!1,maxWidth:S="lg",classes:R,...b}=d,y={...d,component:u,disableGutters:x,fixed:m,maxWidth:S},$=Xn(y,a);return f.jsx(o,{as:u,ownerState:y,className:E($.root,p),ref:c,...b})})}function re(r){const{badgeContent:n,invisible:e=!1,max:a=99,showZero:o=!1}=r,t=Lr({badgeContent:n,max:a});let s=e;e===!1&&n===0&&!o&&(s=!0);const{badgeContent:i,max:c=a}=s?t:r,d=i&&Number(i)>c?`${c}+`:i;return{badgeContent:i,invisible:s,max:c,displayValue:d}}function ne(r){return q("MuiBadge",r)}const O=xr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),F=10,D=4,ee=r=>{const{color:n,anchorOrigin:e,invisible:a,overlap:o,variant:t,classes:s={}}=r,i={root:["root"],badge:["badge",t,a&&"invisible",`anchorOrigin${v(e.vertical)}${v(e.horizontal)}`,`anchorOrigin${v(e.vertical)}${v(e.horizontal)}${v(o)}`,`overlap${v(o)}`,n!=="default"&&`color${v(n)}`]};return Z(i,ne,s)},ae=I("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,n)=>n.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),te=I("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.badge,n[e.variant],n[`anchorOrigin${v(e.anchorOrigin.vertical)}${v(e.anchorOrigin.horizontal)}${v(e.overlap)}`],e.color!=="default"&&n[`color${v(e.color)}`],e.invisible&&n.invisible]}})(yr(({theme:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:F*2,lineHeight:1,padding:"0 6px",height:F*2,borderRadius:F,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.entries(r.palette).filter(hr(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(r.vars||r).palette[n].main,color:(r.vars||r).palette[n].contrastText}})),{props:{variant:"dot"},style:{borderRadius:D,height:D*2,minWidth:D*2,padding:0}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="right"&&n.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="top"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:n})=>n.anchorOrigin.vertical==="bottom"&&n.anchorOrigin.horizontal==="left"&&n.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${O.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}))),oe=l.forwardRef(function(n,e){const a=Sr({props:n,name:"MuiBadge"}),{anchorOrigin:o={vertical:"top",horizontal:"right"},className:t,classes:s,component:i,components:c={},componentsProps:d={},children:p,overlap:u="rectangular",color:x="default",invisible:m=!1,max:S=99,badgeContent:R,slots:b,slotProps:y,showZero:$=!1,variant:z="standard",...L}=a,{badgeContent:B,invisible:g,max:h,displayValue:w}=re({max:S,invisible:m,badgeContent:R,showZero:$}),P=Lr({anchorOrigin:o,color:x,overlap:u,variant:z,badgeContent:R}),W=g||B==null&&z!=="dot",{color:Zr=x,overlap:qr=u,anchorOrigin:Xr=o,variant:Y=z}=W?P:a,rr=Y!=="dot"?w:void 0,U={...a,badgeContent:B,invisible:W,max:h,displayValue:rr,showZero:$,anchorOrigin:Xr,color:Zr,overlap:qr,variant:Y},nr=ee(U),er=(b==null?void 0:b.root)??c.Root??ae,ar=(b==null?void 0:b.badge)??c.Badge??te,A=(y==null?void 0:y.root)??d.root,N=(y==null?void 0:y.badge)??d.badge,Yr=tr({elementType:er,externalSlotProps:A,externalForwardedProps:L,additionalProps:{ref:e,as:i},ownerState:U,className:E(A==null?void 0:A.className,nr.root,t)}),rn=tr({elementType:ar,externalSlotProps:N,ownerState:U,className:E(nr.badge,N==null?void 0:N.className)});return f.jsxs(er,{...Yr,children:[p,f.jsx(ar,{...rn,children:rr})]})});function se(r){return q("MuiButton",r)}const T=xr("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ie=l.createContext({}),ce=l.createContext(void 0),le=r=>{const{color:n,disableElevation:e,fullWidth:a,size:o,variant:t,classes:s}=r,i={root:["root",t,`${t}${v(n)}`,`size${v(o)}`,`${t}Size${v(o)}`,`color${v(n)}`,e&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${v(o)}`],endIcon:["icon","endIcon",`iconSize${v(o)}`]},c=Z(i,se,s);return{...s,...c}},_r=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],ue=I(Mn,{shouldForwardProp:r=>tn(r)||r==="classes",name:"MuiButton",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.root,n[e.variant],n[`${e.variant}${v(e.color)}`],n[`size${v(e.size)}`],n[`${e.variant}Size${v(e.size)}`],e.color==="inherit"&&n.colorInherit,e.disableElevation&&n.disableElevation,e.fullWidth&&n.fullWidth]}})(yr(({theme:r})=>{var a,o;const n=r.palette.mode==="light"?r.palette.grey[300]:r.palette.grey[800],e=r.palette.mode==="light"?r.palette.grey.A100:r.palette.grey[700];return{...r.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${T.disabled}`]:{color:(r.vars||r).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(r.vars||r).shadows[2],"&:hover":{boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2]}},"&:active":{boxShadow:(r.vars||r).shadows[8]},[`&.${T.focusVisible}`]:{boxShadow:(r.vars||r).shadows[6]},[`&.${T.disabled}`]:{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${T.disabled}`]:{border:`1px solid ${(r.vars||r).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(r.palette).filter(hr(["dark","contrastText"])).map(([t])=>({props:{color:t},style:{"--variant-textColor":(r.vars||r).palette[t].main,"--variant-outlinedColor":(r.vars||r).palette[t].main,"--variant-outlinedBorder":r.vars?`rgba(${r.vars.palette[t].mainChannel} / 0.5)`:_(r.palette[t].main,.5),"--variant-containedColor":(r.vars||r).palette[t].contrastText,"--variant-containedBg":(r.vars||r).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(r.vars||r).palette[t].dark,"--variant-textBg":r.vars?`rgba(${r.vars.palette[t].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:_(r.palette[t].main,r.palette.action.hoverOpacity),"--variant-outlinedBorder":(r.vars||r).palette[t].main,"--variant-outlinedBg":r.vars?`rgba(${r.vars.palette[t].mainChannel} / ${r.vars.palette.action.hoverOpacity})`:_(r.palette[t].main,r.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":r.vars?r.vars.palette.text.primary:(o=(a=r.palette).getContrastText)==null?void 0:o.call(a,n),"--variant-containedBg":r.vars?r.vars.palette.Button.inheritContainedBg:n,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":r.vars?r.vars.palette.Button.inheritContainedHoverBg:e,"--variant-textBg":r.vars?`rgba(${r.vars.palette.text.primaryChannel} / ${r.vars.palette.action.hoverOpacity})`:_(r.palette.text.primary,r.palette.action.hoverOpacity),"--variant-outlinedBg":r.vars?`rgba(${r.vars.palette.text.primaryChannel} / ${r.vars.palette.action.hoverOpacity})`:_(r.palette.text.primary,r.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:r.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:r.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:r.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:r.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:r.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:r.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${T.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${T.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),de=I("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.startIcon,n[`iconSize${v(e.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},..._r]}),pe=I("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.endIcon,n[`iconSize${v(e.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},..._r]}),fe=l.forwardRef(function(n,e){const a=l.useContext(ie),o=l.useContext(ce),t=on(a,n),s=Sr({props:t,name:"MuiButton"}),{children:i,color:c="primary",component:d="button",className:p,disabled:u=!1,disableElevation:x=!1,disableFocusRipple:m=!1,endIcon:S,focusVisibleClassName:R,fullWidth:b=!1,size:y="medium",startIcon:$,type:z,variant:L="text",...B}=s,g={...s,color:c,component:d,disabled:u,disableElevation:x,disableFocusRipple:m,fullWidth:b,size:y,type:z,variant:L},h=le(g),w=$&&f.jsx(de,{className:h.startIcon,ownerState:g,children:$}),P=S&&f.jsx(pe,{className:h.endIcon,ownerState:g,children:S}),W=o||"";return f.jsxs(ue,{ownerState:g,className:E(a.className,h.root,p,W),component:d,disabled:u,focusRipple:!m,focusVisibleClassName:E(h.focusVisible,R),ref:e,type:z,...B,classes:h,children:[w,i,P]})}),ge=Yn({createStyledComponent:I("div",{name:"MuiContainer",slot:"Root",overridesResolver:(r,n)=>{const{ownerState:e}=r;return[n.root,n[`maxWidth${v(String(e.maxWidth))}`],e.fixed&&n.fixed,e.disableGutters&&n.disableGutters]}}),useThemeProps:r=>jn({props:r,name:"MuiContainer"})});var ve=$r?window:null,or=function(r){return!!r.addEventListener},sr=function(r){return!!r.on},be=function(r,n,e,a){e===void 0&&(e=ve),l.useEffect(function(){if(n&&e)return or(e)?sn(e,r,n,a):sr(e)&&e.on(r,n,a),function(){or(e)?cn(e,r,n,a):sr(e)&&e.off(r,n,a)}},[r,n,e,JSON.stringify(a)])},me=function(r){return typeof r=="function"?r:typeof r=="string"?function(n){return n.key===r}:r?function(){return!0}:function(){return!1}},ir=function(r,n,e,a){n===void 0&&(n=ln),e===void 0&&(e={}),a===void 0&&(a=[r]);var o=e.event,t=o===void 0?"keydown":o,s=e.target,i=e.options,c=l.useMemo(function(){var d=me(r),p=function(u){if(d(u))return n(u)};return p},a);be(t,c,s,i)},kr=function(r){var n=l.useState([!1,null]),e=n[0],a=n[1];return ir(r,function(o){return a([!0,o])},{event:"keydown"},[e]),ir(r,function(o){return a([!1,o])},{event:"keyup"},[e]),e},xe=function(r,n,e){if(!$r)return[n,function(){}];var a=l.useState(function(){try{var s=sessionStorage.getItem(r);return typeof s!="string"?(sessionStorage.setItem(r,e?String(n):JSON.stringify(n)),n):e?s:JSON.parse(s||"null")}catch{return n}}),o=a[0],t=a[1];return l.useEffect(function(){try{var s=e?String(o):JSON.stringify(o);sessionStorage.setItem(r,s)}catch{}}),[o,t]},C=(r=>(r.Space=" ",r.Enter="Enter",r.R="r",r.S="s",r.One="1",r.Two="2",r.Three="3",r.Four="4",r))(C||{});function Mr(){const{t:r}=Pr(),n=l.useMemo(()=>[{id:C.S,label:r("S")},{id:C.R,label:r("R")},{id:C.Enter,label:r("Enter")},{id:C.Space,label:r("Spacja")},{id:C.One,label:"1"},{id:C.Two,label:"2"},{id:C.Three,label:"3"},{id:C.Four,label:"4"}],[r]),e=l.useCallback(a=>{const o=Dn(n,{id:a});return o?o.label:""},[n]);return{values:n,findLabelById:e}}function ye({keyCode:r,onClick:n,children:e,disabled:a,...o}){const[t,s]=kr(r),{findLabelById:i}=Mr();return l.useEffect(()=>{t&&!a&&(s==null||s.preventDefault(),s==null||s.stopPropagation(),n==null||n({}))},[t]),f.jsxs(fe,{...o,disabled:a,onClick:n,className:E("flex align-baseline",o.className),children:[e,f.jsxs(k,{variant:"caption",className:"ml-0.5 hidden md:inline",children:["(",i(r),")"]})]})}const cr=l.memo(ye);var lr=un,he=dn,Se=M,ur=lr?lr.isConcatSpreadable:void 0;function $e(r){return Se(r)||he(r)||!!(ur&&r&&r[ur])}var Ce=$e,Re=Cr,ze=Ce;function jr(r,n,e,a,o){var t=-1,s=r.length;for(e||(e=ze),o||(o=[]);++t<s;){var i=r[t];n>0&&e(i)?n>1?jr(i,n-1,e,a,o):Re(o,i):a||(o[o.length]=i)}return o}var Oe=jr,we=Rr;function Be(r){return we(r).toLowerCase()}var Pe=Be;const dr=j(Pe);function Te(r,n,e){var a=-1,o=r.length;n<0&&(n=-n>o?0:o+n),e=e>o?o:e,e<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var t=Array(o);++a<o;)t[a]=r[a+n];return t}var Ee=Te,Ie=Ee;function Le(r,n,e){var a=r.length;return e=e===void 0?a:e,!n&&e>=a?r:Ie(r,n,e)}var _e=Le,ke="\\ud800-\\udfff",Me="\\u0300-\\u036f",je="\\ufe20-\\ufe2f",We="\\u20d0-\\u20ff",Ae=Me+je+We,Ne="\\ufe0e\\ufe0f",Ue="\\u200d",Fe=RegExp("["+Ue+ke+Ae+Ne+"]");function De(r){return Fe.test(r)}var X=De,Ge=pn,Ve=zr,He=fn,Je=gn;function Ke(r,n,e){if(!Je(e))return!1;var a=typeof n;return(a=="number"?Ve(e)&&He(n,e.length):a=="string"&&n in e)?Ge(e[n],r):!1}var Qe=Ke,Ze=Or,qe=wr,Xe="[object RegExp]";function Ye(r){return qe(r)&&Ze(r)==Xe}var ra=Ye,na=ra,ea=Br,pr=vn,fr=pr&&pr.isRegExp,aa=fr?ea(fr):na,ta=aa;function oa(r){return r.split("")}var sa=oa,Wr="\\ud800-\\udfff",ia="\\u0300-\\u036f",ca="\\ufe20-\\ufe2f",la="\\u20d0-\\u20ff",ua=ia+ca+la,da="\\ufe0e\\ufe0f",pa="["+Wr+"]",H="["+ua+"]",J="\\ud83c[\\udffb-\\udfff]",fa="(?:"+H+"|"+J+")",Ar="[^"+Wr+"]",Nr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ur="[\\ud800-\\udbff][\\udc00-\\udfff]",ga="\\u200d",Fr=fa+"?",Dr="["+da+"]?",va="(?:"+ga+"(?:"+[Ar,Nr,Ur].join("|")+")"+Dr+Fr+")*",ba=Dr+Fr+va,ma="(?:"+[Ar+H+"?",H,Nr,Ur,pa].join("|")+")",xa=RegExp(J+"(?="+J+")|"+ma+ba,"g");function ya(r){return r.match(xa)||[]}var ha=ya,Sa=sa,$a=X,Ca=ha;function Ra(r){return $a(r)?Ca(r):Sa(r)}var za=Ra,Oa=bn,wa=_e,Ba=X,Pa=Qe,Ta=ta,Ea=za,Ia=Rr,La=4294967295;function _a(r,n,e){return e&&typeof e!="number"&&Pa(r,n,e)&&(n=e=void 0),e=e===void 0?La:e>>>0,e?(r=Ia(r),r&&(typeof n=="string"||n!=null&&!Ta(n))&&(n=Oa(n),!n&&Ba(r))?wa(Ea(r),0,e):r.split(n,e)):[]}var ka=_a;const gr=j(ka);var Ma=Or,ja=M,Wa=wr,Aa="[object String]";function Na(r){return typeof r=="string"||!ja(r)&&Wa(r)&&Ma(r)==Aa}var Ua=Na,Fa=mn,Da=Fa("length"),Ga=Da,Gr="\\ud800-\\udfff",Va="\\u0300-\\u036f",Ha="\\ufe20-\\ufe2f",Ja="\\u20d0-\\u20ff",Ka=Va+Ha+Ja,Qa="\\ufe0e\\ufe0f",Za="["+Gr+"]",K="["+Ka+"]",Q="\\ud83c[\\udffb-\\udfff]",qa="(?:"+K+"|"+Q+")",Vr="[^"+Gr+"]",Hr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Xa="\\u200d",Kr=qa+"?",Qr="["+Qa+"]?",Ya="(?:"+Xa+"(?:"+[Vr,Hr,Jr].join("|")+")"+Qr+Kr+")*",rt=Qr+Kr+Ya,nt="(?:"+[Vr+K+"?",K,Hr,Jr,Za].join("|")+")",vr=RegExp(Q+"(?="+Q+")|"+nt+rt,"g");function et(r){for(var n=vr.lastIndex=0;vr.test(r);)++n;return n}var at=et,tt=Ga,ot=X,st=at;function it(r){return ot(r)?st(r):tt(r)}var ct=it,lt=xn,ut=yn,dt=zr,pt=Ua,ft=ct,gt="[object Map]",vt="[object Set]";function bt(r){if(r==null)return 0;if(dt(r))return pt(r)?ft(r):r.length;var n=ut(r);return n==gt||n==vt?r.size:lt(r).length}var mt=bt;const xt=j(mt);function so({word:r}){const n=Wn(),e=Kn(n.breakpoints.up("md"));return f.jsx(k,{variant:e?"h2":"h3",sx:{wordBreak:"break-all"},className:"font-medium",children:r})}function yt({keyCode:r,onClick:n,...e}){const[a]=kr(r);return l.useEffect(()=>{a&&(n==null||n({}))},[a]),f.jsx(Fn,{...e,onClick:n})}const ht=l.memo(yt),St=Tr(f.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z"}),"VolumeOff"),$t=Tr(f.jsx("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp");function io({keyCode:r,name:n,language:e,autoPlay:a=!1}){const[o,t]=l.useState(!1),{findLabelById:s}=Mr(),{nativeLanguage:i}=Er(),c=i===e,d=l.useMemo(()=>{const u=new SpeechSynthesisUtterance(n);return u.lang=e===hn.En?"en-US":"pl-PL",u},[n,e]),p=l.useCallback(()=>{window.speechSynthesis.cancel(),o||window.speechSynthesis.speak(d)},[o,d]);return l.useEffect(()=>{const u=()=>t(!0),x=()=>t(!1),m=()=>t(!1);return d.addEventListener("start",u),d.addEventListener("end",x),d.addEventListener("error",m),()=>{d.removeEventListener("start",u),d.removeEventListener("end",x),d.removeEventListener("error",m)}},[d]),l.useEffect(()=>()=>{t(!1),window.speechSynthesis.cancel()},[n]),l.useEffect(()=>{a&&!c&&p()},[a,n,c]),c?null:f.jsx(V,{direction:"row",justifyContent:"center",alignItems:"center",children:f.jsx(oe,{badgeContent:f.jsxs(k,{variant:"caption",className:"hidden md:block",children:["(",s(r),")"]}),sx:{backgroundColor:"transparent"},overlap:"circular",children:f.jsx(ht,{onClick:p,keyCode:r,children:o?f.jsx(St,{}):f.jsx($t,{})})})})}function co({onReset:r}){const{t:n}=Pr(),e=Sn();return f.jsx(ge,{maxWidth:"md",children:f.jsx(Gn,{className:"p-2",children:f.jsxs(V,{justifyContent:"center",alignItems:"center",children:[f.jsx(k,{variant:"h3",gutterBottom:!0,children:n("Sesja zakończona")}),f.jsx(k,{gutterBottom:!0,children:n("Gratulacje! Ukończyłeś wszystko z tej sesji")}),f.jsxs(V,{className:"mt-3 w-full",direction:"row",gap:1,children:[f.jsx(cr,{className:"flex-1",variant:"contained",color:"error",onClick:r,keyCode:C.R,children:n("Zresetuj sesję")}),f.jsx(cr,{className:"flex-1",variant:"contained",onClick:()=>{e("/")},keyCode:C.Enter,children:n("Rozpocznij nową sesję")})]})]})})})}function Ct({selector:r}){const[n,e]=l.useState([]),[a,o]=l.useState(!0),t=$n();l.useEffect(()=>{var u;o(!0);const p=(u=t==null?void 0:t.words)==null?void 0:u.find({selector:r}).$.subscribe(x=>{e(Cn(x,m=>m.toJSON())),o(!1)},()=>{o(!1)});return()=>p==null?void 0:p.unsubscribe()},[t,r]);const s=l.useCallback(async p=>{if(!t)return;const u=await t.words.findOne({selector:{id:p}}).exec();u&&await u.update({$inc:{correct:1}})},[t]),i=l.useCallback(async p=>{if(!t)return;const u=await t.words.findOne({selector:{id:p}}).exec();u&&await u.update({$inc:{incorrect:1}})},[t]),c=l.useCallback(async p=>{const u=await(t==null?void 0:t.words.findOne({selector:{id:p}}).exec());u&&await u.update({$set:{isKnown:!0}})},[t]),d=l.useCallback(async p=>{if(!t)return null;const u=await t.words.findOne({selector:{id:p}}).exec();return u?u.toJSON():null},[t]);return{words:n,incrementCorrect:s,setWordAsKnown:c,incrementIncorrect:i,findWordById:d,isLoading:a}}function Rt(r,n){var e=r.length;for(r.sort(n);e--;)r[e]=r[e].value;return r}var zt=Rt,br=Rn;function Ot(r,n){if(r!==n){var e=r!==void 0,a=r===null,o=r===r,t=br(r),s=n!==void 0,i=n===null,c=n===n,d=br(n);if(!i&&!d&&!t&&r>n||t&&s&&c&&!i&&!d||a&&s&&c||!e&&c||!o)return 1;if(!a&&!t&&!d&&r<n||d&&e&&o&&!a&&!t||i&&e&&o||!s&&o||!c)return-1}return 0}var wt=Ot,Bt=wt;function Pt(r,n,e){for(var a=-1,o=r.criteria,t=n.criteria,s=o.length,i=e.length;++a<s;){var c=Bt(o[a],t[a]);if(c){if(a>=i)return c;var d=e[a];return c*(d=="desc"?-1:1)}}return r.index-n.index}var Tt=Pt,G=zn,Et=Bn,It=Pn,Lt=On,_t=zt,kt=Br,Mt=Tt,jt=wn,Wt=M;function At(r,n,e){n.length?n=G(n,function(t){return Wt(t)?function(s){return Et(s,t.length===1?t[0]:t)}:t}):n=[jt];var a=-1;n=G(n,kt(It));var o=Lt(r,function(t,s,i){var c=G(n,function(d){return d(t)});return{criteria:c,index:++a,value:t}});return _t(o,function(t,s){return Mt(t,s,e)})}var Nt=At,Ut=Nt,mr=M;function Ft(r,n,e,a){return r==null?[]:(mr(n)||(n=n==null?[]:[n]),e=a?void 0:e,mr(e)||(e=e==null?[]:[e]),Ut(r,n,e))}var Dt=Ft;const Gt=j(Dt);function Vt(r,n){var e=-1,a=r.length;for(n||(n=Array(a));++e<a;)n[e]=r[e];return n}var Ht=Vt,Jt=Cr,Kt=Oe,Qt=Ht,Zt=M;function qt(){var r=arguments.length;if(!r)return[];for(var n=Array(r-1),e=arguments[0],a=r;a--;)n[a-1]=arguments[a];return Jt(Zt(e)?Qt(e):[e],Kt(n,1))}var Xt=qt;const Yt=j(Xt);function lo(){const r=Tn(),{language:n,level:e}=Er(),[a,o]=xe("usedWords",[]),[t,s]=l.useState(!1),{words:i,setWordAsKnown:c,incrementCorrect:d,incrementIncorrect:p,findWordById:u,isLoading:x}=Ct({selector:l.useMemo(()=>({categoryId:{$eq:r.categoryId},levelId:{$eq:e},languageId:{$eq:n},id:{$nin:a},isKnown:{$eq:!1}}),[n,e,r.categoryId,a])}),m=l.useMemo(()=>Gt(i,[g=>g.correct+g.incorrect,g=>g.correct===0?g.incorrect:g.incorrect/g.correct],["asc","desc"]),[xt(i)]),S=gr(r.languageDirectionId,"-to-")[0],R=gr(r.languageDirectionId,"-to-")[1],b=l.useMemo(()=>{const g=m[0];return!g||g.nativeLanguageId===S?g:{...g,nativeLanguageId:S,languageId:R,word:g.translation,translation:g.word}},[R,S,m]),y=l.useCallback(()=>{o(Yt(a,b.id))},[b,o,a]),$=l.useCallback(async()=>{await c(b.id)},[b,c]),z=l.useCallback((g,h)=>dr(g)===dr(h),[]),L=l.useCallback(()=>{o([])},[o]),B=l.useCallback(async g=>{if(z(b.translation,g)){await d(b.id);const h=await u(b.id),w=h.incorrect+h.correct,P=h.correct/w*100;(w>=3&&P===100||w>=10&&P>=95)&&$(),s(!0)}else await p(b.id),s(!1)},[b,u,d,p,z,$]);return{isLoading:x,isCorrect:t,currentWord:b,check:B,nextWord:y,skip:$,reset:L,lang:R,nativeLang:S}}export{ge as C,co as F,C as K,so as N,io as V,Oe as _,_e as a,za as b,xt as c,cr as d,tr as e,gr as s,dr as t,lo as u};