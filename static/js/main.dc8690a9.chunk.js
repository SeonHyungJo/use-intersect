(this["webpackJsonpuse-intersect-example"]=this["webpackJsonpuse-intersect-example"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(1),r=n.n(i),c=(n(9),{root:null,rootMargin:"0px",threshold:0}),l=function(e,t){var n,s=Object(a.useRef)(),i=t||c;return Object(a.useEffect)((function(){n=function(e,t){if("IntersectionObserver"in window){var n=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(e(t.target),n.unobserve(t.target))}))}),t);return n}var a=!1,s=[],i=t.threshold,r=void 0===i?0:i,c=function t(){!1===a&&(a=!0,setTimeout((function(){s.forEach((function(n){var a=n.getBoundingClientRect(),i=a.top,c=a.bottom,l=i+(c-i)*(1-r);(i>=0&&i+(c-i)*r<=window.innerHeight&&c>=0||l>=0&&c<=window.innerHeight)&&"none"!==getComputedStyle(n).display&&(e(n),0===(s=s.filter((function(e){return e!==n}))).length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))})),a=!1}),200))};return document.addEventListener("scroll",c),window.addEventListener("resize",c),window.addEventListener("orientationchange",c),{observe:function(e){s.push(e)}}}(e,i)})),Object(a.useEffect)((function(){null!==s&&n.observe(s.current)}),[s]),s},o={threshold:.8},v=function(){var e=l((function(e){console.log("intersect",e)}),o);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{ref:e,className:"targetDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}),s.a.createElement("div",{className:"testDiv"}))};r.a.render(s.a.createElement(v,null),document.getElementById("root"))},2:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[2,1,2]]]);
//# sourceMappingURL=main.dc8690a9.chunk.js.map