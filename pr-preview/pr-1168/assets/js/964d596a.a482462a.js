"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Zendesk Support",s={unversionedId:"reference/Connectors/capture-connectors/zendesk-support",id:"reference/Connectors/capture-connectors/zendesk-support",title:"Zendesk Support",description:"This connector captures data from Zendesk into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/zendesk-support.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/zendesk-support",permalink:"/pr-preview/pr-1168/reference/Connectors/capture-connectors/zendesk-support",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/zendesk-support.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Chat",permalink:"/pr-preview/pr-1168/reference/Connectors/capture-connectors/zendesk-chat"},next:{title:"Materialization connectors",permalink:"/pr-preview/pr-1168/reference/Connectors/materialization-connectors/"}},l={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zendesk-support"},"Zendesk Support"),(0,a.kt)("p",null,"This connector captures data from Zendesk into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-zendesk-support:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-zendesk-support:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/zendesk-support/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported through the Zendesk API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/brands/"},"Brands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/account-configuration/custom_roles/"},"Custom roles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/groups/group_memberships/"},"Group memberships")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/groups/groups/"},"Groups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/business-rules/macros/"},"Macros")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/organizations/organizations/"},"Organizations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/satisfaction_ratings/"},"Satisfaction ratings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/schedules/"},"Schedules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/business-rules/sla_policies/"},"SLA policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/tags/"},"Tags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_audits/"},"Ticket audits")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"},"Ticket comments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_fields/"},"Ticket fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_forms/"},"Ticket forms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_metrics/"},"Ticket metrics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_metric_events/"},"Ticket metric events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-ticket-export-time-based"},"Tickets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/#incremental-user-export"},"Users"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subdomain of your Zendesk URL. In the URL ",(0,a.kt)("inlineCode",{parentName:"li"},"https://MY_SUBDOMAIN.zendesk.com/"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MY_SUBDOMAIN")," is the subdomain."),(0,a.kt)("li",{parentName:"ul"},"Email address associated with your Zendesk account."),(0,a.kt)("li",{parentName:"ul"},"A Zendesk API token. See the ",(0,a.kt)("a",{parentName:"li",href:"https://support.zendesk.com/hc/en-us/articles/4408889192858-Generating-a-new-API-token"},"Zendesk docs")," to enable tokens and generate a new token.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification files.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Zendesk Support source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/credentials/api_token")),(0,a.kt)("td",{parentName:"tr",align:null},"API Token"),(0,a.kt)("td",{parentName:"tr",align:null},"The value of the API token generated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/credentials/credentials")),(0,a.kt)("td",{parentName:"tr",align:null},"Credentials method"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of credentials used. Set to ",(0,a.kt)("inlineCode",{parentName:"td"},"api-token")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/credentials/email")),(0,a.kt)("td",{parentName:"tr",align:null},"Email"),(0,a.kt)("td",{parentName:"tr",align:null},"The user email for your Zendesk account."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date from which you","'","d like to replicate data for Zendesk Support API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/subdomain"))),(0,a.kt)("td",{parentName:"tr",align:null},"Subdomain"),(0,a.kt)("td",{parentName:"tr",align:null},"This is your Zendesk subdomain that can be found in your account URL. For example, in https:","/","/","{MY","_","SUBDOMAIN}.zendesk.com","/",", where MY","_","SUBDOMAIN is the value of your subdomain."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource in Zendesk from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-zendesk-support:dev\n        config:\n            credentials:\n              api_token: <secret>\n              credentials: api_token\n              email: user@domain.com\n            start_date: 2022-03-01T00:00:00Z\n            subdomain: my_subdomain\n    bindings:\n      - resource:\n          stream: group_memberships\n          syncMode: incremental\n        target: ${PREFIX}/groupmemberships\n      - resource:\n          stream: groups\n          syncMode: incremental\n        target: ${PREFIX}/groups\n      - resource:\n          stream: macros\n          syncMode: incremental\n        target: ${PREFIX}/macros\n      - resource:\n          stream: organizations\n          syncMode: incremental\n        target: ${PREFIX}/organizations\n      - resource:\n          stream: satisfaction_ratings\n          syncMode: incremental\n        target: ${PREFIX}/satisfactionratings\n      - resource:\n          stream: sla_policies\n          syncMode: full_refresh\n        target: ${PREFIX}/slapoliciies\n      - resource:\n          stream: tags\n          syncMode: full_refresh\n        target: ${PREFIX}/tags\n      - resource:\n          stream: ticket_audits\n          syncMode: incremental\n        target: ${PREFIX}/ticketaudits\n      - resource:\n          stream: ticket_comments\n          syncMode: incremental\n        target: ${PREFIX}/ticketcomments\n      - resource:\n          stream: ticket_fields\n          syncMode: incremental\n        target: ${PREFIX}/ticketfields\n      - resource:\n          stream: ticket_forms\n          syncMode: incremental\n        target: ${PREFIX}/ticketforms\n      - resource:\n          stream: ticket_metrics\n          syncMode: incremental\n        target: ${PREFIX}/ticketmetrics\n      - resource:\n          stream: ticket_metric_events\n          syncMode: incremental\n        target: ${PREFIX}/ticketmetricevents\n      - resource:\n          stream: tickets\n          syncMode: incremental\n        target: ${PREFIX}/tickets\n      - resource:\n          stream: users\n          syncMode: incremental\n        target: ${PREFIX}/users\n      - resource:\n          stream: brands\n          syncMode: full_refresh\n        target: ${PREFIX}/brands\n      - resource:\n          stream: custom_roles\n          syncMode: full_refresh\n        target: ${PREFIX}/customroles\n      - resource:\n          stream: schedules\n          syncMode: full_refresh\n        target: ${PREFIX}/schedules\n")))}d.isMDXComponent=!0}}]);