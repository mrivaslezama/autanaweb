"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10338],{95269:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(67294),a=r(93967),l=r.n(a),o=r(88426);let i={size:{type:"enum",values:["1","2","3","4","5"],default:"1",responsive:!0},variant:{type:"enum",values:["surface","classic","ghost"],default:"surface"}};var c=r(23843),s=r(6776);let d=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,c.FY)(e),{asChild:d,children:u,className:f,size:m=i.size.default,variant:p=i.variant.default,...h}=r,v=d?o.g7:"div";function getChild(){let e=n.Children.only(u);return n.cloneElement(e,{children:n.createElement("div",{className:"rt-CardInner"},e.props.children)})}return n.createElement(v,{ref:t,...h,className:l()("rt-reset","rt-Card",f,(0,s.g)(m,"rt-r-size"),`rt-variant-${p}`,(0,c.we)(a))},d?getChild():n.createElement("div",{className:"rt-CardInner"},u))});d.displayName="Card"},6174:function(e,t,r){r.d(t,{Ph:function(){return eM}});var n=r(67294),a=r(93967),l=r.n(a),o=r(87462),i=r(73935),c=r(42614),s=r(36206),d=r(65936),u=r(28771),f=r(25360),m=r(78990),p=r(46063),h=r(27552),v=r(95420),g=r(91276),b=r(53990),w=r(42651),y=r(75320),S=r(88426),E=r(79698),x=r(77342),C=r(9981),k=r(57898),N=r(96219),I=r(23541),$=r(6223);let R=[" ","Enter","ArrowUp","ArrowDown"],_=[" ","Enter"],P="Select",[T,M,D]=(0,d.B)(P),[V,W]=(0,f.b)(P,[D,b.D7]),O=(0,b.D7)(),[L,B]=V(P),[A,j]=V(P),Z=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,disabled:a=!1,...l}=e,i=O(r),c=B("SelectTrigger",r),d=c.disabled||a,f=(0,u.e)(t,c.onTriggerChange),m=M(r),[p,h,v]=$cc7e05a45900e73f$var$useTypeaheadSearch(e=>{let t=m().filter(e=>!e.disabled),r=t.find(e=>e.value===c.value),n=$cc7e05a45900e73f$var$findNextItem(t,e,r);void 0!==n&&c.onValueChange(n.value)}),handleOpen=()=>{d||(c.onOpenChange(!0),v())};return(0,n.createElement)(b.ee,(0,o.Z)({asChild:!0},i),(0,n.createElement)(y.WV.button,(0,o.Z)({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":$cc7e05a45900e73f$var$shouldShowPlaceholder(c.value)?"":void 0},l,{ref:f,onClick:(0,s.M)(l.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,s.M)(l.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(handleOpen(),c.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,s.M)(l.onKeyDown,e=>{let t=""!==p.current,r=e.ctrlKey||e.altKey||e.metaKey;r||1!==e.key.length||h(e.key),(!t||" "!==e.key)&&R.includes(e.key)&&(handleOpen(),e.preventDefault())})})))}),H=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,className:a,style:l,children:i,placeholder:c="",...s}=e,d=B("SelectValue",r),{onValueNodeHasChildrenChange:f}=d,m=void 0!==i,p=(0,u.e)(t,d.onValueNodeChange);return(0,C.b)(()=>{f(m)},[f,m]),(0,n.createElement)(y.WV.span,(0,o.Z)({},s,{ref:p,style:{pointerEvents:"none"}}),$cc7e05a45900e73f$var$shouldShowPlaceholder(d.value)?(0,n.createElement)(n.Fragment,null,c):i)}),F=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,children:a,...l}=e;return(0,n.createElement)(y.WV.span,(0,o.Z)({"aria-hidden":!0},l,{ref:t}),a||"▼")}),z="SelectContent",K=(0,n.forwardRef)((e,t)=>{let r=B(z,e.__scopeSelect),[a,l]=(0,n.useState)();return((0,C.b)(()=>{l(new DocumentFragment)},[]),r.open)?(0,n.createElement)(q,(0,o.Z)({},e,{ref:t})):a?(0,i.createPortal)((0,n.createElement)(G,{scope:e.__scopeSelect},(0,n.createElement)(T.Slot,{scope:e.__scopeSelect},(0,n.createElement)("div",null,e.children))),a):null}),[G,U]=V(z),q=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,position:a="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:i,onPointerDownOutside:c,side:d,sideOffset:f,align:m,alignOffset:g,arrowPadding:b,collisionBoundary:w,collisionPadding:y,sticky:E,hideWhenDetached:x,avoidCollisions:C,...k}=e,N=B(z,r),[R,_]=(0,n.useState)(null),[P,T]=(0,n.useState)(null),D=(0,u.e)(t,e=>_(e)),[V,W]=(0,n.useState)(null),[O,L]=(0,n.useState)(null),A=M(r),[j,Z]=(0,n.useState)(!1),H=(0,n.useRef)(!1);(0,n.useEffect)(()=>{if(R)return(0,I.Ry)(R)},[R]),(0,h.EW)();let F=(0,n.useCallback)(e=>{let[t,...r]=A().map(e=>e.ref.current),[n]=r.slice(-1),a=document.activeElement;for(let r of e)if(r===a||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&P&&(P.scrollTop=0),r===n&&P&&(P.scrollTop=P.scrollHeight),null==r||r.focus(),document.activeElement!==a))return},[A,P]),K=(0,n.useCallback)(()=>F([V,R]),[F,V,R]);(0,n.useEffect)(()=>{j&&K()},[j,K]);let{onOpenChange:U,triggerPointerDownPosRef:q}=N;(0,n.useEffect)(()=>{if(R){let e={x:0,y:0},handlePointerMove=t=>{var r,n,a,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(r=null===(n=q.current)||void 0===n?void 0:n.x)&&void 0!==r?r:0)),y:Math.abs(Math.round(t.pageY)-(null!==(a=null===(l=q.current)||void 0===l?void 0:l.y)&&void 0!==a?a:0))}},handlePointerUp=t=>{e.x<=10&&e.y<=10?t.preventDefault():R.contains(t.target)||U(!1),document.removeEventListener("pointermove",handlePointerMove),q.current=null};return null!==q.current&&(document.addEventListener("pointermove",handlePointerMove),document.addEventListener("pointerup",handlePointerUp,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",handlePointerMove),document.removeEventListener("pointerup",handlePointerUp,{capture:!0})}}},[R,U,q]),(0,n.useEffect)(()=>{let close=()=>U(!1);return window.addEventListener("blur",close),window.addEventListener("resize",close),()=>{window.removeEventListener("blur",close),window.removeEventListener("resize",close)}},[U]);let[Q,J]=$cc7e05a45900e73f$var$useTypeaheadSearch(e=>{let t=A().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=$cc7e05a45900e73f$var$findNextItem(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=(0,n.useCallback)((e,t,r)=>{let n=!H.current&&!r,a=void 0!==N.value&&N.value===t;(a||n)&&(W(e),n&&(H.current=!0))},[N.value]),et=(0,n.useCallback)(()=>null==R?void 0:R.focus(),[R]),er=(0,n.useCallback)((e,t,r)=>{let n=!H.current&&!r,a=void 0!==N.value&&N.value===t;(a||n)&&L(e)},[N.value]),en="popper"===a?X:Y,ea=en===X?{side:d,sideOffset:f,align:m,alignOffset:g,arrowPadding:b,collisionBoundary:w,collisionPadding:y,sticky:E,hideWhenDetached:x,avoidCollisions:C}:{};return(0,n.createElement)(G,{scope:r,content:R,viewport:P,onViewportChange:T,itemRefCallback:ee,selectedItem:V,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:K,selectedItemText:O,position:a,isPositioned:j,searchRef:Q},(0,n.createElement)($.Z,{as:S.g7,allowPinchZoom:!0},(0,n.createElement)(v.M,{asChild:!0,trapped:N.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,s.M)(l,e=>{var t;null===(t=N.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,n.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>N.onOpenChange(!1)},(0,n.createElement)(en,(0,o.Z)({role:"listbox",id:N.contentId,"data-state":N.open?"open":"closed",dir:N.dir,onContextMenu:e=>e.preventDefault()},k,ea,{onPlaced:()=>Z(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:(0,s.M)(k.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=A().filter(e=>!e.disabled),r=t.map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(r=r.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let t=e.target,n=r.indexOf(t);r=r.slice(n+1)}setTimeout(()=>F(r)),e.preventDefault()}})}))))))}),Y=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,onPlaced:a,...l}=e,i=B(z,r),s=U(z,r),[d,f]=(0,n.useState)(null),[m,p]=(0,n.useState)(null),h=(0,u.e)(t,e=>p(e)),v=M(r),g=(0,n.useRef)(!1),b=(0,n.useRef)(!0),{viewport:w,selectedItem:S,selectedItemText:E,focusSelectedItem:x}=s,k=(0,n.useCallback)(()=>{if(i.trigger&&i.valueNode&&d&&m&&w&&S&&E){let e=i.trigger.getBoundingClientRect(),t=m.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=E.getBoundingClientRect();if("rtl"!==i.dir){let a=n.left-t.left,l=r.left-a,o=e.left-l,i=e.width+o,s=Math.max(i,t.width),u=window.innerWidth-10,f=(0,c.u)(l,[10,u-s]);d.style.minWidth=i+"px",d.style.left=f+"px"}else{let a=t.right-n.right,l=window.innerWidth-r.right-a,o=window.innerWidth-e.right-l,i=e.width+o,s=Math.max(i,t.width),u=window.innerWidth-10,f=(0,c.u)(l,[10,u-s]);d.style.minWidth=i+"px",d.style.right=f+"px"}let l=v(),o=window.innerHeight-20,s=w.scrollHeight,u=window.getComputedStyle(m),f=parseInt(u.borderTopWidth,10),p=parseInt(u.paddingTop,10),h=parseInt(u.borderBottomWidth,10),b=parseInt(u.paddingBottom,10),y=f+p+s+b+h,x=Math.min(5*S.offsetHeight,y),C=window.getComputedStyle(w),k=parseInt(C.paddingTop,10),N=parseInt(C.paddingBottom,10),I=e.top+e.height/2-10,$=S.offsetHeight/2,R=S.offsetTop+$,_=f+p+R;if(_<=I){let e=S===l[l.length-1].ref.current;d.style.bottom="0px";let t=m.clientHeight-w.offsetTop-w.offsetHeight;d.style.height=_+Math.max(o-I,$+(e?N:0)+t+h)+"px"}else{let e=S===l[0].ref.current;d.style.top="0px";let t=Math.max(I,f+w.offsetTop+(e?k:0)+$);d.style.height=t+(y-_)+"px",w.scrollTop=_-I+w.offsetTop}d.style.margin="10px 0",d.style.minHeight=x+"px",d.style.maxHeight=o+"px",null==a||a(),requestAnimationFrame(()=>g.current=!0)}},[v,i.trigger,i.valueNode,d,m,w,S,E,i.dir,a]);(0,C.b)(()=>k(),[k]);let[N,I]=(0,n.useState)();(0,C.b)(()=>{m&&I(window.getComputedStyle(m).zIndex)},[m]);let $=(0,n.useCallback)(e=>{e&&!0===b.current&&(k(),null==x||x(),b.current=!1)},[k,x]);return(0,n.createElement)(Q,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:g,onScrollButtonChange:$},(0,n.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N}},(0,n.createElement)(y.WV.div,(0,o.Z)({},l,{ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),X=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,align:a="start",collisionPadding:l=10,...i}=e,c=O(r);return(0,n.createElement)(b.VY,(0,o.Z)({},c,i,{ref:t,align:a,collisionPadding:l,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Q,J]=V(z,{}),ee="SelectViewport",et=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,...a}=e,l=U(ee,r),i=J(ee,r),c=(0,u.e)(t,l.onViewportChange),d=(0,n.useRef)(0);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(T.Slot,{scope:r},(0,n.createElement)(y.WV.div,(0,o.Z)({"data-radix-select-viewport":"",role:"presentation"},a,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:(0,s.M)(a.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=i;if(null!=n&&n.current&&r){let e=Math.abs(d.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,a=parseFloat(r.style.minHeight),l=parseFloat(r.style.height),o=Math.max(a,l);if(o<n){let a=o+e,l=Math.min(n,a),i=a-l;r.style.height=l+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}d.current=t.scrollTop})}))))}),[er,en]=V("SelectGroup"),ea=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,...a}=e,l=(0,g.M)();return(0,n.createElement)(er,{scope:r,id:l},(0,n.createElement)(y.WV.div,(0,o.Z)({role:"group","aria-labelledby":l},a,{ref:t})))}),el=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,...a}=e,l=en("SelectLabel",r);return(0,n.createElement)(y.WV.div,(0,o.Z)({id:l.id},a,{ref:t}))}),eo="SelectItem",[ei,ec]=V(eo),es=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,value:a,disabled:l=!1,textValue:i,...c}=e,d=B(eo,r),f=U(eo,r),m=d.value===a,[p,h]=(0,n.useState)(null!=i?i:""),[v,b]=(0,n.useState)(!1),w=(0,u.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,a,l)}),S=(0,g.M)(),handleSelect=()=>{l||(d.onValueChange(a),d.onOpenChange(!1))};if(""===a)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,n.createElement)(ei,{scope:r,value:a,disabled:l,textId:S,isSelected:m,onItemTextChange:(0,n.useCallback)(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[])},(0,n.createElement)(T.ItemSlot,{scope:r,value:a,disabled:l,textValue:p},(0,n.createElement)(y.WV.div,(0,o.Z)({role:"option","aria-labelledby":S,"data-highlighted":v?"":void 0,"aria-selected":m&&v,"data-state":m?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},c,{ref:w,onFocus:(0,s.M)(c.onFocus,()=>b(!0)),onBlur:(0,s.M)(c.onBlur,()=>b(!1)),onPointerUp:(0,s.M)(c.onPointerUp,handleSelect),onPointerMove:(0,s.M)(c.onPointerMove,e=>{if(l){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,s.M)(c.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,s.M)(c.onKeyDown,e=>{var t;let r=(null===(t=f.searchRef)||void 0===t?void 0:t.current)!=="";r&&" "===e.key||(_.includes(e.key)&&handleSelect()," "===e.key&&e.preventDefault())})}))))}),ed="SelectItemText",eu=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,className:a,style:l,...c}=e,s=B(ed,r),d=U(ed,r),f=ec(ed,r),m=j(ed,r),[p,h]=(0,n.useState)(null),v=(0,u.e)(t,e=>h(e),f.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,f.value,f.disabled)}),g=null==p?void 0:p.textContent,b=(0,n.useMemo)(()=>(0,n.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},g),[f.disabled,f.value,g]),{onNativeOptionAdd:w,onNativeOptionRemove:S}=m;return(0,C.b)(()=>(w(b),()=>S(b)),[w,S,b]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(y.WV.span,(0,o.Z)({id:f.textId},c,{ref:v})),f.isSelected&&s.valueNode&&!s.valueNodeHasChildren?(0,i.createPortal)(c.children,s.valueNode):null)}),ef=(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,...a}=e,l=ec("SelectItemIndicator",r);return l.isSelected?(0,n.createElement)(y.WV.span,(0,o.Z)({"aria-hidden":!0},a,{ref:t})):null}),em=((e,t)=>{let{__scopeSelect:r,onAutoScroll:a,...l}=e,i=U("SelectScrollButton",r),c=(0,n.useRef)(null),d=M(r),u=(0,n.useCallback)(()=>{null!==c.current&&(window.clearInterval(c.current),c.current=null)},[]);return(0,n.useEffect)(()=>()=>u(),[u]),(0,C.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,n.createElement)(y.WV.div,(0,o.Z)({"aria-hidden":!0},l,{ref:t,style:{flexShrink:0,...l.style},onPointerDown:(0,s.M)(l.onPointerDown,()=>{null===c.current&&(c.current=window.setInterval(a,50))}),onPointerMove:(0,s.M)(l.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===c.current&&(c.current=window.setInterval(a,50))}),onPointerLeave:(0,s.M)(l.onPointerLeave,()=>{u()})}))},(0,n.forwardRef)((e,t)=>{let{__scopeSelect:r,...a}=e;return(0,n.createElement)(y.WV.div,(0,o.Z)({"aria-hidden":!0},a,{ref:t}))}));function $cc7e05a45900e73f$var$shouldShowPlaceholder(e){return""===e||void 0===e}let ep=(0,n.forwardRef)((e,t)=>{let{value:r,...a}=e,l=(0,n.useRef)(null),i=(0,u.e)(t,l),c=(0,k.D)(r);return(0,n.useEffect)(()=>{let e=l.current,t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,"value"),a=n.set;if(c!==r&&a){let t=new Event("change",{bubbles:!0});a.call(e,r),e.dispatchEvent(t)}},[c,r]),(0,n.createElement)(N.T,{asChild:!0},(0,n.createElement)("select",(0,o.Z)({},a,{ref:i,defaultValue:r})))});function $cc7e05a45900e73f$var$useTypeaheadSearch(e){let t=(0,E.W)(e),r=(0,n.useRef)(""),a=(0,n.useRef)(0),l=(0,n.useCallback)(e=>{let n=r.current+e;t(n),function updateSearch(e){r.current=e,window.clearTimeout(a.current),""!==e&&(a.current=window.setTimeout(()=>updateSearch(""),1e3))}(n)},[t]),o=(0,n.useCallback)(()=>{r.current="",window.clearTimeout(a.current)},[]);return(0,n.useEffect)(()=>()=>window.clearTimeout(a.current),[]),[r,l,o]}function $cc7e05a45900e73f$var$findNextItem(e,t,r){let n=t.length>1&&Array.from(t).every(e=>e===t[0]),a=n?t[0]:t,l=r?e.indexOf(r):-1,o=$cc7e05a45900e73f$var$wrapArray(e,Math.max(l,0)),i=1===a.length;i&&(o=o.filter(e=>e!==r));let c=o.find(e=>e.textValue.toLowerCase().startsWith(a.toLowerCase()));return c!==r?c:void 0}function $cc7e05a45900e73f$var$wrapArray(e,t){return e.map((r,n)=>e[(t+n)%e.length])}ep.displayName="BubbleSelect";let $cc7e05a45900e73f$export$be92b6f5f03c0fe9=e=>{let{__scopeSelect:t,children:r,open:a,defaultOpen:l,onOpenChange:o,value:i,defaultValue:c,onValueChange:s,dir:d,name:u,autoComplete:f,disabled:p,required:h}=e,v=O(t),[w,y]=(0,n.useState)(null),[S,E]=(0,n.useState)(null),[C,k]=(0,n.useState)(!1),N=(0,m.gm)(d),[I=!1,$]=(0,x.T)({prop:a,defaultProp:l,onChange:o}),[R,_]=(0,x.T)({prop:i,defaultProp:c,onChange:s}),P=(0,n.useRef)(null),M=!w||!!w.closest("form"),[D,V]=(0,n.useState)(new Set),W=Array.from(D).map(e=>e.props.value).join(";");return(0,n.createElement)(b.fC,v,(0,n.createElement)(L,{required:h,scope:t,trigger:w,onTriggerChange:y,valueNode:S,onValueNodeChange:E,valueNodeHasChildren:C,onValueNodeHasChildrenChange:k,contentId:(0,g.M)(),value:R,onValueChange:_,open:I,onOpenChange:$,dir:N,triggerPointerDownPosRef:P,disabled:p},(0,n.createElement)(T.Provider,{scope:t},(0,n.createElement)(A,{scope:e.__scopeSelect,onNativeOptionAdd:(0,n.useCallback)(e=>{V(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,n.useCallback)(e=>{V(t=>{let r=new Set(t);return r.delete(e),r})},[])},r)),M?(0,n.createElement)(ep,{key:W,"aria-hidden":!0,required:h,tabIndex:-1,name:u,autoComplete:f,value:R,onChange:e=>_(e.target.value),disabled:p},void 0===R?(0,n.createElement)("option",{value:""}):null,Array.from(D)):null))},$cc7e05a45900e73f$export$602eac185826482c=e=>(0,n.createElement)(w.h,(0,o.Z)({asChild:!0},e));var eh=r(25443),ev=r(48291),eg=r(78219),eb=r(86679);let ew={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0}},ey={variant:{type:"enum",values:["classic","surface","soft","ghost"],default:"surface"},color:ev.m,radius:eg.C},eS={variant:{type:"enum",values:["solid","soft"],default:"solid"},color:ev.m,highContrast:eb.B};var eE=r(23843),ex=r(6776),eC=r(72702),ek=r(50846);let eN=n.createContext({}),SelectRoot=e=>{let{children:t,size:r=ew.size.default,...a}=e;return n.createElement($cc7e05a45900e73f$export$be92b6f5f03c0fe9,{...a},n.createElement(eN.Provider,{value:n.useMemo(()=>({size:r}),[r])},t))};SelectRoot.displayName="SelectRoot";let eI=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,eE.FY)(e),{className:o,variant:i=ey.variant.default,color:c=ey.color.default,radius:s=ey.radius.default,placeholder:d,...u}=r,{size:f}=n.useContext(eN);return n.createElement(Z,{asChild:!0},n.createElement("button",{"data-accent-color":c,"data-radius":s,...u,ref:t,className:l()("rt-reset","rt-SelectTrigger",o,(0,ex.g)(f,"rt-r-size"),`rt-variant-${i}`,(0,eE.we)(a))},n.createElement("span",{className:"rt-SelectTriggerInner"},n.createElement(H,{placeholder:d})),n.createElement(F,{asChild:!0},n.createElement(ek.v4,{className:"rt-SelectIcon"}))))});eI.displayName="SelectTrigger";let e$=n.forwardRef((e,t)=>{let{className:r,children:a,variant:o=eS.variant.default,highContrast:i=eS.highContrast.default,color:c=eS.color.default,container:s,...d}=e,{size:u}=n.useContext(eN),f=(0,eC.TC)(),m=null!=c?c:f.accentColor;return n.createElement($cc7e05a45900e73f$export$602eac185826482c,{container:s},n.createElement(eC.Q2,{asChild:!0},n.createElement(K,{"data-accent-color":m,sideOffset:4,...d,ref:t,className:l()({"rt-PopperContent":"popper"===d.position},"rt-SelectContent",r,(0,ex.g)(u,"rt-r-size"),`rt-variant-${o}`,{"rt-high-contrast":i})},n.createElement(eh.fC,{type:"auto",className:"rt-ScrollAreaRoot"},n.createElement(et,{asChild:!0,className:"rt-SelectViewport"},n.createElement(eh.l_,{className:"rt-ScrollAreaViewport",style:{overflowY:void 0}},a)),n.createElement(eh.LW,{className:"rt-ScrollAreaScrollbar rt-r-size-1",orientation:"vertical"},n.createElement(eh.bU,{className:"rt-ScrollAreaThumb"}))))))});e$.displayName="SelectContent";let eR=n.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return n.createElement(es,{...o,ref:t,className:l()("rt-SelectItem",r)},n.createElement(ef,{className:"rt-SelectItemIndicator"},n.createElement(ek.dc,{className:"rt-SelectItemIndicatorIcon"})),n.createElement(eu,null,a))});eR.displayName="SelectItem";let e_=n.forwardRef((e,t)=>n.createElement(ea,{...e,ref:t,className:l()("rt-SelectGroup",e.className)}));e_.displayName="SelectGroup";let eP=n.forwardRef((e,t)=>n.createElement(el,{...e,ref:t,className:l()("rt-SelectLabel",e.className)}));eP.displayName="SelectLabel";let eT=n.forwardRef((e,t)=>n.createElement(em,{...e,ref:t,className:l()("rt-SelectSeparator",e.className)}));eT.displayName="SelectSeparator";let eM=Object.assign({},{Root:SelectRoot,Trigger:eI,Content:e$,Item:eR,Group:e_,Label:eP,Separator:eT})},78579:function(e,t,r){r.d(t,{r:function(){return I}});var n=r(67294),a=r(93967),l=r.n(a),o=r(87462),i=r(36206),c=r(28771),s=r(25360),d=r(77342),u=r(57898),f=r(7546),m=r(75320);let p="Switch",[h,v]=(0,s.b)(p),[g,b]=h(p),w=(0,n.forwardRef)((e,t)=>{let{__scopeSwitch:r,name:a,checked:l,defaultChecked:s,required:u,disabled:f,value:p="on",onCheckedChange:h,...v}=e,[b,w]=(0,n.useState)(null),y=(0,c.e)(t,e=>w(e)),S=(0,n.useRef)(!1),E=!b||!!b.closest("form"),[x=!1,C]=(0,d.T)({prop:l,defaultProp:s,onChange:h});return(0,n.createElement)(g,{scope:r,checked:x,disabled:f},(0,n.createElement)(m.WV.button,(0,o.Z)({type:"button",role:"switch","aria-checked":x,"aria-required":u,"data-state":$6be4966fd9bbc698$var$getState(x),"data-disabled":f?"":void 0,disabled:f,value:p},v,{ref:y,onClick:(0,i.M)(e.onClick,e=>{C(e=>!e),E&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})})),E&&(0,n.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:b,bubbles:!S.current,name:a,value:p,checked:x,required:u,disabled:f,style:{transform:"translateX(-100%)"}}))}),y=(0,n.forwardRef)((e,t)=>{let{__scopeSwitch:r,...a}=e,l=b("SwitchThumb",r);return(0,n.createElement)(m.WV.span,(0,o.Z)({"data-state":$6be4966fd9bbc698$var$getState(l.checked),"data-disabled":l.disabled?"":void 0},a,{ref:t}))}),$6be4966fd9bbc698$var$BubbleInput=e=>{let{control:t,checked:r,bubbles:a=!0,...l}=e,i=(0,n.useRef)(null),c=(0,u.D)(r),s=(0,f.t)(t);return(0,n.useEffect)(()=>{let e=i.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked"),l=n.set;if(c!==r&&l){let t=new Event("click",{bubbles:a});l.call(e,r),e.dispatchEvent(t)}},[c,r,a]),(0,n.createElement)("input",(0,o.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:r},l,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(e){return e?"checked":"unchecked"}var S=r(48291),E=r(86679),x=r(78219);let C={size:{type:"enum",values:["1","2","3"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","surface","soft"],default:"surface"},color:S.m,highContrast:E.B,radius:x.C};var k=r(23843),N=r(6776);let I=n.forwardRef((e,t)=>{let{rest:r,...a}=(0,k.FY)(e),{className:o,style:i,size:c=C.size.default,variant:s=C.variant.default,color:d=C.color.default,highContrast:u=C.highContrast.default,radius:f=C.radius.default,...m}=r;return n.createElement("span",{"data-radius":f,className:l()("rt-SwitchRoot",o,(0,N.g)(c,"rt-r-size"),`rt-variant-${s}`,{"rt-high-contrast":u},(0,k.we)(a)),style:i},n.createElement(w,{"data-accent-color":d,...m,ref:t,className:l()("rt-reset","rt-SwitchButton",{"rt-high-contrast":u})},n.createElement(y,{className:l()("rt-SwitchThumb",{"rt-high-contrast":u})})))});I.displayName="Switch"},84416:function(e,t,r){r.d(t,{E:function(){return s}});var n=r(35059),a=r(85893),l=(0,n.G)(function(e,t){let{htmlWidth:r,htmlHeight:n,alt:l,...o}=e;return(0,a.jsx)("img",{width:r,height:n,ref:t,alt:l,...o})});l.displayName="NativeImage";var o=r(26245),i=r(67294);function useImage(e){let{loading:t,src:r,srcSet:n,onLoad:a,onError:l,crossOrigin:c,sizes:s,ignoreFallback:d}=e,[u,f]=(0,i.useState)("pending");(0,i.useEffect)(()=>{f(r?"loading":"pending")},[r]);let m=(0,i.useRef)(),p=(0,i.useCallback)(()=>{if(!r)return;flush();let e=new Image;e.src=r,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{flush(),f("loaded"),null==a||a(e)},e.onerror=e=>{flush(),f("failed"),null==l||l(e)},m.current=e},[r,c,n,s,a,l,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.G)(()=>{if(!d)return"loading"===u&&p(),()=>{flush()}},[u,p,d]),d?"loaded":u}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,c=r(51337);function omit(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}var s=(0,n.G)(function(e,t){let{fallbackSrc:r,fallback:n,src:o,srcSet:i,align:s,fit:d,loading:u,ignoreFallback:f,crossOrigin:m,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:h,...v}=e,g=null!=u||f||!(void 0!==r||void 0!==n),b=useImage({...e,crossOrigin:m,ignoreFallback:g}),w=shouldShowFallbackImage(b,p),y={ref:t,objectFit:d,objectPosition:s,...g?v:omit(v,["onError","onLoad"])};return w?n||(0,a.jsx)(c.m.img,{as:l,className:"chakra-image__placeholder",src:r,...y}):(0,a.jsx)(c.m.img,{as:l,src:o,srcSet:i,crossOrigin:m,loading:u,referrerPolicy:h,className:"chakra-image",...y})});s.displayName="Image"},23100:function(e,t,r){r.d(t,{xu:function(){return o}});var n=r(51337),a=r(35059),l=r(85893),o=(0,n.m)("div");o.displayName="Box";var i=(0,a.G)(function(e,t){let{size:r,centerContent:n=!0,...a}=e;return(0,l.jsx)(o,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});i.displayName="Square",(0,a.G)(function(e,t){let{size:r,...n}=e;return(0,l.jsx)(i,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"},14418:function(e,t,r){r.d(t,{X:function(){return s}});var n=r(35059),a=r(51628),l=r(33179),o=r(51337),i=r(25432),c=r(85893),s=(0,n.G)(function(e,t){let r=(0,a.mq)("Heading",e),{className:n,...s}=(0,l.Lr)(e);return(0,c.jsx)(o.m.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...s,__css:r})});s.displayName="Heading"},54641:function(e,t,r){r.d(t,{U:function(){return o}});var n=r(97073),a=r(35059),l=r(85893),o=(0,a.G)((e,t)=>(0,l.jsx)(n.K,{align:"center",...e,direction:"row",ref:t}));o.displayName="HStack"},91669:function(e,t,r){r.d(t,{g:function(){return o}});var n=r(97073),a=r(35059),l=r(85893),o=(0,a.G)((e,t)=>(0,l.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));o.displayName="VStack"},97073:function(e,t,r){r.d(t,{K:function(){return s}});var n=r(51337),a=r(85893),StackItem=e=>(0,a.jsx)(n.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=r(25432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,l.Kn)(e)?Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var o="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[o]:mapResponsive(r,e=>n[e])}}function getDividerStyles(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(r,e=>n[e])}}var i=r(35059),c=r(67294);function getValidChildren(e){return c.Children.toArray(e).filter(e=>(0,c.isValidElement)(e))}var s=(0,i.G)((e,t)=>{let{isInline:r,direction:i,align:s,justify:d,spacing:u="0.5rem",wrap:f,children:m,divider:p,className:h,shouldWrapChildren:v,...g}=e,b=r?"row":null!=i?i:"column",w=(0,c.useMemo)(()=>getStackStyles({direction:b,spacing:u}),[b,u]),y=(0,c.useMemo)(()=>getDividerStyles({spacing:u,direction:b}),[u,b]),S=!!p,E=!v&&!S,x=(0,c.useMemo)(()=>{let e=getValidChildren(m);return E?e:e.map((t,r)=>{let n=void 0!==t.key?t.key:r,l=r+1===e.length,o=(0,a.jsx)(StackItem,{children:t},n),i=v?o:t;if(!S)return i;let s=(0,c.cloneElement)(p,{__css:y});return(0,a.jsxs)(c.Fragment,{children:[i,l?null:s]},n)})},[p,y,S,E,v,m]),C=(0,l.cx)("chakra-stack",h);return(0,a.jsx)(n.m.div,{ref:t,display:"flex",alignItems:s,justifyContent:d,flexDirection:w.flexDirection,flexWrap:f,className:C,__css:S?{}:{[o]:w[o]},...g,children:x})});s.displayName="Stack"},57898:function(e,t,r){r.d(t,{D:function(){return $010c2913dbd2fe3d$export$5cae361ad82dce8b}});var n=r(67294);function $010c2913dbd2fe3d$export$5cae361ad82dce8b(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);