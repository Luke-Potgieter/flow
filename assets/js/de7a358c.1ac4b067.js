"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7455],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,w=p["".concat(c,".").concat(d)]||p[d]||f[d]||s;return n?r.createElement(w,a(a({ref:t},u),{},{components:n})):r.createElement(w,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},c="firstWriteWins and lastWriteWins",l={unversionedId:"reference/reduction-strategies/firstwritewins-and-lastwritewins",id:"reference/reduction-strategies/firstwritewins-and-lastwritewins",title:"firstWriteWins and lastWriteWins",description:"Using the firstWriteWins and lastWriteWins reduction strategies",source:"@site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/firstwritewins-and-lastwritewins",permalink:"/reference/reduction-strategies/firstwritewins-and-lastwritewins",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/firstwritewins-and-lastwritewins.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Using the firstWriteWins and lastWriteWins reduction strategies",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"append",permalink:"/reference/reduction-strategies/append"},next:{title:"merge",permalink:"/reference/reduction-strategies/merge"}},u=[],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"firstwritewins-and-lastwritewins"},"firstWriteWins and lastWriteWins"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"firstWriteWins")," always takes the first value seen at the annotated location. Likewise, ",(0,s.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," always takes the last. Schemas that don\u2019t have an explicit reduce annotation default to ",(0,s.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," behavior."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/fww-lww\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        fww: { reduce: { strategy: firstWriteWins } }\n        lww: { reduce: { strategy: lastWriteWins } }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can track first- and list-written values":\n    - ingest:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "one" }\n          - { key: "key", fww: "two", lww: "two" }\n    - verify:\n        collection: example/reductions/fww-lww\n        documents:\n          - { key: "key", fww: "one", lww: "two" }\n')))}p.isMDXComponent=!0}}]);