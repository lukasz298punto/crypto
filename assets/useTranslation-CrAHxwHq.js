var Ze=Object.defineProperty;var Qe=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>Qe(e,typeof t!="symbol"?t+"":t,n);import{av as et,P as tt,at as Se,r as u,M as nt,aw as me,ax as re,ay as ot,E as rt,az as st,au as at,j as B,d as N,e as Q,g as ee,aA as ge,aB as we,aC as Ne,I as q,_ as it,aD as lt,aE as ut,H as ct,a as te,s as A,m as ke,u as ne,i as ye,aF as ve,w as le,c as se,b as pt,aG as dt,aH as ft,aI as ht}from"./index-BnVunRrp.js";const mt=et();function gt(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:tt(t.components[n].defaultProps,r)}function Be({props:e,name:t,defaultTheme:n,themeId:r}){let s=Se(n);return r&&(s=s[r]||s),gt({theme:s,name:t,props:e})}const yt=typeof window<"u"?u.useLayoutEffect:u.useEffect;function vt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function J(e){const t=u.useRef(e);return yt(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function be(...e){return u.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{vt(n,t)})},e)}const Me={};function je(e,t){const n=u.useRef(Me);return n.current===Me&&(n.current=e(t)),n}const bt=[];function Mt(e){u.useEffect(e,bt)}class ue{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ue}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function xt(){const e=je(ue.create).current;return Mt(e.disposeEffect),e}function xe(e){try{return e.matches(":focus-visible")}catch{}return!1}const Rt=nt(),Tt=mt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Ct(e){return Be({props:e,name:"MuiStack",defaultTheme:Rt})}function Et(e,t){const n=u.Children.toArray(e).filter(Boolean);return n.reduce((r,s,o)=>(r.push(s),o<n.length-1&&r.push(u.cloneElement(t,{key:`separator-${o}`})),r),[])}const Pt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],St=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...me({theme:t},re({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r}))};if(e.spacing){const r=ot(t),s=Object.keys(t.breakpoints.values).reduce((l,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(l[i]=!0),l),{}),o=re({values:e.direction,base:s}),a=re({values:e.spacing,base:s});typeof o=="object"&&Object.keys(o).forEach((l,i,d)=>{if(!o[l]){const h=i>0?o[d[i-1]]:"column";o[l]=h}}),n=rt(n,me({theme:t},a,(l,i)=>e.useFlexGap?{gap:ge(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Pt(i?o[i]:e.direction)}`]:ge(r,l)}}))}return n=st(t.breakpoints,n),n};function wt(e={}){const{createStyledComponent:t=Tt,useThemeProps:n=Ct,componentName:r="MuiStack"}=e,s=()=>Q({root:["root"]},l=>ee(r,l),{}),o=t(St);return u.forwardRef(function(l,i){const d=n(l),b=at(d),{component:h="div",direction:m="column",spacing:g=0,divider:x,children:y,className:w,useFlexGap:T=!1,...P}=b,f={direction:m,spacing:g,useFlexGap:T},C=s();return B.jsx(o,{as:h,ownerState:f,ref:i,className:N(C.root,w),...P,children:x?Et(y,x):y})})}function Nt(){const e=Se(Ne);return e[we]||e}function kt({props:e,name:t}){return Be({props:e,name:t,defaultTheme:Ne,themeId:we})}const Re=q.createContext(null);function ce(e,t){var n=function(o){return t&&u.isValidElement(o)?t(o):o},r=Object.create(null);return e&&u.Children.map(e,function(s){return s}).forEach(function(s){r[s.key]=n(s)}),r}function Bt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var r=Object.create(null),s=[];for(var o in e)o in t?s.length&&(r[o]=s,s=[]):s.push(o);var a,c={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var i=r[l][a];c[r[l][a]]=n(i)}c[l]=n(l)}for(a=0;a<s.length;a++)c[s[a]]=n(s[a]);return c}function O(e,t,n){return n[t]!=null?n[t]:e.props[t]}function jt(e,t){return ce(e.children,function(n){return u.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:O(n,"appear",e),enter:O(n,"enter",e),exit:O(n,"exit",e)})})}function $t(e,t,n){var r=ce(e.children),s=Bt(t,r);return Object.keys(s).forEach(function(o){var a=s[o];if(u.isValidElement(a)){var c=o in t,l=o in r,i=t[o],d=u.isValidElement(i)&&!i.props.in;l&&(!c||d)?s[o]=u.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:O(a,"exit",e),enter:O(a,"enter",e)}):!l&&c&&!d?s[o]=u.cloneElement(a,{in:!1}):l&&c&&u.isValidElement(i)&&(s[o]=u.cloneElement(a,{onExited:n.bind(null,a),in:i.props.in,exit:O(a,"exit",e),enter:O(a,"enter",e)}))}}),s}var It=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Vt={component:"div",childFactory:function(t){return t}},pe=function(e){it(t,e);function t(r,s){var o;o=e.call(this,r,s)||this;var a=o.handleExited.bind(lt(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,o){var a=o.children,c=o.handleExited,l=o.firstRender;return{children:l?jt(s,c):$t(s,a,c),firstRender:!1}},n.handleExited=function(s,o){var a=ce(this.props.children);s.key in a||(s.props.onExited&&s.props.onExited(o),this.mounted&&this.setState(function(c){var l=ut({},c.children);return delete l[s.key],{children:l}}))},n.render=function(){var s=this.props,o=s.component,a=s.childFactory,c=ct(s,["component","childFactory"]),l=this.state.contextValue,i=It(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,o===null?q.createElement(Re.Provider,{value:l},i):q.createElement(Re.Provider,{value:l},q.createElement(o,c,i))},t}(q.Component);pe.propTypes={};pe.defaultProps=Vt;function Lt(e){return ee("MuiPaper",e)}te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Dt=e=>{const{square:t,elevation:n,variant:r,classes:s}=e,o={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Q(o,Lt,s)},Ft=A("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(ke(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),mn=u.forwardRef(function(t,n){var m;const r=ne({props:t,name:"MuiPaper"}),s=Nt(),{className:o,component:a="div",elevation:c=1,square:l=!1,variant:i="elevation",...d}=r,b={...r,component:a,elevation:c,square:l,variant:i},h=Dt(b);return B.jsx(Ft,{as:a,ownerState:b,className:N(h.root,o),ref:n,...d,style:{...i==="elevation"&&{"--Paper-shadow":(s.vars||s).shadows[c],...s.vars&&{"--Paper-overlay":(m=s.vars.overlays)==null?void 0:m[c]},...!s.vars&&s.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${ye("#fff",ve(c))}, ${ye("#fff",ve(c))})`}},...d.style}})});class Z{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Z}static use(){const t=je(Z.create).current,[n,r]=u.useState(!1);return t.shouldMount=n,t.setShouldMount=r,u.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Ot(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Ut(){return Z.use()}function Ot(){let e,t;const n=new Promise((r,s)=>{e=r,t=s});return n.resolve=e,n.reject=t,n}function zt(e){const{className:t,classes:n,pulsate:r=!1,rippleX:s,rippleY:o,rippleSize:a,in:c,onExited:l,timeout:i}=e,[d,b]=u.useState(!1),h=N(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),m={width:a,height:a,top:-(a/2)+o,left:-(a/2)+s},g=N(n.child,d&&n.childLeaving,r&&n.childPulsate);return!c&&!d&&b(!0),u.useEffect(()=>{if(!c&&l!=null){const x=setTimeout(l,i);return()=>{clearTimeout(x)}}},[l,c,i]),B.jsx("span",{className:h,style:m,children:B.jsx("span",{className:g})})}const k=te("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ae=550,At=80,Wt=le`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ht=le`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Yt=le`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Gt=A("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Xt=A(zt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${k.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wt};
    animation-duration: ${ae}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${k.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${k.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${k.childLeaving} {
    opacity: 0;
    animation-name: ${Ht};
    animation-duration: ${ae}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${k.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Yt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,qt=u.forwardRef(function(t,n){const r=ne({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:o={},className:a,...c}=r,[l,i]=u.useState([]),d=u.useRef(0),b=u.useRef(null);u.useEffect(()=>{b.current&&(b.current(),b.current=null)},[l]);const h=u.useRef(!1),m=xt(),g=u.useRef(null),x=u.useRef(null),y=u.useCallback(f=>{const{pulsate:C,rippleX:S,rippleY:j,rippleSize:v,cb:E}=f;i(M=>[...M,B.jsx(Xt,{classes:{ripple:N(o.ripple,k.ripple),rippleVisible:N(o.rippleVisible,k.rippleVisible),ripplePulsate:N(o.ripplePulsate,k.ripplePulsate),child:N(o.child,k.child),childLeaving:N(o.childLeaving,k.childLeaving),childPulsate:N(o.childPulsate,k.childPulsate)},timeout:ae,pulsate:C,rippleX:S,rippleY:j,rippleSize:v},d.current)]),d.current+=1,b.current=E},[o]),w=u.useCallback((f={},C={},S=()=>{})=>{const{pulsate:j=!1,center:v=s||C.pulsate,fakeElement:E=!1}=C;if((f==null?void 0:f.type)==="mousedown"&&h.current){h.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(h.current=!0);const M=E?null:x.current,R=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let L,$,D;if(v||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)L=Math.round(R.width/2),$=Math.round(R.height/2);else{const{clientX:W,clientY:F}=f.touches&&f.touches.length>0?f.touches[0]:f;L=Math.round(W-R.left),$=Math.round(F-R.top)}if(v)D=Math.sqrt((2*R.width**2+R.height**2)/3),D%2===0&&(D+=1);else{const W=Math.max(Math.abs((M?M.clientWidth:0)-L),L)*2+2,F=Math.max(Math.abs((M?M.clientHeight:0)-$),$)*2+2;D=Math.sqrt(W**2+F**2)}f!=null&&f.touches?g.current===null&&(g.current=()=>{y({pulsate:j,rippleX:L,rippleY:$,rippleSize:D,cb:S})},m.start(At,()=>{g.current&&(g.current(),g.current=null)})):y({pulsate:j,rippleX:L,rippleY:$,rippleSize:D,cb:S})},[s,y,m]),T=u.useCallback(()=>{w({},{pulsate:!0})},[w]),P=u.useCallback((f,C)=>{if(m.clear(),(f==null?void 0:f.type)==="touchend"&&g.current){g.current(),g.current=null,m.start(0,()=>{P(f,C)});return}g.current=null,i(S=>S.length>0?S.slice(1):S),b.current=C},[m]);return u.useImperativeHandle(n,()=>({pulsate:T,start:w,stop:P}),[T,w,P]),B.jsx(Gt,{className:N(k.root,o.root,a),ref:x,...c,children:B.jsx(pe,{component:null,exit:!0,children:l})})});function Kt(e){return ee("MuiButtonBase",e)}const _t=te("MuiButtonBase",["root","disabled","focusVisible"]),Jt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:s}=e,a=Q({root:["root",t&&"disabled",n&&"focusVisible"]},Kt,s);return n&&r&&(a.root+=` ${r}`),a},Zt=A("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_t.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),gn=u.forwardRef(function(t,n){const r=ne({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:o=!1,children:a,className:c,component:l="button",disabled:i=!1,disableRipple:d=!1,disableTouchRipple:b=!1,focusRipple:h=!1,focusVisibleClassName:m,LinkComponent:g="a",onBlur:x,onClick:y,onContextMenu:w,onDragLeave:T,onFocus:P,onFocusVisible:f,onKeyDown:C,onKeyUp:S,onMouseDown:j,onMouseLeave:v,onMouseUp:E,onTouchEnd:M,onTouchMove:R,onTouchStart:L,tabIndex:$=0,TouchRippleProps:D,touchRippleRef:W,type:F,...H}=r,Y=u.useRef(null),I=Ut(),Ve=be(I.ref,W),[U,K]=u.useState(!1);i&&U&&K(!1),u.useImperativeHandle(s,()=>({focusVisible:()=>{K(!0),Y.current.focus()}}),[]);const Le=I.shouldMount&&!d&&!i;u.useEffect(()=>{U&&h&&!d&&I.pulsate()},[d,h,U,I]);function V(p,fe,Je=b){return J(he=>(fe&&fe(he),Je||I[p](he),!0))}const De=V("start",j),Fe=V("stop",w),Ue=V("stop",T),Oe=V("stop",E),ze=V("stop",p=>{U&&p.preventDefault(),v&&v(p)}),Ae=V("start",L),We=V("stop",M),He=V("stop",R),Ye=V("stop",p=>{xe(p.target)||K(!1),x&&x(p)},!1),Ge=J(p=>{Y.current||(Y.current=p.currentTarget),xe(p.target)&&(K(!0),f&&f(p)),P&&P(p)}),oe=()=>{const p=Y.current;return l&&l!=="button"&&!(p.tagName==="A"&&p.href)},Xe=J(p=>{h&&!p.repeat&&U&&p.key===" "&&I.stop(p,()=>{I.start(p)}),p.target===p.currentTarget&&oe()&&p.key===" "&&p.preventDefault(),C&&C(p),p.target===p.currentTarget&&oe()&&p.key==="Enter"&&!i&&(p.preventDefault(),y&&y(p))}),qe=J(p=>{h&&p.key===" "&&U&&!p.defaultPrevented&&I.stop(p,()=>{I.pulsate(p)}),S&&S(p),y&&p.target===p.currentTarget&&oe()&&p.key===" "&&!p.defaultPrevented&&y(p)});let _=l;_==="button"&&(H.href||H.to)&&(_=g);const G={};_==="button"?(G.type=F===void 0?"button":F,G.disabled=i):(!H.href&&!H.to&&(G.role="button"),i&&(G["aria-disabled"]=i));const Ke=be(n,Y),de={...r,centerRipple:o,component:l,disabled:i,disableRipple:d,disableTouchRipple:b,focusRipple:h,tabIndex:$,focusVisible:U},_e=Jt(de);return B.jsxs(Zt,{as:_,className:N(_e.root,c),ownerState:de,onBlur:Ye,onClick:y,onContextMenu:Fe,onFocus:Ge,onKeyDown:Xe,onKeyUp:qe,onMouseDown:De,onMouseLeave:ze,onMouseUp:Oe,onDragLeave:Ue,onTouchEnd:We,onTouchMove:He,onTouchStart:Ae,ref:Ke,tabIndex:i?-1:$,type:F,...G,...H,children:[a,Le?B.jsx(qt,{ref:Ve,center:o,...D}):null]})});function Qt(e){return ee("MuiTypography",e)}const yn=te("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),en={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},tn=dt(),nn=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:s,variant:o,classes:a}=e,c={root:["root",o,e.align!=="inherit"&&`align${se(t)}`,n&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return Q(c,Qt,a)},on=A("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${se(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(ke(({theme:e})=>{var t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([n,r])=>n!=="inherit"&&r&&typeof r=="object").map(([n,r])=>({props:{variant:n},style:r})),...Object.entries(e.palette).filter(pt()).map(([n])=>({props:{color:n},style:{color:(e.vars||e).palette[n].main}})),...Object.entries(((t=e.palette)==null?void 0:t.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${se(n)}`},style:{color:(e.vars||e).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),Te={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},vn=u.forwardRef(function(t,n){const{color:r,...s}=ne({props:t,name:"MuiTypography"}),o=!en[r],a=tn({...s,...o&&{color:r}}),{align:c="inherit",className:l,component:i,gutterBottom:d=!1,noWrap:b=!1,paragraph:h=!1,variant:m="body1",variantMapping:g=Te,...x}=a,y={...a,align:c,color:r,className:l,component:i,gutterBottom:d,noWrap:b,paragraph:h,variant:m,variantMapping:g},w=i||(h?"p":g[m]||Te[m])||"span",T=nn(y);return B.jsx(on,{as:w,ref:n,className:N(T.root,l),...x,ownerState:y,style:{...c!=="inherit"&&{"--Typography-textAlign":c},...x.style}})}),bn=wt({createStyledComponent:A("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>kt({props:e,name:"MuiStack"})}),rn=(...e)=>{console!=null&&console.warn&&(z(e[0])&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e))},Ce={},ie=(...e)=>{z(e[0])&&Ce[e[0]]||(z(e[0])&&(Ce[e[0]]=new Date),rn(...e))},$e=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Ee=(e,t,n)=>{e.loadNamespaces(t,$e(e,n))},Pe=(e,t,n,r)=>{z(n)&&(n=[n]),n.forEach(s=>{e.options.ns.indexOf(s)<0&&e.options.ns.push(s)}),e.loadLanguages(t,$e(e,r))},sn=(e,t,n={})=>!t.languages||!t.languages.length?(ie("i18n.languages were undefined or empty",t.languages),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(r,s)=>{var o;if(((o=n.bindI18n)==null?void 0:o.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!s(r.isLanguageChangingTo,e))return!1}}),z=e=>typeof e=="string",an=e=>typeof e=="object"&&e!==null,ln=u.createContext();class un{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{var r;(r=this.usedNamespaces)[n]??(r[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const cn=(e,t)=>{const n=u.useRef();return u.useEffect(()=>{n.current=e},[e,t]),n.current},Ie=(e,t,n,r)=>e.getFixedT(t,n,r),pn=(e,t,n,r)=>u.useCallback(Ie(e,t,n,r),[e,t,n,r]),Mn=(e,t={})=>{var f,C,S,j;const{i18n:n}=t,{i18n:r,defaultNS:s}=u.useContext(ln)||{},o=n||r||ht();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new un),!o){ie("You will need to pass in an i18next instance by using initReactI18next");const v=(M,R)=>z(R)?R:an(R)&&z(R.defaultValue)?R.defaultValue:Array.isArray(M)?M[M.length-1]:M,E=[v,{},!1];return E.t=v,E.i18n={},E.ready=!1,E}(f=o.options.react)!=null&&f.wait&&ie("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const a={...ft(),...o.options.react,...t},{useSuspense:c,keyPrefix:l}=a;let i=s||((C=o.options)==null?void 0:C.defaultNS);i=z(i)?[i]:i||["translation"],(j=(S=o.reportNamespaces).addUsedNamespaces)==null||j.call(S,i);const d=(o.isInitialized||o.initializedStoreOnce)&&i.every(v=>sn(v,o,a)),b=pn(o,t.lng||null,a.nsMode==="fallback"?i:i[0],l),h=()=>b,m=()=>Ie(o,t.lng||null,a.nsMode==="fallback"?i:i[0],l),[g,x]=u.useState(h);let y=i.join();t.lng&&(y=`${t.lng}${y}`);const w=cn(y),T=u.useRef(!0);u.useEffect(()=>{const{bindI18n:v,bindI18nStore:E}=a;T.current=!0,!d&&!c&&(t.lng?Pe(o,t.lng,i,()=>{T.current&&x(m)}):Ee(o,i,()=>{T.current&&x(m)})),d&&w&&w!==y&&T.current&&x(m);const M=()=>{T.current&&x(m)};return v&&(o==null||o.on(v,M)),E&&(o==null||o.store.on(E,M)),()=>{T.current=!1,o&&(v==null||v.split(" ").forEach(R=>o.off(R,M))),E&&o&&E.split(" ").forEach(R=>o.store.off(R,M))}},[o,y]),u.useEffect(()=>{T.current&&d&&x(h)},[o,l,d]);const P=[g,o,d];if(P.t=g,P.i18n=o,P.ready=d,d||!d&&!c)return P;throw new Promise(v=>{t.lng?Pe(o,t.lng,i,()=>v()):Ee(o,i,()=>v())})};export{gn as B,mn as P,bn as S,vn as T,be as a,yt as b,Mn as c,xt as d,kt as e,Re as f,J as g,gt as h,mt as i,Be as j,vt as s,yn as t,Nt as u};
