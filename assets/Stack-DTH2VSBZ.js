var at=Object.defineProperty;var it=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var H=(e,t,r)=>it(e,typeof t!="symbol"?t+"":t,r);import{J as st,K as Ve,M as lt,r as c,N as ut,P as ct,Q as pt,S as dt,U as ft,V as ht,D as Ne,s as mt,W as gt,E as yt,u as Be,X as xe,Y as ie,Z as vt,y as bt,$ as St,e as xt,j as D,a0 as Pe,T as de,a1 as fe,B as X,_ as Pt,A as Tt,a2 as kt,a as re,f as Te,a3 as ke,q as he,c as le,a4 as Ct}from"./index-X_hScAMt.js";var Rt=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Mt=st(function(e){return Rt.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),wt=Mt,Et=function(t){return t!=="theme"},Ce=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?wt:Et},Re=function(t,r,n){var o;if(r){var a=r.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},At=!1,_t=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return dt(r,n,o),ft(function(){return ht(r,n,o)}),null},Ot=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,a,i;r!==void 0&&(a=r.label,i=r.target);var l=Re(t,r,n),u=l||Ce(o),s=!u("as");return function(){var p=arguments,m=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&m.push("label:"+a+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{m.push(p[0][0]);for(var S=p.length,v=1;v<S;v++)m.push(p[v],p[0][v])}var h=lt(function(g,b,E){var M=s&&g.as||o,T="",f=[],x=g;if(g.theme==null){x={};for(var y in g)x[y]=g[y];x.theme=c.useContext(ut)}typeof g.className=="string"?T=ct(b.registered,f,g.className):g.className!=null&&(T=g.className+" ");var P=pt(m.concat(f),b.registered,x);T+=b.key+"-"+P.name,i!==void 0&&(T+=" "+i);var _=s&&l===void 0?Ce(M):u,w={};for(var k in g)s&&k==="as"||_(k)&&(w[k]=g[k]);return w.className=T,E&&(w.ref=E),c.createElement(c.Fragment,null,c.createElement(_t,{cache:b,serialized:P,isStringTag:typeof M=="string"}),c.createElement(M,w))});return h.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=m,h.__emotion_forwardProp=l,Object.defineProperty(h,"toString",{value:function(){return i===void 0&&At?"NO_COMPONENT_SELECTOR":"."+i}}),h.withComponent=function(g,b){return e(g,Ve({},r,b,{shouldForwardProp:Re(h,b,!0)})).apply(void 0,m)},h}},Ft=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ue=Ot.bind();Ft.forEach(function(e){ue[e]=ue(e)});/**
 * @mui/styled-engine v6.1.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Vt(e,t){return ue(e,t)}const Nt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Me=e=>e,Bt=()=>{let e=Me;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Me}}},Dt=Bt();function De(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=De(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function O(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=De(e))&&(n&&(n+=" "),n+=t);return n}const It={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Y(e,t,r="Mui"){const n=It[t];return n?`${r}-${n}`:`${Dt.generate(e)}-${t}`}function ne(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=Y(e,o,r)}),n}const Lt=Ne();function se(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function ce(e,t,r){return jt(t)?r:t[e]||t}const Z=Symbol("mui.processed_props");function J(e,t,r){if(Z in e)return e[Z];const n={...e,theme:ce(t,e.theme,r)};return e[Z]=n,n[Z]=n,n}function $t(e){return e?(t,r)=>r[e]:null}function ee(e,t){var n;const r=typeof e=="function"?e(t):e;if(Array.isArray(r))return r.flatMap(o=>ee(o,t));if(Array.isArray(r==null?void 0:r.variants)){const{variants:o,...a}=r;let i=a,l;e:for(let u=0;u<o.length;u+=1){const s=o[u];if(typeof s.props=="function"){if(l??(l={...t,...t.ownerState,ownerState:t.ownerState}),!s.props(l))continue}else for(const p in s.props)if(t[p]!==s.props[p]&&((n=t.ownerState)==null?void 0:n[p])!==s.props[p])continue e;Array.isArray(i)||(i=[i]),typeof s.style=="function"?(l??(l={...t,...t.ownerState,ownerState:t.ownerState}),i.push(s.style(l))):i.push(s.style)}return i}return r}function Ie(e={}){const{themeId:t,defaultTheme:r=Lt,rootShouldForwardProp:n=se,slotShouldForwardProp:o=se}=e,a=l=>mt(J(l,t,r));return a.__mui_systemSx=!0,(l,u={})=>{Nt(l,y=>y.filter(P=>!(P!=null&&P.__mui_systemSx)));const{name:s,slot:p,skipVariantsResolver:m,skipSx:S,overridesResolver:v=$t(zt(p)),...h}=u,g=m!==void 0?m:p&&p!=="Root"&&p!=="root"||!1,b=S||!1;let E,M=se;p==="Root"||p==="root"?M=n:p?M=o:Ut(l)&&(M=void 0);const T=Vt(l,{shouldForwardProp:M,label:E,...h}),f=y=>typeof y=="function"&&y.__emotion_real!==y||gt(y)?P=>ee(y,J(P,t,r)):y,x=(y,...P)=>{let _=f(y);const w=P?P.map(f):[];s&&v&&w.push(C=>{const R=ce(t,C.theme,r);if(!R.components||!R.components[s]||!R.components[s].styleOverrides)return null;const A=R.components[s].styleOverrides,B={},F=J(C,t,r);for(const $ in A)B[$]=ee(A[$],F);return v(C,B)}),s&&!g&&w.push(C=>{var B,F;const R=ce(t,C.theme,r),A=(F=(B=R==null?void 0:R.components)==null?void 0:B[s])==null?void 0:F.variants;return A?ee({variants:A},J(C,t,r)):null}),b||w.push(a);const k=w.length-P.length;if(Array.isArray(y)&&k>0){const C=new Array(k).fill("");_=[...y,...C],_.raw=[...y.raw,...C]}const N=T(_,...w);return l.muiName&&(N.muiName=l.muiName),N};return T.withConfig&&(x.withConfig=T.withConfig),x}}function jt(e){for(const t in e)return!1;return!0}function Ut(e){return typeof e=="string"&&e.charCodeAt(0)>96}function zt(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}const Wt=Ie();function qt(e){const{theme:t,name:r,props:n}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?n:yt(t.components[r].defaultProps,n)}function Le({props:e,name:t,defaultTheme:r,themeId:n}){let o=Be(r);return n&&(o=o[n]||o),qt({theme:o,name:t,props:e})}const Ht=typeof window<"u"?c.useLayoutEffect:c.useEffect;function Xt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Q(e){const t=c.useRef(e);return Ht(()=>{t.current=e}),c.useRef((...r)=>(0,t.current)(...r)).current}function we(...e){return c.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{Xt(r,t)})},e)}const Ee={};function $e(e,t){const r=c.useRef(Ee);return r.current===Ee&&(r.current=e(t)),r}const Yt=[];function Gt(e){c.useEffect(e,Yt)}class me{constructor(){H(this,"currentId",null);H(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});H(this,"disposeEffect",()=>this.clear)}static create(){return new me}start(t,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},t)}}function Kt(){const e=$e(me.create).current;return Gt(e.disposeEffect),e}function Ae(e){try{return e.matches(":focus-visible")}catch{}return!1}function oe(e,t,r=void 0){const n={};for(const o in e){const a=e[o];let i="",l=!0;for(let u=0;u<a.length;u+=1){const s=a[u];s&&(i+=(l===!0?"":" ")+t(s),l=!1,r&&r[s]&&(i+=" "+r[s]))}n[o]=i}return n}const Zt=Ne(),Jt=Wt("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function Qt(e){return Le({props:e,name:"MuiStack",defaultTheme:Zt})}function er(e,t){const r=c.Children.toArray(e).filter(Boolean);return r.reduce((n,o,a)=>(n.push(o),a<r.length-1&&n.push(c.cloneElement(t,{key:`separator-${a}`})),n),[])}const tr=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],rr=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...xe({theme:t},ie({values:e.direction,breakpoints:t.breakpoints.values}),n=>({flexDirection:n}))};if(e.spacing){const n=vt(t),o=Object.keys(t.breakpoints.values).reduce((u,s)=>((typeof e.spacing=="object"&&e.spacing[s]!=null||typeof e.direction=="object"&&e.direction[s]!=null)&&(u[s]=!0),u),{}),a=ie({values:e.direction,base:o}),i=ie({values:e.spacing,base:o});typeof a=="object"&&Object.keys(a).forEach((u,s,p)=>{if(!a[u]){const S=s>0?a[p[s-1]]:"column";a[u]=S}}),r=bt(r,xe({theme:t},i,(u,s)=>e.useFlexGap?{gap:Pe(n,u)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${tr(s?a[s]:e.direction)}`]:Pe(n,u)}}))}return r=St(t.breakpoints,r),r};function nr(e={}){const{createStyledComponent:t=Jt,useThemeProps:r=Qt,componentName:n="MuiStack"}=e,o=()=>oe({root:["root"]},u=>Y(n,u),{}),a=t(rr);return c.forwardRef(function(u,s){const p=r(u),m=xt(p),{component:S="div",direction:v="column",spacing:h=0,divider:g,children:b,className:E,useFlexGap:M=!1,...T}=m,f={direction:v,spacing:h,useFlexGap:M},x=o();return D.jsx(a,{as:S,ownerState:f,ref:s,className:O(x.root,E),...T,children:g?er(b,g):b})})}function or(){const e=Be(fe);return e[de]||e}function ar({props:e,name:t}){return Le({props:e,name:t,defaultTheme:fe,themeId:de})}function ir(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const sr=e=>ir(e)&&e!=="classes",z=Ie({themeId:de,defaultTheme:fe,rootShouldForwardProp:sr}),_e={theme:void 0};function je(e){let t,r;return n=>{let o=t;return(o===void 0||n.theme!==r)&&(_e.theme=n.theme,o=e(_e),t=o,r=n.theme),o}}const Oe=X.createContext(null);function ge(e,t){var r=function(a){return t&&c.isValidElement(a)?t(a):a},n=Object.create(null);return e&&c.Children.map(e,function(o){return o}).forEach(function(o){n[o.key]=r(o)}),n}function lr(e,t){e=e||{},t=t||{};function r(p){return p in t?t[p]:e[p]}var n=Object.create(null),o=[];for(var a in e)a in t?o.length&&(n[a]=o,o=[]):o.push(a);var i,l={};for(var u in t){if(n[u])for(i=0;i<n[u].length;i++){var s=n[u][i];l[n[u][i]]=r(s)}l[u]=r(u)}for(i=0;i<o.length;i++)l[o[i]]=r(o[i]);return l}function U(e,t,r){return r[t]!=null?r[t]:e.props[t]}function ur(e,t){return ge(e.children,function(r){return c.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:U(r,"appear",e),enter:U(r,"enter",e),exit:U(r,"exit",e)})})}function cr(e,t,r){var n=ge(e.children),o=lr(t,n);return Object.keys(o).forEach(function(a){var i=o[a];if(c.isValidElement(i)){var l=a in t,u=a in n,s=t[a],p=c.isValidElement(s)&&!s.props.in;u&&(!l||p)?o[a]=c.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:U(i,"exit",e),enter:U(i,"enter",e)}):!u&&l&&!p?o[a]=c.cloneElement(i,{in:!1}):u&&l&&c.isValidElement(s)&&(o[a]=c.cloneElement(i,{onExited:r.bind(null,i),in:s.props.in,exit:U(i,"exit",e),enter:U(i,"enter",e)}))}}),o}var pr=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},dr={component:"div",childFactory:function(t){return t}},ye=function(e){Pt(t,e);function t(n,o){var a;a=e.call(this,n,o)||this;var i=a.handleExited.bind(kt(a));return a.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},a}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,a){var i=a.children,l=a.handleExited,u=a.firstRender;return{children:u?ur(o,l):cr(o,i,l),firstRender:!1}},r.handleExited=function(o,a){var i=ge(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(a),this.mounted&&this.setState(function(l){var u=Ve({},l.children);return delete u[o.key],{children:u}}))},r.render=function(){var o=this.props,a=o.component,i=o.childFactory,l=Tt(o,["component","childFactory"]),u=this.state.contextValue,s=pr(this.state.children).map(i);return delete l.appear,delete l.enter,delete l.exit,a===null?X.createElement(Oe.Provider,{value:u},s):X.createElement(Oe.Provider,{value:u},X.createElement(a,l,s))},t}(X.Component);ye.propTypes={};ye.defaultProps=dr;function fr(e){return Y("MuiPaper",e)}ne("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const hr=e=>{const{square:t,elevation:r,variant:n,classes:o}=e,a={root:["root",n,!t&&"rounded",n==="elevation"&&`elevation${r}`]};return oe(a,fr,o)},mr=z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,r.variant==="elevation"&&t[`elevation${r.elevation}`]]}})(je(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),jr=c.forwardRef(function(t,r){var v;const n=re({props:t,name:"MuiPaper"}),o=or(),{className:a,component:i="div",elevation:l=1,square:u=!1,variant:s="elevation",...p}=n,m={...n,component:i,elevation:l,square:u,variant:s},S=hr(m);return D.jsx(mr,{as:i,ownerState:m,className:O(S.root,a),ref:r,...p,style:{...s==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[l],...o.vars&&{"--Paper-overlay":(v=o.vars.overlays)==null?void 0:v[l]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Te("#fff",ke(l))}, ${Te("#fff",ke(l))})`}},...p.style}})});class te{constructor(){H(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new te}static use(){const t=$e(te.create).current,[r,n]=c.useState(!1);return t.shouldMount=r,t.setShouldMount=n,c.useEffect(t.mountEffect,[r]),t}mount(){return this.mounted||(this.mounted=yr(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.start(...t)})}stop(...t){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.stop(...t)})}pulsate(...t){this.mount().then(()=>{var r;return(r=this.ref.current)==null?void 0:r.pulsate(...t)})}}function gr(){return te.use()}function yr(){let e,t;const r=new Promise((n,o)=>{e=n,t=o});return r.resolve=e,r.reject=t,r}function vr(e){const{className:t,classes:r,pulsate:n=!1,rippleX:o,rippleY:a,rippleSize:i,in:l,onExited:u,timeout:s}=e,[p,m]=c.useState(!1),S=O(t,r.ripple,r.rippleVisible,n&&r.ripplePulsate),v={width:i,height:i,top:-(i/2)+a,left:-(i/2)+o},h=O(r.child,p&&r.childLeaving,n&&r.childPulsate);return!l&&!p&&m(!0),c.useEffect(()=>{if(!l&&u!=null){const g=setTimeout(u,s);return()=>{clearTimeout(g)}}},[u,l,s]),D.jsx("span",{className:S,style:v,children:D.jsx("span",{className:h})})}const V=ne("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),pe=550,br=80,Sr=he`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,xr=he`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Pr=he`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Tr=z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),kr=z(vr,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${V.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Sr};
    animation-duration: ${pe}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${V.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${V.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${V.childLeaving} {
    opacity: 0;
    animation-name: ${xr};
    animation-duration: ${pe}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${V.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pr};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Cr=c.forwardRef(function(t,r){const n=re({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:a={},className:i,...l}=n,[u,s]=c.useState([]),p=c.useRef(0),m=c.useRef(null);c.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const S=c.useRef(!1),v=Kt(),h=c.useRef(null),g=c.useRef(null),b=c.useCallback(f=>{const{pulsate:x,rippleX:y,rippleY:P,rippleSize:_,cb:w}=f;s(k=>[...k,D.jsx(kr,{classes:{ripple:O(a.ripple,V.ripple),rippleVisible:O(a.rippleVisible,V.rippleVisible),ripplePulsate:O(a.ripplePulsate,V.ripplePulsate),child:O(a.child,V.child),childLeaving:O(a.childLeaving,V.childLeaving),childPulsate:O(a.childPulsate,V.childPulsate)},timeout:pe,pulsate:x,rippleX:y,rippleY:P,rippleSize:_},p.current)]),p.current+=1,m.current=w},[a]),E=c.useCallback((f={},x={},y=()=>{})=>{const{pulsate:P=!1,center:_=o||x.pulsate,fakeElement:w=!1}=x;if((f==null?void 0:f.type)==="mousedown"&&S.current){S.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(S.current=!0);const k=w?null:g.current,N=k?k.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,R,A;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(N.width/2),R=Math.round(N.height/2);else{const{clientX:B,clientY:F}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(B-N.left),R=Math.round(F-N.top)}if(_)A=Math.sqrt((2*N.width**2+N.height**2)/3),A%2===0&&(A+=1);else{const B=Math.max(Math.abs((k?k.clientWidth:0)-C),C)*2+2,F=Math.max(Math.abs((k?k.clientHeight:0)-R),R)*2+2;A=Math.sqrt(B**2+F**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{b({pulsate:P,rippleX:C,rippleY:R,rippleSize:A,cb:y})},v.start(br,()=>{h.current&&(h.current(),h.current=null)})):b({pulsate:P,rippleX:C,rippleY:R,rippleSize:A,cb:y})},[o,b,v]),M=c.useCallback(()=>{E({},{pulsate:!0})},[E]),T=c.useCallback((f,x)=>{if(v.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,v.start(0,()=>{T(f,x)});return}h.current=null,s(y=>y.length>0?y.slice(1):y),m.current=x},[v]);return c.useImperativeHandle(r,()=>({pulsate:M,start:E,stop:T}),[M,E,T]),D.jsx(Tr,{className:O(V.root,a.root,i),ref:g,...l,children:D.jsx(ye,{component:null,exit:!0,children:u})})});function Rr(e){return Y("MuiButtonBase",e)}const Mr=ne("MuiButtonBase",["root","disabled","focusVisible"]),wr=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:n,classes:o}=e,i=oe({root:["root",t&&"disabled",r&&"focusVisible"]},Rr,o);return r&&n&&(i.root+=` ${n}`),i},Er=z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mr.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ur=c.forwardRef(function(t,r){const n=re({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:a=!1,children:i,className:l,component:u="button",disabled:s=!1,disableRipple:p=!1,disableTouchRipple:m=!1,focusRipple:S=!1,focusVisibleClassName:v,LinkComponent:h="a",onBlur:g,onClick:b,onContextMenu:E,onDragLeave:M,onFocus:T,onFocusVisible:f,onKeyDown:x,onKeyUp:y,onMouseDown:P,onMouseLeave:_,onMouseUp:w,onTouchEnd:k,onTouchMove:N,onTouchStart:C,tabIndex:R=0,TouchRippleProps:A,touchRippleRef:B,type:F,...$}=n,W=c.useRef(null),I=gr(),Ue=we(I.ref,B),[j,G]=c.useState(!1);s&&j&&G(!1),c.useImperativeHandle(o,()=>({focusVisible:()=>{G(!0),W.current.focus()}}),[]);const ze=I.shouldMount&&!p&&!s;c.useEffect(()=>{j&&S&&!p&&I.pulsate()},[p,S,j,I]);function L(d,be,ot=m){return Q(Se=>(be&&be(Se),ot||I[d](Se),!0))}const We=L("start",P),qe=L("stop",E),He=L("stop",M),Xe=L("stop",w),Ye=L("stop",d=>{j&&d.preventDefault(),_&&_(d)}),Ge=L("start",C),Ke=L("stop",k),Ze=L("stop",N),Je=L("stop",d=>{Ae(d.target)||G(!1),g&&g(d)},!1),Qe=Q(d=>{W.current||(W.current=d.currentTarget),Ae(d.target)&&(G(!0),f&&f(d)),T&&T(d)}),ae=()=>{const d=W.current;return u&&u!=="button"&&!(d.tagName==="A"&&d.href)},et=Q(d=>{S&&!d.repeat&&j&&d.key===" "&&I.stop(d,()=>{I.start(d)}),d.target===d.currentTarget&&ae()&&d.key===" "&&d.preventDefault(),x&&x(d),d.target===d.currentTarget&&ae()&&d.key==="Enter"&&!s&&(d.preventDefault(),b&&b(d))}),tt=Q(d=>{S&&d.key===" "&&j&&!d.defaultPrevented&&I.stop(d,()=>{I.pulsate(d)}),y&&y(d),b&&d.target===d.currentTarget&&ae()&&d.key===" "&&!d.defaultPrevented&&b(d)});let K=u;K==="button"&&($.href||$.to)&&(K=h);const q={};K==="button"?(q.type=F===void 0?"button":F,q.disabled=s):(!$.href&&!$.to&&(q.role="button"),s&&(q["aria-disabled"]=s));const rt=we(r,W),ve={...n,centerRipple:a,component:u,disabled:s,disableRipple:p,disableTouchRipple:m,focusRipple:S,tabIndex:R,focusVisible:j},nt=wr(ve);return D.jsxs(Er,{as:K,className:O(nt.root,l),ownerState:ve,onBlur:Je,onClick:b,onContextMenu:qe,onFocus:Qe,onKeyDown:et,onKeyUp:tt,onMouseDown:We,onMouseLeave:Ye,onMouseUp:Xe,onDragLeave:He,onTouchEnd:Ke,onTouchMove:Ze,onTouchStart:Ge,ref:rt,tabIndex:s?-1:R,type:F,...q,...$,children:[i,ze?D.jsx(Cr,{ref:Ue,center:a,...A}):null]})});function Ar(e){return typeof e.main=="string"}function _r(e,t=[]){if(!Ar(e))return!1;for(const r of t)if(!e.hasOwnProperty(r)||typeof e[r]!="string")return!1;return!0}function Or(e=[]){return([,t])=>t&&_r(t,e)}function Fr(e){return Y("MuiTypography",e)}const zr=ne("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),Vr={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},Nr=Ct(),Br=e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,l={root:["root",a,e.align!=="inherit"&&`align${le(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return oe(l,Fr,i)},Dr=z("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${le(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(je(({theme:e})=>{var t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([r,n])=>r!=="inherit"&&n&&typeof n=="object").map(([r,n])=>({props:{variant:r},style:n})),...Object.entries(e.palette).filter(Or()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})),...Object.entries(((t=e.palette)==null?void 0:t.text)||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${le(r)}`},style:{color:(e.vars||e).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}})),Fe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Wr=c.forwardRef(function(t,r){const{color:n,...o}=re({props:t,name:"MuiTypography"}),a=!Vr[n],i=Nr({...o,...a&&{color:n}}),{align:l="inherit",className:u,component:s,gutterBottom:p=!1,noWrap:m=!1,paragraph:S=!1,variant:v="body1",variantMapping:h=Fe,...g}=i,b={...i,align:l,color:n,className:u,component:s,gutterBottom:p,noWrap:m,paragraph:S,variant:v,variantMapping:h},E=s||(S?"p":h[v]||Fe[v])||"span",M=Br(b);return D.jsx(Dr,{as:E,ref:r,className:O(M.root,u),...g,ownerState:b,style:{...l!=="inherit"&&{"--Typography-textAlign":l},...g.style}})}),qr=nr({createStyledComponent:z("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>ar({props:e,name:"MuiStack"})});export{Ur as B,Dt as C,jr as P,qr as S,Wr as T,ne as a,z as b,O as c,Or as d,oe as e,we as f,Y as g,Ht as h,Kt as i,ir as j,ar as k,Oe as l,je as m,Xt as n,Q as o,Wt as p,Le as q,sr as r,Vt as s,zr as t,or as u};
