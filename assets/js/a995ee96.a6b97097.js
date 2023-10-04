"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="MySQL HeatWave",o={unversionedId:"reference/Connectors/materialization-connectors/mysql-heatwave",id:"reference/Connectors/materialization-connectors/mysql-heatwave",title:"MySQL HeatWave",description:"This connector facilitates the materialization of data from Estuary Flow directly into Oracle MySQL HeatWave instances.",source:"@site/docs/reference/Connectors/materialization-connectors/mysql-heatwave.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/mysql-heatwave",permalink:"/reference/Connectors/materialization-connectors/mysql-heatwave",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/mysql-heatwave.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Webhook",permalink:"/reference/Connectors/materialization-connectors/http-webhook"},next:{title:"MySQL",permalink:"/reference/Connectors/materialization-connectors/mysql"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Advanced: SSL Mode",id:"advanced-ssl-mode",level:3},{value:"Bindings",id:"bindings",level:3},{value:"Sample",id:"sample",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-heatwave"},"MySQL HeatWave"),(0,r.kt)("p",null,"This connector facilitates the materialization of data from Estuary Flow directly into Oracle MySQL HeatWave instances."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-mysql-heatwave"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-mysql-heatwave:dev"))," provides the latest connector image. For earlier versions, please follow the link in your browser."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this materialization connector, you\u2019ll need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A MySQL HeatWave database and the appropriate user credentials."),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Select one or more of your Flow collections to start using this connector. The configuration properties below will help you to materialize your collections into tables in MySQL HeatWave."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Host and port of the database. If only the host is specified, the port will default to 3306."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the logical database to send data to."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Username for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/timezone")),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone to use when materializing datetime columns. Should normally be left blank to use the database's 'time_zone' system variable. Only required if the 'time_zone' system variable cannot be read."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"advanced-ssl-mode"},"Advanced: SSL Mode"),(0,r.kt)("p",null,"Configuring the SSL mode strengthens security when transferring data to Oracle MySQL HeatWave. Here are the possible values for SSL mode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),": Establishes an unencrypted connection with the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preferred"),": Initiates the SSL connection only if prompted by the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"required"),": Establishes an SSL connection but doesn\u2019t verify the server\u2019s certificate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify_ca"),": Connects via SSL connection and verifies the server\u2019s certificate against the provided SSL Server CA, without validating the server's hostname. SSL Server CA is mandatory for this mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify_identity"),": Ensures an SSL connection, and verifies both the server's certificate and hostname. This is the highest level of security. SSL Server CA is required for this mode.")),(0,r.kt)("h3",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table to send data to."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h2",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${MAT_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-mysql-heatwave:dev\n        config:\n          database: flow\n          address: localhost:5432\n          password: secret\n          user: flow\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n")))}m.isMDXComponent=!0}}]);