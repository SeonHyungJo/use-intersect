(this["webpackJsonpuse-intersect-example"]=this["webpackJsonpuse-intersect-example"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(1),r=n.n(i),c=(n(9),{root:null,rootMargin:"0px",threshold:0}),o=function(e,t){var n,s=t.rootOptions,i=t.once,r=void 0===i||i,o=Object(a.useRef)(),l=s||c;return Object(a.useEffect)((function(){n=function(e,t){var n=t.observerOptions,a=t.once;if("IntersectionObserver"in window){var s=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e(t.target),a&&s.unobserve(t.target))}))}),n);return s}var i=!1,r=[],c=n.threshold,o=void 0===c?0:c,l=function t(){!1===i&&(i=!0,setTimeout((function(){r.forEach((function(n){var s=n.getBoundingClientRect(),i=s.top,c=s.bottom,l=i+(c-i)*(1-o);(i>=0&&i+(c-i)*o<=window.innerHeight&&c>=0||l>=0&&c<=window.innerHeight)&&"none"!==getComputedStyle(n).display&&(e(n),a&&0===(r=r.filter((function(e){return e!==n}))).length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))})),i=!1}),200))};return document.addEventListener("scroll",l),window.addEventListener("resize",l),window.addEventListener("orientationchange",l),{observe:function(e){r.push(e)}}}(e,{observerOptions:l,once:r})})),Object(a.useEffect)((function(){null!==o&&n.observe(o.current)}),[o]),o},l={threshold:.8},v=function(){var e=o((function(e){console.log("intersect",e)}),{rootOptions:l,once:!1});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{ref:e,className:"targetDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}))};r.a.render(s.a.createElement(v,null),document.getElementById("root"))},2:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[2,1,2]]]);
//# sourceMappingURL=main.f2ed7ed4.chunk.js.map