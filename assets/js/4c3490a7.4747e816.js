"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4974],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},821:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s=void 0,c={unversionedId:"reference/Connectors/capture-connectors/PostgreSQL",id:"reference/Connectors/capture-connectors/PostgreSQL",title:"PostgreSQL",description:"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/PostgreSQL.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/PostgreSQL",permalink:"/reference/Connectors/capture-connectors/PostgreSQL",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/PostgreSQL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/reference/Connectors/capture-connectors/MySQL"},next:{title:"Materialization connectors",permalink:"/reference/Connectors/materialization-connectors/"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Setup",id:"setup",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Values",id:"values",children:[],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ghcr.io/estuary/source-postgres:dev")," provides the latest connector image when using the Flow GitOps environment. You can also follow the link in your browser to see past image versions."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To use this connector, you'll need a PostgreSQL database setup with the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"Logical replication enabled")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"wal_level=logical")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createrole.html"},"User role")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"REPLICATION")," attribute"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/warm-standby.html#STREAMING-REPLICATION-SLOTS"},"replication slot"),". This represents a \u201ccursor\u201d into the PostgreSQL write-ahead log from which change events can be read.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional; if none exist, one will be created by the connector."))),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/sql-createpublication.html"},"publication"),". This represents the set of tables for which change events will be reported.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions."))),(0,l.kt)("li",{parentName:"ul"},"A watermarks table. The watermarks table is a small \u201cscratch space\u201d to which the connector occasionally writes a small amount of data to ensure accuracy when backfilling preexisting table contents.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In more restricted setups, this must be created manually, but can be created automatically if the connector has suitable permissions.")))),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("p",null,"The simplest way to meet the above prerequisites is to change the WAL level and have the connector use a database superuser role."),(0,l.kt)("p",null,"For a more restricted setup, create a new user with just the required permissions as detailed in the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new user and password:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER flow_capture WITH PASSWORD 'secret' REPLICATION;\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Assign the appropriate role."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If using PostgreSQL v14 or later:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT pg_read_all_data TO flow_capture;\n")),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"If using an earlier version:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON ALL TABLES IN SCHEMA public, <others> TO flow_capture;\nGRANT SELECT ON ALL TABLES IN SCHEMA information_schema, pg_catalog TO flow_capture;\n")),(0,l.kt)("p",{parentName:"li"},"where ",(0,l.kt)("inlineCode",{parentName:"p"},"<others>")," lists all schemas that will be captured from."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If an even more restricted set of permissions is desired, you can also grant SELECT on\njust the specific table(s) which should be captured from. The \u2018information_schema\u2019 and\n\u2018pg_catalog\u2019 access is required for stream auto-discovery, but not for capturing already\nconfigured streams.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the watermarks table, grant privileges, and create publication:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS public.flow_watermarks (slot TEXT PRIMARY KEY, watermark TEXT);\nGRANT ALL PRIVILEGES ON TABLE public.flow_watermarks TO flow_capture;\nCREATE PUBLICATION flow_publication FOR ALL TABLES;\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Set WAL level to logical:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM SET wal_level = logical;\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Restart PostgreSQL to allow the WAL level change to take effect.")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"There are various ways to configure and implement connectors. See ",(0,l.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about these methods. The values and code sample below provide configuration details specific to the PostgreSQL source connector."),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required/Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"database")),(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"postgres"')),(0,l.kt)("td",{parentName:"tr",align:null},"Logical database name to capture from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host")),(0,l.kt)("td",{parentName:"tr",align:null},"Host"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name of the database to connect to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"uint16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5432")),(0,l.kt)("td",{parentName:"tr",align:null},"Port on which to connect to the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"User"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"Database user to use.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Required"),(0,l.kt)("td",{parentName:"tr",align:null},"User password configured within the database.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"publication_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Publication Name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"flow_publication"')),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL publication to replicate from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slot_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Replication Slot Name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"flow_slot"')),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL replication slot to replicate from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"watermarks_table")),(0,l.kt)("td",{parentName:"tr",align:null},"Watermarks Table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"public.flow_watermarks"')),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes during backfills")))),(0,l.kt)("h3",{id:"sample"},"Sample"),(0,l.kt)("p",null,"A minimal capture definition within the catalog spec will look like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${tenant}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/source-postgres:dev"\n        config:\n          host: "localhost"\n          port: 5432\n          database: "flow"\n          user: "flow_capture"\n          password: "secret"\n          # slot_name: \u201cflow_slot\u201d                     # Default\n          # publication_name: \u201cflow_publication\u201d       # Default\n          # watermarks_table: \u201cpublic.flow_watermarks\u201d # Default\n    bindings:\n      - resource:\n          stream: ${TABLE_NAME}\n          namespace: ${TABLE_NAMESPACE}\n          syncMode: incremental\n        target: ${TENANT}/${COLLECTION_NAME}\n')),(0,l.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."))}m.isMDXComponent=!0}}]);