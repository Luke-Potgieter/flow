"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="Google BigQuery",l={unversionedId:"reference/Connectors/materialization-connectors/BigQuery",id:"reference/Connectors/materialization-connectors/BigQuery",title:"Google BigQuery",description:"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.",source:"@site/docs/reference/Connectors/materialization-connectors/BigQuery.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/BigQuery",permalink:"/reference/Connectors/materialization-connectors/BigQuery",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/BigQuery.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Firebolt",permalink:"/reference/Connectors/materialization-connectors/Firebolt"},next:{title:"Google Cloud Pub/Sub",permalink:"/reference/Connectors/materialization-connectors/google-pubsub"}},s={},p=[{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Shard configuration",id:"shard-configuration",level:3},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-bigquery"},"Google BigQuery"),(0,r.kt)("p",null,"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.\nIt allows both standard and ",(0,r.kt)("a",{parentName:"p",href:"#delta-updates"},"delta updates"),"."),(0,r.kt)("p",null,"The connector uses your Google Cloud service account to materialize to BigQuery tables by way of files in a Google Cloud Storage (GCS) bucket.\nThe tables in the bucket act as a temporary staging area for data storage and retrieval."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/materialize-bigquery"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-bigquery:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"Like other Estuary connectors, this is a real-time connector that materializes documents using continuous ",(0,r.kt)("a",{parentName:"p",href:"/concepts/advanced/shards#transactions"},"transactions"),".\nHowever, in practice, there are speed limitations.\nStandard BigQuery tables are ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/quotas#standard_tables"},"limited to 1500 operations per day"),".\nThis means that the connector is limited 1500 transactions per day."),(0,r.kt)("p",null,"To avoid running up against this limit, you should set the minimum transaction time to a recommended value of 2 minutes,\nor a minimum value of 1 minute. You do this by configuring the materialization's ",(0,r.kt)("a",{parentName:"p",href:"/reference/Configuring-task-shards"},"task shard"),". This causes an apparent delay in the materialization, but is necessary to prevent error.\nThis also makes transactions more efficient, which reduces costs in BigQuery, especially for large datasets."),(0,r.kt)("p",null,"Instructions to set the minimum transaction time are detailed ",(0,r.kt)("a",{parentName:"p",href:"#shard-configuration"},"below"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"new Google Cloud Storage bucket")," in the same region as the BigQuery destination dataset.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google Cloud ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"service account")," with a key file generated and the following roles:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/bigquery.dataEditor"))," on the destination dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/bigquery.jobUser"))," on the\nproject with which the BigQuery destination dataset is associated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles#standard-roles"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/storage.objectAdmin")),"\non the GCS bucket created above"),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"#setup"},"Setup")," for detailed steps to set up your service account."))))),(0,r.kt)("p",null,"The Flow collections you materialize must accommodate the following naming restrictions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Field names may not contain hyphens (",(0,r.kt)("inlineCode",{parentName:"li"},"-"),"), or the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Field names must begin with a letter or underscore (",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"), or the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Field names ",(0,r.kt)("em",{parentName:"li"},"may")," contain non-alphanumeric characters, but these are replaced with underscores in the corresponding BigQuery column name."),(0,r.kt)("li",{parentName:"ul"},"If two field names become identical after special characters are replaced with underscores (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"field!")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"field$")," both become ",(0,r.kt)("inlineCode",{parentName:"li"},"field_"),"), the materialization will fail."),(0,r.kt)("li",{parentName:"ul"},"Collection names ",(0,r.kt)("em",{parentName:"li"},"may")," contain non-alphanumeric characters, but all such characters except hyphens are replaced with underscores in the BigQuery table name.")),(0,r.kt)("p",null,"If necessary, you can add ",(0,r.kt)("a",{parentName:"p",href:"/concepts/advanced/projections"},"projections")," to your collection specification to change field names."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps."))),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To configure your service account, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into the Google Cloud console and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account"},"create a service account"),".\nDuring account creation:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Grant the user access to the project."),(0,r.kt)("li",{parentName:"ol"},"Grant the user roles ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/bigquery.dataEditor"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/bigquery.jobUser"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"roles/storage.objectAdmin"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Done"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the new service account from the list of service accounts. On the Keys tab, click ",(0,r.kt)("strong",{parentName:"p"},"Add key")," and create a new JSON key."),(0,r.kt)("p",{parentName:"li"},"The key is automatically downloaded. You'll use it to configure the connector."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a BigQuery materialization, which will direct one or more of your Flow collections to your desired tables within a BigQuery dataset."),(0,r.kt)("p",null,"A BigQuery dataset is the top-level container within a project, and comprises multiple tables.\nYou can think of a dataset as somewhat analogous to a schema in a relational database.\nFor a complete introduction to resource organization in Bigquery, see the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/resource-hierarchy"},"BigQuery docs"),"."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/project_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The project ID for the Google Cloud Storage bucket and BigQuery dataset."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/billing_project_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Billing project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The project ID to which these operations are billed in BigQuery. Typically, you want this to be the same as ",(0,r.kt)("inlineCode",{parentName:"td"},"project_id")," (the default)."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("inlineCode",{parentName:"td"},"project_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/dataset"))),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the target BigQuery dataset."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"The GCS region."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the GCS bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/bucket_path")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket path"),(0,r.kt)("td",{parentName:"tr",align:null},'Base path within the GCS bucket. Also called "Folder" in the GCS console.'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials_json"))),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON credentials of the service account to use for authorization."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("p",null,"To learn more about project billing, ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/verify-billing-enabled"},"see the BigQuery docs"),"."),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Table name."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta updates."),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use standard or ",(0,r.kt)("a",{parentName:"td",href:"#delta-updates"},"delta updates")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h3",{id:"shard-configuration"},"Shard configuration"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Beta")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"UI controls for this workflow will be added to the Flow web app soon.\nFor now, you must edit the materialization specification manually, either in the web app or using the CLI."))),(0,r.kt)("p",null,"To avoid exceeding your BigQuery tables' daily operation limits as discussed in ",(0,r.kt)("a",{parentName:"p",href:"#performance-considerations"},"Performance considerations"),",\ncomplete the following steps when configuring your materialization:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("a",{parentName:"p",href:"/guides/create-dataflow#create-a-materialization"},"Flow web application")," or the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/flowctl#working-with-drafts"},"flowctl CLI"),",\ncreate a draft materialization as you normally would."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If using the web app, input the required values and click ",(0,r.kt)("strong",{parentName:"li"},"Discover Endpoint"),"."),(0,r.kt)("li",{parentName:"ol"},"If using the flowctl, create your materialization specification manually."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("a",{parentName:"p",href:"/reference/Configuring-task-shards"},(0,r.kt)("inlineCode",{parentName:"a"},"shards")," configuration")," to the materialization specification at the same indentation level as ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings"),".\nSet the ",(0,r.kt)("inlineCode",{parentName:"p"},"minTxnDuration")," property to at least ",(0,r.kt)("inlineCode",{parentName:"p"},"1m")," (we recommend ",(0,r.kt)("inlineCode",{parentName:"p"},"2m"),").\nIn the web app, you do this in the Catalog Editor."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shards:\n  minTxnDuration: 2m\n")),(0,r.kt)("p",{parentName:"li"},"   A full sample is included ",(0,r.kt)("a",{parentName:"p",href:"#sample"},"below"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Continue to test, save, and publish the materialization as usual."))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        config:\n          project_id: our-bigquery-project\n          dataset: materialized-data\n          region: US\n          bucket: our-gcs-bucket\n          bucket_path: bucket-path/\n          credentials_json: <secret>\n        image: ghcr.io/estuary/materialize-bigquery:dev\n    bindings:\n    - resource:\n        table: ${table_name}\n      source: ${PREFIX}/${source_collection}\n    shards:\n      minTxnDuration: 2m\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard (merge) and ",(0,r.kt)("a",{parentName:"p",href:"/concepts/materialization#delta-updates"},"delta updates"),".\nThe default is to use standard updates."),(0,r.kt)("p",null,"Enabling delta updates will prevent Flow from querying for documents in your BigQuery table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in BigQuery won't be fully reduced."),(0,r.kt)("p",null,"You can enable delta updates on a per-binding basis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"    bindings:\n    - resource:\n        table: ${table_name}\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n")))}d.isMDXComponent=!0}}]);