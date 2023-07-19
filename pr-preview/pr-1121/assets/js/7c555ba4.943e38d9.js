"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Stripe",s={unversionedId:"reference/Connectors/capture-connectors/stripe",id:"reference/Connectors/capture-connectors/stripe",title:"Stripe",description:"This connector captures data from Stripe into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/stripe.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/stripe",permalink:"/flow/pr-preview/pr-1121/reference/Connectors/capture-connectors/stripe",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/stripe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snapchat Marketing",permalink:"/flow/pr-preview/pr-1121/reference/Connectors/capture-connectors/snapchat"},next:{title:"Survey Monkey",permalink:"/flow/pr-preview/pr-1121/reference/Connectors/capture-connectors/survey-monkey"}},l={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Choosing your start date and lookback window",id:"choosing-your-start-date-and-lookback-window",level:3},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stripe"},"Stripe"),(0,a.kt)("p",null,"This connector captures data from Stripe into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-stripe:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-stripe:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/stripe/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported through the Stripe API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/balance_transactions/list"},"Balance transactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customer_bank_accounts/list"},"Bank accounts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/charges/list"},"Charges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/checkout/sessions/list"},"Checkout sessions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/checkout/sessions/line_items"},"Checkout sessions line items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/coupons/list"},"Coupons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customer_balance_transactions/list"},"Customer balance transactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/customers/list"},"Customers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/disputes/list"},"Disputes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/events/list"},"Events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoiceitems/list"},"Invoice items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoices/invoice_lines"},"Invoice line items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/invoices/list"},"Invoices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/payment_intents/list"},"Payment intents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/payouts/list"},"Payouts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/plans/list"},"Plans")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/products/list"},"Products")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/promotion_codes/list"},"Promotion codes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/refunds/list"},"Refunds")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/subscription_items/list"},"Subscription items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/subscriptions/list"},"Subscriptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/api/transfers/list"},"Transfers"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/dashboard/basics#find-account-id"},"Account ID")," of your Stripe account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stripe.com/docs/keys#obtain-api-keys"},"Secret key")," for the Stripe API.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/flow/pr-preview/pr-1121/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Stripe source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/account_id"))),(0,a.kt)("td",{parentName:"tr",align:null},"Account ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Your Stripe account ID (starts with ","'","acct","_","'",", find yours here https:","/","/","dashboard.stripe.com","/","settings","/","account"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/client_secret"))),(0,a.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Stripe API key (usually starts with ","'","sk","_","live","_","'","; find yours here https:","/","/","dashboard.stripe.com","/","apikeys"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/lookback_window_days")),(0,a.kt)("td",{parentName:"tr",align:null},"Lookback Window in days (Optional)"),(0,a.kt)("td",{parentName:"tr",align:null},"When set, the connector will always re-export data from the past N days, where N is the value set here. This is useful if your data is frequently updated after creation."),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Replication start date"),(0,a.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2017-01-25T00:00:00Z. Only data generated after this date will be replicated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource from Stripe from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"choosing-your-start-date-and-lookback-window"},"Choosing your start date and lookback window"),(0,a.kt)("p",null,"The connector will continually capture data beginning on the ",(0,a.kt)("strong",{parentName:"p"},"Replication start date")," you choose."),(0,a.kt)("p",null,"However, some data from the Stripe API is mutable; for example, ",(0,a.kt)("a",{parentName:"p",href:"https://stripe.com/docs/billing/migration/invoice-states"},"a draft invoice can be completed")," at a later date than it was created.\nTo account for this, it's useful to set the ",(0,a.kt)("strong",{parentName:"p"},"Lookback Window"),". When this is set, at a given point in time, the connector will not only look for new data;\nit will also capture changes made to data within the window."),(0,a.kt)("p",null,"For example, if you start the connector with the start date of ",(0,a.kt)("inlineCode",{parentName:"p"},"2022-06-06T00:00:00Z")," (June 6) and the lookback window of ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),", the connector will begin to capture data starting from June 3.\nAs time goes on while the capture remains active, the lookback window rolls forward along with the current timestamp.\nOn June 10, the connector will continue to monitor data starting from June 7 and capture any changes to that data, and so on."),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-stripe:dev\n        config:\n            account_id: 00000000\n            client_secret: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: balance_transactions\n          syncMode: incremental\n        target: ${PREFIX}/balancetransactions\n      - resource:\n          stream: bank_accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/bankaccounts\n      - resource:\n          stream: charges\n          syncMode: incremental\n        target: ${PREFIX}/charges\n      - resource:\n          stream: checkout_sessions\n          syncMode: incremental\n        target: ${PREFIX}/checkoutsessions\n      - resource:\n          stream: checkout_sessions_line_items\n          syncMode: incremental\n        target: ${PREFIX}/checkoutsessionslineitems\n      - resource:\n          stream: coupons\n          syncMode: incremental\n        target: ${PREFIX}/coupons\n      - resource:\n          stream: customer_balance_transactions\n          syncMode: full_refresh\n        target: ${PREFIX}/customerbalancetransactions\n      - resource:\n          stream: customers\n          syncMode: incremental\n        target: ${PREFIX}/customers\n      - resource:\n          stream: disputes\n          syncMode: incremental\n        target: ${PREFIX}/disputes\n      - resource:\n          stream: events\n          syncMode: incremental\n        target: ${PREFIX}/events\n      - resource:\n          stream: invoice_items\n          syncMode: incremental\n        target: ${PREFIX}/invoice_items\n      - resource:\n          stream: invoice_line_items\n          syncMode: full_refresh\n        target: ${PREFIX}/invoicelineitems\n      - resource:\n          stream: invoices\n          syncMode: incremental\n        target: ${PREFIX}/invoices\n      - resource:\n          stream: payment_intents\n          syncMode: incremental\n        target: ${PREFIX}/paymentintents\n      - resource:\n          stream: payouts\n          syncMode: incremental\n        target: ${PREFIX}/payouts\n      - resource:\n          stream: plans\n          syncMode: incremental\n        target: ${PREFIX}/plans\n      - resource:\n          stream: products\n          syncMode: incremental\n        target: ${PREFIX}/products\n      - resource:\n          stream: promotion_codes\n          syncMode: incremental\n        target: ${PREFIX}/promotioncodes\n      - resource:\n          stream: refunds\n          syncMode: incremental\n        target: ${PREFIX}/refunds\n      - resource:\n          stream: subscription_items\n          syncMode: full_refresh\n        target: ${PREFIX}/subscriptionitems\n      - resource:\n          stream: subscriptions\n          syncMode: incremental\n        target: ${PREFIX}/subscriptions\n      - resource:\n          stream: transfers\n          syncMode: incremental\n        target: ${PREFIX}/transfers\n")))}m.isMDXComponent=!0}}]);