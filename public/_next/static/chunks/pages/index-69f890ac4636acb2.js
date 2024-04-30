(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6758)}])},6758:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(2729),a=n(6811),i=n(7294),o=n(687),l=n(6608),c=n(9894),s=n(917),d=n(9522),m=n(6445),u=n(5877),g=n(1042),h=n(4730),f=n(4152),p=n(3967),x=n.n(p);let b={size:{type:"enum",values:["1","2","3","4"],default:"4",responsive:!0},display:{type:"enum",values:["none","block"],default:void 0,responsive:!0}};var _=n(3843),v=n(134),y=n(6776);let k=i.forwardRef((e,t)=>{let{rest:n,...r}=(0,_.FY)(e),{rest:a,...o}=(0,v.F8)(n),{children:l,className:c,size:s=b.size.default,display:d=b.display.default,...m}=a;return i.createElement("div",{...m,ref:t,className:x()("rt-Container",c,(0,y.g)(s,"rt-r-size"),(0,y.g)(d,"rt-r-display"),(0,v.yt)(o),(0,_.we)(r))},i.createElement("div",{className:"rt-ContainerInner"},l))});k.displayName="Container";var Z=n(3954),F=n(5059),j=n(1628),S=n(3179),w=n(296),B=n(5432),C=n(5893),N=(0,F.G)(function(e,t){let n=(0,j.mq)("Heading",e),{className:r,...a}=(0,S.Lr)(e);return(0,C.jsx)(w.m.h2,{ref:t,className:(0,B.cx)("chakra-heading",e.className),...a,__css:n})});N.displayName="Heading";var StackItem=e=>(0,C.jsx)(w.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,B.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}StackItem.displayName="StackItem",Object.freeze(["base","sm","md","lg","xl","2xl"]);var I="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[I]:mapResponsive(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}}function getValidChildren(e){return i.Children.toArray(e).filter(e=>(0,i.isValidElement)(e))}var E=(0,F.G)((e,t)=>{let{isInline:n,direction:r,align:a,justify:o,spacing:l="0.5rem",wrap:c,children:s,divider:d,className:m,shouldWrapChildren:u,...g}=e,h=n?"row":null!=r?r:"column",f=(0,i.useMemo)(()=>getStackStyles({direction:h,spacing:l}),[h,l]),p=(0,i.useMemo)(()=>getDividerStyles({spacing:l,direction:h}),[l,h]),x=!!d,b=!u&&!x,_=(0,i.useMemo)(()=>{let e=getValidChildren(s);return b?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,a=n+1===e.length,o=(0,C.jsx)(StackItem,{children:t},r),l=u?o:t;if(!x)return l;let c=(0,i.cloneElement)(d,{__css:p});return(0,C.jsxs)(i.Fragment,{children:[l,a?null:c]},r)})},[d,p,x,b,u,s]),v=(0,B.cx)("chakra-stack",m);return(0,C.jsx)(w.m.div,{ref:t,display:"flex",alignItems:a,justifyContent:o,flexDirection:f.flexDirection,flexWrap:c,className:v,__css:x?{}:{[I]:f[I]},...g,children:_})});E.displayName="Stack";var z=(0,F.G)((e,t)=>(0,C.jsx)(E,{align:"center",...e,direction:"row",ref:t}));z.displayName="HStack";var X=(0,F.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:a,...i}=e;return(0,C.jsx)("img",{width:n,height:r,ref:t,alt:a,...i})});X.displayName="NativeImage";var W=n(6245);function useImage(e){let{loading:t,src:n,srcSet:r,onLoad:a,onError:o,crossOrigin:l,sizes:c,ignoreFallback:s}=e,[d,m]=(0,i.useState)("pending");(0,i.useEffect)(()=>{m(n?"loading":"pending")},[n]);let u=(0,i.useRef)(),g=(0,i.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{flush(),m("loaded"),null==a||a(e)},e.onerror=e=>{flush(),m("failed"),null==o||o(e)},u.current=e},[n,l,r,c,a,o,t]),flush=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,W.G)(()=>{if(!s)return"loading"===d&&g(),()=>{flush()}},[d,g,s]),s?"loaded":d}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t;function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var O=(0,F.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:a,srcSet:i,align:o,fit:l,loading:c,ignoreFallback:s,crossOrigin:d,fallbackStrategy:m="beforeLoadOrError",referrerPolicy:u,...g}=e,h=null!=c||s||!(void 0!==n||void 0!==r),f=useImage({...e,crossOrigin:d,ignoreFallback:h}),p=shouldShowFallbackImage(f,m),x={ref:t,objectFit:l,objectPosition:o,...h?g:omit(g,["onError","onLoad"])};return p?r||(0,C.jsx)(w.m.img,{as:X,className:"chakra-image__placeholder",src:n,...x}):(0,C.jsx)(w.m.img,{as:X,src:a,srcSet:i,crossOrigin:d,loading:c,referrerPolicy:u,className:"chakra-image",...x})});O.displayName="Image";var D=n(9008),R=n.n(D);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,i.useContext)(o.DR);return(0,a.tZ)(i.Fragment,{children:(0,l.oA)(t.length>=2)?(0,a.tZ)(i.Fragment,{children:(0,a.tZ)(d.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,a.BX)(d.Vq.Content,{children:[(0,a.tZ)(d.Vq.Title,{children:"Connection Error"}),(0,a.BX)(m.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,l.LH)(Z.Ks).href]})]})})}):(0,a.tZ)(i.Fragment,{})})}function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,i.useContext)(o.DR);return(0,a.tZ)(i.Fragment,{children:(0,l.oA)(t.length>0)?(0,a.tZ)(i.Fragment,{children:(0,a.tZ)(c.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(L," 1s infinite")},size:32})}):(0,a.tZ)(i.Fragment,{})})}let L=(0,s.F4)(_templateObject());function Component(){return(0,a.BX)(i.Fragment,{children:[(0,a.BX)(i.Fragment,{children:[(0,a.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,a.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,a.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,a.BX)(i.Fragment,{children:[(0,a.BX)(u.k,{align:"start",css:{position:"fixed",top:"0px",backgroundColor:"lightgray",padding:"1em",height:"4em",width:"100%",zIndex:"5"},direction:"row",gap:"2",children:[(0,a.BX)(u.k,{align:"start",direction:"row",gap:"2",children:[(0,a.tZ)("img",{css:{width:"2em"},src:"/logo.jpg"}),(0,a.tZ)(g.X,{css:{fontSize:"2em"},children:"Autana Muebles"})]}),(0,a.tZ)(u.k,{css:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}),(0,a.BX)(h.h_.Root,{children:[(0,a.tZ)(h.h_.Trigger,{children:(0,a.tZ)(f.z,{children:"Menu"})}),(0,a.BX)(h.h_.Content,{children:[(0,a.tZ)(h.h_.Item,{css:{href:"/dashboard"},children:"Dashboard"}),(0,a.tZ)(h.h_.Separator,{}),(0,a.tZ)(h.h_.Item,{children:"Galeria"}),(0,a.tZ)(h.h_.Item,{children:"Contactanos"})]})]})]}),(0,a.tZ)(k,{css:{paddingTop:"6em",maxWidth:"60em"},children:(0,a.tZ)(k,{children:(0,a.BX)(u.k,{align:"start",direction:"column",gap:"2",children:[(0,a.tZ)(N,{sx:{maxW:"2xl"},children:"Fabricantes de muebles en melamina"}),(0,a.BX)(z,{children:[(0,a.tZ)(N,{sx:{maxW:"2xl"},children:"Modelamos en 3D"}),(0,a.tZ)("img",{alt:"3D",css:{boxSize:"300px",objectFit:"cover"},src:"/tekaart.jpg"})]}),(0,a.BX)(z,{children:[(0,a.tZ)(O,{alt:"cocina de frente",src:"/inclinado.jpg",sx:{boxSize:"300px",objectFit:"cover"}}),(0,a.tZ)(O,{alt:"cocina diagonal",src:"/bar.jpg",sx:{boxSize:"300px",objectFit:"cover"}}),(0,a.tZ)(N,{sx:{maxW:"2xl"},children:"Muebles a medida y proyectos personalizados."})]}),(0,a.BX)(z,{children:[(0,a.tZ)(N,{sx:{maxW:"2xl"},children:"Remodelaci\xf3n de cocinas"}),(0,a.tZ)(O,{alt:"cocina de frente",src:"/cocinareal.jpg",sx:{boxSize:"300px",objectFit:"cover"}}),(0,a.tZ)(O,{alt:"cocina diagonal",src:"/cocina22.jpg",sx:{boxSize:"300px",objectFit:"cover"}})]})]})})})]}),(0,a.BX)(R(),{children:[(0,a.tZ)("title",{children:"Autana Web | Index"}),(0,a.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}}},function(e){e.O(0,[689,763,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);