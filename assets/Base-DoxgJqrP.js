import{s as yt,a as wt,r as g,u as kt,e as Ct,j as a,c as R,g as V,b as F,d as C,f as $,m as O,h as pt,i as W,k as H,l as St,T as Bt,C as It,n as et,o as Rt,p as J,q as $t,t as Mt,v as At,w as tt,L as Tt,O as Lt}from"./index-O7jm2W6K.js";import{c as ut}from"./createSvgIcon-BeooMAY-.js";import{u as jt}from"./useSettingsDb-DY7g-VkU.js";import{u as Pt,a as zt,g as Nt,o as gt,T as Dt,d as Et,r as Ot,b as rt,M as Ft,L as X,i as st,c as Ut}from"./List-DUzrIVYU.js";import{P as ft,B as mt,u as ht,a as ot,b as Gt,t as at,T as K,S as nt,m as Vt}from"./map-Cb5YD0IJ.js";import{I as it}from"./IconButton-2TB6bt-n.js";import{D as Ht}from"./Divider-CyBEU3IC.js";import{i as Wt}from"./isMuiElement-Clr0U7KM.js";import"./useSlot-D4Kwqc0o.js";function Xt(t={}){const{themeId:e,defaultTheme:o,defaultClassName:r="MuiBox-root",generateClassName:s}=t,n=yt("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(wt);return g.forwardRef(function(d,c){const p=kt(o),{className:h,component:v="div",...S}=Ct(d);return a.jsx(n,{as:v,ref:c,className:R(h,s?s(r):r),theme:e&&p[e]||p,...S})})}function Yt(t){return V("MuiAppBar",t)}F("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const qt=t=>{const{color:e,position:o,classes:r}=t,s={root:["root",`color${$(e)}`,`position${$(o)}`]};return H(s,Yt,r)},lt=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,Jt=C(ft,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[`position${$(o.position)}`],e[`color${$(o.color)}`]]}})(O(({theme:t})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[100],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[100]),...t.applyStyles("dark",{"--AppBar-background":t.vars?t.vars.palette.AppBar.defaultBg:t.palette.grey[900],"--AppBar-color":t.vars?t.vars.palette.text.primary:t.palette.getContrastText(t.palette.grey[900])})}},...Object.entries(t.palette).filter(pt(["contrastText"])).map(([e])=>({props:{color:e},style:{"--AppBar-background":(t.vars??t).palette[e].main,"--AppBar-color":(t.vars??t).palette[e].contrastText}})),{props:e=>e.enableColorOnDark===!0&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:e=>e.enableColorOnDark===!1&&!["inherit","transparent"].includes(e.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundColor:t.vars?lt(t.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:t.vars?lt(t.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...t.applyStyles("dark",{backgroundImage:"none"})}}]}))),_t=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiAppBar"}),{className:s,color:n="primary",enableColorOnDark:l=!1,position:i="fixed",...d}=r,c={...r,color:n,position:i,enableColorOnDark:l},p=qt(c);return a.jsx(Jt,{square:!0,component:"header",ownerState:c,elevation:4,className:R(p.root,s,i==="fixed"&&"mui-fixed"),ref:o,...d})}),Kt=F("MuiBox",["root"]),Qt=St(),ct=Xt({themeId:Bt,defaultTheme:Qt,defaultClassName:Kt.root,generateClassName:It.generate});function Zt(t){return V("PrivateSwitchBase",t)}F("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=t=>{const{classes:e,checked:o,disabled:r,edge:s}=t,n={root:["root",o&&"checked",r&&"disabled",s&&`edge${$(s)}`],input:["input"]};return H(n,Zt,e)},ee=C(mt)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:e})=>t==="start"&&e.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:e})=>t==="end"&&e.size!=="small",style:{marginRight:-12}}]}),oe=C("input",{shouldForwardProp:et})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),re=g.forwardRef(function(e,o){const{autoFocus:r,checked:s,checkedIcon:n,className:l,defaultChecked:i,disabled:d,disableFocusRipple:c=!1,edge:p=!1,icon:h,id:v,inputProps:S,inputRef:m,name:y,onBlur:k,onChange:b,onFocus:z,readOnly:A,required:j=!1,tabIndex:N,type:B,value:w,...P}=e,[T,M]=Pt({controlled:s,default:!!i,name:"SwitchBase",state:"checked"}),x=zt(),U=f=>{z&&z(f),x&&x.onFocus&&x.onFocus(f)},D=f=>{k&&k(f),x&&x.onBlur&&x.onBlur(f)},G=f=>{if(f.nativeEvent.defaultPrevented)return;const _=f.target.checked;M(_),b&&b(f,_)};let L=d;x&&typeof L>"u"&&(L=x.disabled);const E=B==="checkbox"||B==="radio",Y={...e,checked:T,disabled:L,disableFocusRipple:c,edge:p},u=te(Y);return a.jsxs(ee,{component:"span",className:R(u.root,l),centerRipple:!0,focusRipple:!c,disabled:L,tabIndex:null,role:void 0,onFocus:U,onBlur:D,ownerState:Y,ref:o,...P,children:[a.jsx(oe,{autoFocus:r,checked:s,defaultChecked:i,className:u.input,disabled:L,id:E?v:void 0,name:y,onChange:G,readOnly:A,ref:m,required:j,ownerState:Y,tabIndex:N,type:B,...B==="checkbox"&&w===void 0?{}:{value:w},...S}),T?n:h]})});function se(t,e,o){const r=e.getBoundingClientRect(),s=o&&o.getBoundingClientRect(),n=gt(e);let l;if(e.fakeTransform)l=e.fakeTransform;else{const c=n.getComputedStyle(e);l=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}let i=0,d=0;if(l&&l!=="none"&&typeof l=="string"){const c=l.split("(")[1].split(")")[0].split(",");i=parseInt(c[4],10),d=parseInt(c[5],10)}return t==="left"?s?`translateX(${s.right+i-r.left}px)`:`translateX(${n.innerWidth+i-r.left}px)`:t==="right"?s?`translateX(-${r.right-s.left-i}px)`:`translateX(-${r.left+r.width-i}px)`:t==="up"?s?`translateY(${s.bottom+d-r.top}px)`:`translateY(${n.innerHeight+d-r.top}px)`:s?`translateY(-${r.top-s.top+r.height-d}px)`:`translateY(-${r.top+r.height-d}px)`}function ae(t){return typeof t=="function"?t():t}function Q(t,e,o){const r=ae(o),s=se(t,e,r);s&&(e.style.webkitTransform=s,e.style.transform=s)}const ne=g.forwardRef(function(e,o){const r=ht(),s={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},n={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:l,appear:i=!0,children:d,container:c,direction:p="down",easing:h=s,in:v,onEnter:S,onEntered:m,onEntering:y,onExit:k,onExited:b,onExiting:z,style:A,timeout:j=n,TransitionComponent:N=Dt,...B}=e,w=g.useRef(null),P=ot(Nt(d),w,o),T=u=>f=>{u&&(f===void 0?u(w.current):u(w.current,f))},M=T((u,f)=>{Q(p,u,c),Ot(u),S&&S(u,f)}),x=T((u,f)=>{const _=rt({timeout:j,style:A,easing:h},{mode:"enter"});u.style.webkitTransition=r.transitions.create("-webkit-transform",{..._}),u.style.transition=r.transitions.create("transform",{..._}),u.style.webkitTransform="none",u.style.transform="none",y&&y(u,f)}),U=T(m),D=T(z),G=T(u=>{const f=rt({timeout:j,style:A,easing:h},{mode:"exit"});u.style.webkitTransition=r.transitions.create("-webkit-transform",f),u.style.transition=r.transitions.create("transform",f),Q(p,u,c),k&&k(u)}),L=T(u=>{u.style.webkitTransition="",u.style.transition="",b&&b(u)}),E=u=>{l&&l(w.current,u)},Y=g.useCallback(()=>{w.current&&Q(p,w.current,c)},[p,c]);return g.useEffect(()=>{if(v||p==="down"||p==="right")return;const u=Et(()=>{w.current&&Q(p,w.current,c)}),f=gt(w.current);return f.addEventListener("resize",u),()=>{u.clear(),f.removeEventListener("resize",u)}},[p,v,c]),g.useEffect(()=>{v||Y()},[v,Y]),a.jsx(N,{nodeRef:w,onEnter:M,onEntered:U,onEntering:x,onExit:G,onExited:L,onExiting:D,addEndListener:E,appear:i,in:v,timeout:j,...B,children:(u,f)=>g.cloneElement(d,{ref:P,style:{visibility:u==="exited"&&!v?"hidden":void 0,...A,...d.props.style},...f})})});function ie(t){return V("MuiDrawer",t)}F("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const vt=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},le=t=>{const{classes:e,anchor:o,variant:r}=t,s={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${$(o)}`,r!=="temporary"&&`paperAnchorDocked${$(o)}`]};return H(s,ie,e)},ce=C(Ft,{name:"MuiDrawer",slot:"Root",overridesResolver:vt})(O(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer}))),dt=C("div",{shouldForwardProp:et,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:vt})({flex:"0 0 auto"}),de=C(ft,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${$(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${$(o.anchor)}`]]}})(O(({theme:t})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:e})=>e.anchor==="left"&&e.variant!=="temporary",style:{borderRight:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="top"&&e.variant!=="temporary",style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="right"&&e.variant!=="temporary",style:{borderLeft:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>e.anchor==="bottom"&&e.variant!=="temporary",style:{borderTop:`1px solid ${(t.vars||t).palette.divider}`}}]}))),xt={left:"right",right:"left",top:"down",bottom:"up"};function pe(t){return["left","right"].includes(t)}function ue({direction:t},e){return t==="rtl"&&pe(e)?xt[e]:e}const ge=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiDrawer"}),s=ht(),n=Rt(),l={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:i="left",BackdropProps:d,children:c,className:p,elevation:h=16,hideBackdrop:v=!1,ModalProps:{BackdropProps:S,...m}={},onClose:y,open:k=!1,PaperProps:b={},SlideProps:z,TransitionComponent:A=ne,transitionDuration:j=l,variant:N="temporary",...B}=r,w=g.useRef(!1);g.useEffect(()=>{w.current=!0},[]);const P=ue({direction:n?"rtl":"ltr"},i),M={...r,anchor:i,elevation:h,open:k,variant:N,...B},x=le(M),U=a.jsx(de,{elevation:N==="temporary"?h:0,square:!0,...b,className:R(x.paper,b.className),ownerState:M,children:c});if(N==="permanent")return a.jsx(dt,{className:R(x.root,x.docked,p),ownerState:M,ref:o,...B,children:U});const D=a.jsx(A,{in:k,direction:xt[P],timeout:j,appear:w.current,...z,children:U});return N==="persistent"?a.jsx(dt,{className:R(x.root,x.docked,p),ownerState:M,ref:o,...B,children:D}):a.jsx(ce,{BackdropProps:{...d,...S,transitionDuration:j},className:R(x.root,x.modal,p),open:k,ownerState:M,onClose:y,hideBackdrop:v,ref:o,...B,...m,children:D})});function fe(t){return V("MuiListItem",t)}F("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function me(t){return V("MuiListItemButton",t)}const q=F("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),he=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},ve=t=>{const{alignItems:e,classes:o,dense:r,disabled:s,disableGutters:n,divider:l,selected:i}=t,c=H({root:["root",r&&"dense",!n&&"gutters",l&&"divider",s&&"disabled",e==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},me,o);return{...o,...c}},xe=C(mt,{shouldForwardProp:t=>et(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:he})(O(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${q.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:J(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${q.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:J(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${q.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:J(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:J(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${q.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${q.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]}))),be=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:n=!1,component:l="div",children:i,dense:d=!1,disableGutters:c=!1,divider:p=!1,focusVisibleClassName:h,selected:v=!1,className:S,...m}=r,y=g.useContext(X),k=g.useMemo(()=>({dense:d||y.dense||!1,alignItems:s,disableGutters:c}),[s,y.dense,d,c]),b=g.useRef(null);Gt(()=>{n&&b.current&&b.current.focus()},[n]);const z={...r,alignItems:s,dense:k.dense,disableGutters:c,divider:p,selected:v},A=ve(z),j=ot(b,o);return a.jsx(X.Provider,{value:k,children:a.jsx(xe,{ref:j,href:m.href||m.to,component:(m.href||m.to)&&l==="div"?"button":l,focusVisibleClassName:R(A.focusVisible,h),ownerState:z,className:R(A.root,S),...m,classes:A,children:i})})});function ye(t){return V("MuiListItemSecondaryAction",t)}F("MuiListItemSecondaryAction",["root","disableGutters"]);const we=t=>{const{disableGutters:e,classes:o}=t;return H({root:["root",e&&"disableGutters"]},ye,o)},ke=C("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),bt=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiListItemSecondaryAction"}),{className:s,...n}=r,l=g.useContext(X),i={...r,disableGutters:l.disableGutters},d=we(i);return a.jsx(ke,{className:R(d.root,s),ownerState:i,ref:o,...n})});bt.muiName="ListItemSecondaryAction";const Ce=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.hasSecondaryAction&&e.secondaryAction]},Se=t=>{const{alignItems:e,classes:o,dense:r,disableGutters:s,disablePadding:n,divider:l,hasSecondaryAction:i}=t;return H({root:["root",r&&"dense",!s&&"gutters",!n&&"padding",l&&"divider",e==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},fe,o)},Be=C("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ce})(O(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${q.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),Ie=C("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Re=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiListItem"}),{alignItems:s="center",children:n,className:l,component:i,components:d={},componentsProps:c={},ContainerComponent:p="li",ContainerProps:{className:h,...v}={},dense:S=!1,disableGutters:m=!1,disablePadding:y=!1,divider:k=!1,secondaryAction:b,slotProps:z={},slots:A={},...j}=r,N=g.useContext(X),B=g.useMemo(()=>({dense:S||N.dense||!1,alignItems:s,disableGutters:m}),[s,N.dense,S,m]),w=g.useRef(null),P=g.Children.toArray(n),T=P.length&&Wt(P[P.length-1],["ListItemSecondaryAction"]),M={...r,alignItems:s,dense:B.dense,disableGutters:m,disablePadding:y,divider:k,hasSecondaryAction:T},x=Se(M),U=ot(w,o),D=A.root||d.Root||Be,G=z.root||c.root||{},L={className:R(x.root,G.className,l),...j};let E=i||"li";return T?(E=!L.component&&!i?"div":E,p==="li"&&(E==="li"?E="div":L.component==="li"&&(L.component="div")),a.jsx(X.Provider,{value:B,children:a.jsxs(Ie,{as:p,className:R(x.container,h),ref:U,ownerState:M,...v,children:[a.jsx(D,{...G,...!st(D)&&{as:E,ownerState:{...M,...G.ownerState}},...L,children:P}),P.pop()]})})):a.jsx(X.Provider,{value:B,children:a.jsxs(D,{...G,as:E,ref:U,...!st(D)&&{ownerState:{...M,...G.ownerState}},...L,children:[P,b&&a.jsx(bt,{children:b})]})})});function $e(t){return V("MuiListItemText",t)}const Z=F("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),Me=t=>{const{classes:e,inset:o,primary:r,secondary:s,dense:n}=t;return H({root:["root",o&&"inset",n&&"dense",r&&s&&"multiline"],primary:["primary"],secondary:["secondary"]},$e,e)},Ae=C("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${Z.primary}`]:e.primary},{[`& .${Z.secondary}`]:e.secondary},e.root,o.inset&&e.inset,o.primary&&o.secondary&&e.multiline,o.dense&&e.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${at.root}:where(& .${Z.primary})`]:{display:"block"},[`.${at.root}:where(& .${Z.secondary})`]:{display:"block"},variants:[{props:({ownerState:t})=>t.primary&&t.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:t})=>t.inset,style:{paddingLeft:56}}]}),Te=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiListItemText"}),{children:s,className:n,disableTypography:l=!1,inset:i=!1,primary:d,primaryTypographyProps:c,secondary:p,secondaryTypographyProps:h,...v}=r,{dense:S}=g.useContext(X);let m=d??s,y=p;const k={...r,disableTypography:l,inset:i,primary:!!m,secondary:!!y,dense:S},b=Me(k);return m!=null&&m.type!==K&&!l&&(m=a.jsx(K,{variant:S?"body2":"body1",className:b.primary,component:c!=null&&c.variant?void 0:"span",...c,children:m})),y!=null&&y.type!==K&&!l&&(y=a.jsx(K,{variant:"body2",className:b.secondary,color:"textSecondary",...h,children:y})),a.jsxs(Ae,{className:R(b.root,n),ownerState:k,ref:o,...v,children:[m,y]})});function Le(t){return V("MuiSwitch",t)}const I=F("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),je=t=>{const{classes:e,edge:o,size:r,color:s,checked:n,disabled:l}=t,i={root:["root",o&&`edge${$(o)}`,`size${$(r)}`],switchBase:["switchBase",`color${$(s)}`,n&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=H(i,Le,e);return{...e,...d}},Pe=C("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.edge&&e[`edge${$(o.edge)}`],e[`size${$(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${I.thumb}`]:{width:16,height:16},[`& .${I.switchBase}`]:{padding:4,[`&.${I.checked}`]:{transform:"translateX(16px)"}}}}]}),ze=C(re,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.switchBase,{[`& .${I.input}`]:e.input},o.color!=="default"&&e[`color${$(o.color)}`]]}})(O(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${I.checked}`]:{transform:"translateX(20px)"},[`&.${I.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${I.checked} + .${I.track}`]:{opacity:.5},[`&.${I.disabled} + .${I.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${I.input}`]:{left:"-100%",width:"300%"}})),O(({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(pt(["light"])).map(([e])=>({props:{color:e},style:{[`&.${I.checked}`]:{color:(t.vars||t).palette[e].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:J(t.palette[e].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${I.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${e}DisabledColor`]:`${t.palette.mode==="light"?$t(t.palette[e].main,.62):Mt(t.palette[e].main,.55)}`}},[`&.${I.checked} + .${I.track}`]:{backgroundColor:(t.vars||t).palette[e].main}}}))]}))),Ne=C("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})(O(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),De=C("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})(O(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Ee=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiSwitch"}),{className:s,color:n="primary",edge:l=!1,size:i="medium",sx:d,...c}=r,p={...r,color:n,edge:l,size:i},h=je(p),v=a.jsx(De,{className:h.thumb,ownerState:p});return a.jsxs(Pe,{className:R(h.root,s),sx:d,ownerState:p,children:[a.jsx(ze,{type:"checkbox",icon:v,checkedIcon:v,ref:o,ownerState:p,...c,classes:{...h,root:h.switchBase}}),a.jsx(Ne,{className:h.track,ownerState:p})]})});function Oe(t){return V("MuiToolbar",t)}F("MuiToolbar",["root","gutters","regular","dense"]);const Fe=t=>{const{classes:e,disableGutters:o,variant:r}=t;return H({root:["root",!o&&"gutters",r]},Oe,e)},Ue=C("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disableGutters&&e.gutters,e[o.variant]]}})(O(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}))),Ge=g.forwardRef(function(e,o){const r=W({props:e,name:"MuiToolbar"}),{className:s,component:n="div",disableGutters:l=!1,variant:i="regular",...d}=r,c={...r,component:n,disableGutters:l,variant:i},p=Fe(c);return a.jsx(Ue,{as:n,className:R(p.root,s),ref:o,ownerState:c,...d})}),Ve=ut(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle"),He=ut(a.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");function We(){const t=g.useContext(At);if(!t)throw new Error("useThemeModeContext should be used within themeProvider");return t}const Xe=C(Ee)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",...t.applyStyles("dark",{backgroundColor:"#8796A5"})}}},"& .MuiSwitch-thumb":{backgroundColor:"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`},...t.applyStyles("dark",{backgroundColor:"#003892"})},"& .MuiSwitch-track":{opacity:1,backgroundColor:"#aab4be",borderRadius:20/2,...t.applyStyles("dark",{backgroundColor:"#8796A5"})}}));function Ye(){const{mode:t,setMode:e}=We();return a.jsx(Xe,{checked:t===tt.Dark,onChange:o=>e(o.target.checked?tt.Dark:tt.Light)})}const qe=240;function so(){const[t,e]=g.useState(!1),{settings:o}=jt(),r=()=>{e(n=>!n)},s=[["Home","/"],["Choocie languiage","/languages"]];return a.jsxs(nt,{className:"h-screen",children:[a.jsx(_t,{position:"static",children:a.jsxs(Ge,{className:"flex items-center justify-between",children:[JSON.stringify(o),a.jsx(it,{color:"inherit",edge:"start",onClick:r,className:"mr-2",children:a.jsx(He,{})}),a.jsxs(nt,{direction:"row",alignItems:"center",gap:1,children:[a.jsx(Ye,{}),a.jsx(it,{color:"inherit",children:a.jsx(Ve,{})})]})]})}),a.jsx("nav",{children:a.jsx(ge,{variant:"temporary",open:t,onClose:r,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:qe}},children:a.jsxs(ct,{onClick:r,className:"text-center",children:[a.jsx(K,{variant:"h6",className:"my-2",children:"MUI"}),a.jsx(Ht,{}),a.jsx(Ut,{children:Vt(s,([n,l])=>a.jsx(Re,{disablePadding:!0,children:a.jsx(be,{className:"text-center",children:a.jsx(Tt,{to:l,className:"w-full",children:a.jsx(Te,{primary:n})})})},n))})]})})}),a.jsx(ct,{component:"main",className:"flex-1 overflow-y-auto p-3",sx:{backgroundColor:"background.default"},children:a.jsx(Lt,{})})]})}export{so as default};