"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Amazon Kinesis",l={unversionedId:"reference/Connectors/capture-connectors/amazon-kinesis",id:"reference/Connectors/capture-connectors/amazon-kinesis",title:"Amazon Kinesis",description:"This connector captures data from Amazon Kinesis streams.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-kinesis",permalink:"/reference/Connectors/capture-connectors/amazon-kinesis",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon DynamoDB",permalink:"/reference/Connectors/capture-connectors/amazon-dynamodb"},next:{title:"Amazon S3",permalink:"/reference/Connectors/capture-connectors/amazon-s3"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-kinesis"},"Amazon Kinesis"),(0,r.kt)("p",null,"This connector captures data from Amazon Kinesis streams."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-kinesis"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-kinesis:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more Amazon Kinesis streams. For a given capture, all streams must:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contain JSON data only"),(0,r.kt)("li",{parentName:"ul"},"Be in the same ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"AWS region")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An IAM user with the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html"},"permissions"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ListShards")," on all resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetRecords")," on all streams used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetShardIterator")," on all streams used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DescribeStream")," on all streams used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DescribeStreamSummary")," on all streams used")),(0,r.kt)("p",{parentName:"li"},"These permissions should be specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kinesis:")," prefix in an IAM policy document.\nFor more details and examples, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html"},"Controlling Access to Amazon Kinesis Data")," in the Amazon docs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The AWS ",(0,r.kt)("strong",{parentName:"p"},"access key")," and ",(0,r.kt)("strong",{parentName:"p"},"secret access key")," for the user.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding these credentials."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Amazon Kinesis source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsAccessKeyId"))),(0,r.kt)("td",{parentName:"tr",align:null},"AWS access key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Part of the AWS credentials that will be used to connect to Kinesis."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"example-aws-access-key-id"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsSecretAccessKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"AWS secret access key"),(0,r.kt)("td",{parentName:"tr",align:null},"Part of the AWS credentials that will be used to connect to Kinesis."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"example-aws-secret-access-key"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS endpoint URI to connect to, useful if you","'","re capturing from a kinesis-compatible API that isn","'","t provided by AWS."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the AWS region where the Kinesis stream is located."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"us-east-1"'))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream name."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"A minimal capture definition will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kinesis:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          stream: ${STREAM_NAME}\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n')),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each Kinesis stream."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."))}u.isMDXComponent=!0}}]);