(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(266)),i={id:"loop",title:"loop",sidebar_label:"loop"},l={id:"api/loop",title:"loop",description:"Allows for the provided animation to loop back and forth between the value at which the animation started and the target value for the provided animation.",source:"@site/docs/api/loop.md",permalink:"/react-native-reanimated/docs/next/api/loop",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/loop.md",version:"next",sidebar_label:"loop",sidebar:"docs",previous:{title:"delay",permalink:"/react-native-reanimated/docs/next/api/delay"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows for the provided animation to loop back and forth between the value at which the animation started and the target value for the provided animation."),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("h4",{id:"loopedanimation-animation"},Object(o.b)("inlineCode",{parentName:"h4"},"loopedAnimation")," ","[animation]"),Object(o.b)("p",null,"The animation that will be run in a loop."),Object(o.b)("h4",{id:"numberofloops-number-default-1"},Object(o.b)("inlineCode",{parentName:"h4"},"numberOfLoops")," ","[number]"," (default: 1)"),Object(o.b)("p",null,"Number of cycles the looped animation will perform before finishing.\nWhen negative, the loop will run forever (until the shared value is torn down or the animation is cancelled).\nWhen 1 is passed, the loop will make the original value go to the target destination and back.\nIn case you want to finish at the target destination, you can pass 0.5 (or 1.5, 2.5, etc if you want more half loops to be performed)"),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"useAnimatedStyle"}),Object(o.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The provided shared value will animate from its current value to 70 using timing animation, and then back to the original value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sharedValue.value = loop(withTiming(70))\n")))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);