"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},l="Troubleshoot a task with flowctl",i={unversionedId:"guides/flowctl/troubleshoot-task",id:"guides/flowctl/troubleshoot-task",title:"Troubleshoot a task with flowctl",description:"The flowctl logs and stats subcommands have been temporarily disabled while we work on some important changes to our authorization system. We expect to have these working again soon. In the meantime, please reach out to us via Slack or email (support@estuary.dev) if you want any help.",source:"@site/docs/guides/flowctl/troubleshoot-task.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/troubleshoot-task",permalink:"/pr-preview/pr-1168/guides/flowctl/troubleshoot-task",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/troubleshoot-task.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a derivation with flowctl",permalink:"/pr-preview/pr-1168/guides/flowctl/create-derivation"},next:{title:"Configure connections with SSH tunneling",permalink:"/pr-preview/pr-1168/guides/connect-network"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Print task logs",id:"print-task-logs",level:2},{value:"Change log level",id:"change-log-level",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshoot-a-task-with-flowctl"},"Troubleshoot a task with flowctl"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The flowctl logs and stats subcommands have been temporarily disabled while we work on some important changes to our authorization system. We expect to have these working again soon. In the meantime, please reach out to us via Slack or email (",(0,n.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"support@estuary.dev"),") if you want any help.")),(0,n.kt)("p",null,"flowctl offers the most advanced views of ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/concepts/advanced/logs-stats"},"task logs"),".\nIf a task has errors or is failing in the web app, you'll be able to troubleshoot more effectively with flowctl."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To complete this workflow, you need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/getting-started/installation"},"Estuary account"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/getting-started/installation#get-started-with-the-flow-cli"},"flowctl installed locally")))),(0,n.kt)("h2",{id:"print-task-logs"},"Print task logs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Authorize flowctl."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Identify the name of the failing task in the web app; for example ",(0,n.kt)("inlineCode",{parentName:"p"},"myOrg/marketing/leads"),".\nUse the tables on the Captures or Materializations pages of the web app to do so.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"flowctl logs --task <task-name>"),". You have several options to get more specific. For example:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"flowctl logs --task myOrg/marketing/leads --follow")," \u2014 If the task hasn't failed, continuously print logs as they're generated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"flowctl logs --task myOrg/marketing/leads --since 1h")," \u2014 Print logs from approximately the last hour.\nThe actual output window is approximate and may somewhat exceed this time boundary.\nYou may use any time, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"10m")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"1d"),"."))))),(0,n.kt)("h2",{id:"change-log-level"},"Change log level"),(0,n.kt)("p",null,"If your logs aren't providing enough detail, you can change the log level."),(0,n.kt)("p",null,"Flow offers several log levels. From least to most detailed, these are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"warn")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"info")," (default)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"debug")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trace"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the guide to ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/guides/flowctl/edit-specification-locally"},"edit a specification with flowctl"),"."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Working in your local specification file, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"shards")," stanza to the capture or materialization specification:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"myOrg/marketing/leads:\n  shards:\n    logLevel: debug\n  endpoint:\n    {}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Finish the workflow as described, re-publishing the task."))))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/reference/working-logs-stats"},"Learn more about working with logs")))}m.isMDXComponent=!0}}]);