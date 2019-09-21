(window["webpackJsonpreact-circular-slider"]=window["webpackJsonpreact-circular-slider"]||[]).push([[0],{13:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(5),o=r.n(i),c=(r(13),r(1)),s=r(6),l=r(7);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f="ontouchstart"in window,g={DOWN:f?"touchstart":"mousedown",UP:f?"touchend":"mouseup",MOVE:f?"touchmove":"mousemove"},m=function(){var e=Object(a.useState)({isDragging:!1,radius:0,indicator:{scale:1,radians:-1,x:0,y:0},dashFullArray:0,dashFullOffset:0}),t=Object(l.a)(e,2),r=t[0],i=t[1],o=c.a.create({circularSlider:{position:"relative"},indicator:{position:"absolute",left:"-16px",top:"-16px",cursor:"grab",touchAction:"none"},svg:{width:"100%",height:"auto"},drag:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}}),s=Object(a.useRef)(null),u=Object(a.useRef)(null),f=Object(a.useRef)(null),m=Object(a.useCallback)(function(){var e=s.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+r,left:e.left+t,radius:e.width/2}},[]),p=Object(a.useCallback)(function(e){var t=r.radius,a=e+1.5708,n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=r.dashFullArray-n/360*r.dashFullArray;i(function(r){return d({},r,{dashFullOffset:o,indicator:{scale:1,radians:e,x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})},[r.dashFullArray,r.radius]),h=Object(a.useCallback)(function(e){e.preventDefault(),i(function(e){return d({},e,{isDragging:!0})})},[]),b=Object(a.useCallback)(function(e){if(r.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(m().left+r.radius),n=("touchmove"===e.type?t.pageY:e.pageY)-(m().top+r.radius),i=Math.atan2(n,a);p(i)}},[r.isDragging,r.radius,p,m]),O=function(e){i(function(e){return d({},e,{isDragging:!1})})};return Object(a.useEffect)(function(){var e=m();i(function(t){return d({},t,{dashFullArray:f.current.getTotalLength(),dashFullOffset:f.current.getTotalLength(),radius:e.radius-3,indicator:{scale:1,radians:0,x:e.radius,y:0}})})},[]),Object(a.useEffect)(function(){if(r.isDragging)return document.addEventListener(g.MOVE,b),document.addEventListener(g.UP,O),function(){document.removeEventListener(g.MOVE,b),document.removeEventListener(g.UP,O)}},[r.isDragging,b]),n.a.createElement("div",{className:Object(c.b)(o.circularSlider),ref:s},n.a.createElement("svg",{width:"390px",height:"390px",viewBox:"0 0 390 390",className:Object(c.b)(o.svg),ref:u},n.a.createElement("defs",null,n.a.createElement("linearGradient",{id:"gradient",x2:"0%",y2:"100%"},n.a.createElement("stop",{offset:"0%",stopColor:"#80C3F3"}),n.a.createElement("stop",{offset:"100%",stopColor:"#4990E2"})),n.a.createElement("linearGradient",{id:"gradient2",x2:"0%",y2:"100%"},n.a.createElement("stop",{offset:"0%",stopColor:"#4990E2"}),n.a.createElement("stop",{offset:"100%",stopColor:"#80C3F3"}))),n.a.createElement("circle",{strokeWidth:4,fill:"none",stroke:"#DDDEFB",cx:195,cy:195,r:193}),n.a.createElement("path",{ref:f,strokeDasharray:r.dashFullArray,strokeDashoffset:r.dashFullOffset,strokeWidth:"4",strokeLinecap:"round",fill:"none",stroke:"url(#gradient)",d:" M 195, 195 m 0, -193 a 193,193 0 0,1 0,386 a -193,-193 0 0,1 0,-386 "})),n.a.createElement("div",{style:{transform:"translate(".concat(r.indicator.x,"px, ").concat(r.indicator.y,"px)")},className:Object(c.b)(o.indicator,r.isDragging&&o.drag,r.isDragging&&o.pause),onMouseDown:h,onTouchStart:h},n.a.createElement("svg",{width:"36px",height:"36px",viewBox:"0 0 36 36"},n.a.createElement("circle",{fill:"#5C4BEA",fillOpacity:"0.2",stroke:"none",cx:"18",cy:"18",r:"18",className:Object(c.b)(!r.isDragging&&o.animation)}),n.a.createElement("circle",{fill:"#5C4BEA",stroke:"none",cx:"18",cy:"18",r:"12"}),n.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"14",width:"9",height:"1"}),n.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"17",width:"9",height:"1"}),n.a.createElement("rect",{fill:"#FFFFFF",x:"13",y:"20",width:"9",height:"1"}))))},p=function(){var e=c.a.create({wrapper:{margin:"2rem"}});return n.a.createElement("div",{className:Object(c.b)(e.wrapper)},n.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,r){e.exports=r(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.905b8939.chunk.js.map