(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(266)),i={},c={id:"version-1.x.x/nodes/diff",title:"diff",description:"diff",source:"@site/versioned_docs/version-1.x.x/nodes/diff.md",permalink:"/react-native-reanimated/docs/1.x.x/nodes/diff",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/nodes/diff.md",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"defined",permalink:"/react-native-reanimated/docs/1.x.x/nodes/defined"},next:{title:"diffClamp",permalink:"/react-native-reanimated/docs/1.x.x/nodes/diffClamp"}},d=[{value:"<code>diff</code>",id:"diff",children:[]}],f={rightToc:d};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"diff"},Object(o.b)("inlineCode",{parentName:"h2"},"diff")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"diff(node);\n")),Object(o.b)("p",null,"Evaluates node and returns a difference between value returned at the last time it was evaluated and its value at the current time. When evaluating for the first time it returns the node's value."))}u.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),u=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,f=d(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||l[p]||o;return n?a.a.createElement(m,c(c({ref:t},f),{},{components:n})):a.a.createElement(m,c({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);