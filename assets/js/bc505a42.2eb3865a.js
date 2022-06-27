"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[229],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:13},s=void 0,p={unversionedId:"reference/Connectors/capture-connectors/MySQL",id:"reference/Connectors/capture-connectors/MySQL",title:"MySQL",description:"This is a change data capture (CDC) connector that captures change events from a MySQL database via the Binary Log.",source:"@site/docs/reference/Connectors/capture-connectors/MySQL.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/MySQL",permalink:"/reference/Connectors/capture-connectors/MySQL",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/MySQL.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Mailchimp",permalink:"/reference/Connectors/capture-connectors/mailchimp"},next:{title:"PostgreSQL",permalink:"/reference/Connectors/capture-connectors/PostgreSQL"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"MySQL on managed cloud platforms",id:"mysql-on-managed-cloud-platforms",level:2},{value:"Amazon RDS",id:"amazon-rds",level:3},{value:"Setup",id:"setup-1",level:4},{value:"Google Cloud SQL",id:"google-cloud-sql",level:3},{value:"Setup",id:"setup-2",level:4},{value:"Azure Database for MySQL",id:"azure-database-for-mysql",level:3},{value:"Setup",id:"setup-3",level:4},{value:"Troubleshooting Capture Errors",id:"troubleshooting-capture-errors",level:2},{value:"Unsupported Operations",id:"unsupported-operations",level:3},{value:"Data Manipulation Queries",id:"data-manipulation-queries",level:3},{value:"Unhandled Queries",id:"unhandled-queries",level:3},{value:"Metadata Errors",id:"metadata-errors",level:3},{value:"Insufficient Binlog Retention",id:"insufficient-binlog-retention",level:3}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a change data capture (CDC) connector that captures change events from a MySQL database via the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/binary-log.html"},"Binary Log"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-mysql"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-mysql:dev"))," provides the latest connector image.\nYou can also follow the link in your browser to see past image versions."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use this connector, you'll need a MySQL database setup with the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_format"},(0,i.kt)("inlineCode",{parentName:"a"},"binlog_format")),"\nsystem variable set to ",(0,i.kt)("inlineCode",{parentName:"li"},"ROW")," (the default value)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_binlog_expire_logs_seconds"},"Binary log expiration period")," set to MySQL's default value of 30 days (2592000 seconds) if at all possible.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This value may be set lower if necessary, but we ",(0,i.kt)("a",{parentName:"li",href:"#insufficient-binlog-retention"},"strongly discourage")," going below 7 days as this may increase the likelihood of unrecoverable failures."))),(0,i.kt)("li",{parentName:"ul"},'A watermarks table. The watermarks table is a small "scratch space"\nto which the connector occasionally writes a small amount of data (a UUID,\nspecifically) to ensure accuracy when backfilling preexisting table contents.',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The default name is ",(0,i.kt)("inlineCode",{parentName:"li"},'"flow.watermarks"'),", but this can be overridden in ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json"),"."))),(0,i.kt)("li",{parentName:"ul"},"A database user with appropriate permissions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REPLICATION CLIENT")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLICATION SLAVE")," privileges."),(0,i.kt)("li",{parentName:"ul"},"Permission to insert, update, and delete on the watermarks table."),(0,i.kt)("li",{parentName:"ul"},"Permission to read the tables being captured."),(0,i.kt)("li",{parentName:"ul"},"Permission to read from ",(0,i.kt)("inlineCode",{parentName:"li"},"information_schema")," tables, if automatic discovery is used.")))),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To meet these requirements, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the watermarks table. This table can have any name and be in any database, so long as ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," is modified accordingly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"flow_capture")," user with replication permission, the ability to read all tables, and the ability to read and write the watermarks table."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," permission can be restricted to just the tables that need to be\ncaptured, but automatic discovery requires ",(0,i.kt)("inlineCode",{parentName:"p"},"information_schema")," access as well."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Configure the binary log to retain data for the default MySQL setting of 30 days, if previously set lower.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET PERSIST binlog_expire_logs_seconds = 2592000;\n")),(0,i.kt)("h2",{id:"backfills-and-performance-considerations"},"Backfills and performance considerations"),(0,i.kt)("p",null,"When the a MySQL capture is initiated, by default, the connector first ",(0,i.kt)("em",{parentName:"p"},"backfills"),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."),(0,i.kt)("p",null,"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."),(0,i.kt)("p",null,"In this case, you may turn of backfilling on a per-table basis. See ",(0,i.kt)("a",{parentName:"p",href:"#properties"},"properties")," for details."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog spec YAML.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and YAML sample below provide configuration details specific to the MySQL source connector."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("h4",{id:"endpoint"},"Endpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,i.kt)("td",{parentName:"tr",align:null},"Server Address"),(0,i.kt)("td",{parentName:"tr",align:null},"The host or host:port at which the database can be reached."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,i.kt)("td",{parentName:"tr",align:null},"Login User"),(0,i.kt)("td",{parentName:"tr",align:null},"The database user to authenticate as."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, ",(0,i.kt)("inlineCode",{parentName:"td"},'"flow_capture"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,i.kt)("td",{parentName:"tr",align:null},"Login Password"),(0,i.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advanced/watermarks_table")),(0,i.kt)("td",{parentName:"tr",align:null},"Watermarks Table Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes. Must be fully-qualified in ","'","<","schema",">",".","<","table",">","'"," form."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"flow.watermarks"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advanced/dbname")),(0,i.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of database to connect to. In general this shouldn","'","t matter. The connector can discover and capture from all databases it","'","s authorized to access."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"mysql"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advanced/node_id")),(0,i.kt)("td",{parentName:"tr",align:null},"Node ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Node ID for the capture. Each node in a replication cluster must have a unique 32-bit ID. The specific value doesn","'","t matter so long as it is unique. If unset or zero the connector will pick a value."),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advanced/skip_backfills")),(0,i.kt)("td",{parentName:"tr",align:null},"Skip Backfills"),(0,i.kt)("td",{parentName:"tr",align:null},"A comma-separated list of fully-qualified table names which should not be backfilled."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/advanced/skip_binlog_retention_check")),(0,i.kt)("td",{parentName:"tr",align:null},"Skip Binlog Retention Sanity Check"),(0,i.kt)("td",{parentName:"tr",align:null},"Bypasses the ","'","dangerously short binlog retention","'"," sanity check at startup. Only do this if you understand the danger and have a specific need."),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h4",{id:"bindings"},"Bindings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,i.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc/refman/8.0/en/show-databases.html"},"database/schema")," in which the table resides."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,i.kt)("td",{parentName:"tr",align:null},"Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the table to be captured from the database."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,i.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,i.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When you configure this connector in the web application, the automatic ",(0,i.kt)("strong",{parentName:"p"},"discovery")," process sets up a binding for ",(0,i.kt)("em",{parentName:"p"},"most")," tables it finds in your database, but there are exceptions."),(0,i.kt)("p",{parentName:"div"},"Tables in the MySQL system schemas ",(0,i.kt)("inlineCode",{parentName:"p"},"information_schema"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"performance_schema"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"sys")," will not be discovered.\nYou can add bindings for such tables manually."))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("p",null,"A minimal capture definition will look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mysql:dev\n        config:\n          address: "127.0.0.1:3306"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          namespace: ${TABLE_NAMESPACE}\n          stream: ${TABLE_NAME}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n')),(0,i.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."),(0,i.kt)("h2",{id:"mysql-on-managed-cloud-platforms"},"MySQL on managed cloud platforms"),(0,i.kt)("p",null,"In addition to standard MySQL, this connector supports cloud-based MySQL instances on certain platforms."),(0,i.kt)("h3",{id:"amazon-rds"},"Amazon RDS"),(0,i.kt)("p",null,"You can use this connector for MySQL instances on Amazon RDS using the following setup instructions."),(0,i.kt)("p",null,"Estuary recommends creating a ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds/features/read-replicas/"},"read replica"),"\nin RDS for use with Flow; however, it's not required.\nYou're able to apply the connector directly to the primary instance if you'd like."),(0,i.kt)("h4",{id:"setup-1"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nEstuary recommends SSH tunneling to allow this.\nFollow the guide to ",(0,i.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a RDS parameter group to enable replication in MySQL."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Creating"},"Create a parameter group"),".\nCreate a unique name and description and set the following properties:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Family"),": mysql 8.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type"),": DB Parameter group"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Modifying"},"Modify the new parameter group")," and update the following parameters:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"binlog_format: ROW"),(0,i.kt)("li",{parentName:"ul"},"binlog_row_metadata: FULL"),(0,i.kt)("li",{parentName:"ul"},"read_only: 0"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If using the primary instance  (not recommended), ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Associating"},"associate the  parameter group"),"\nwith the database and set ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.Enabling"},"Backup Retention Period")," to 7 days.\nReboot the database to allow the changes to take effect.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a read replica with the new parameter group applied (recommended)."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create"},"Create a read replica"),"\nof your MySQL database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html"},"Modify the replica"),"\nand set the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DB parameter group"),": choose the parameter group you created previously"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Backup retention period"),": 7 days"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reboot the replica to allow the changes to take effect.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to your MySQL client. Run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\nCREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Run the following command to set the binary log retention to 7 days, the maximum value which RDS MySQL permits:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CALL mysql.rds_set_configuration('binlog retention hours', 168);\n")),(0,i.kt)("h3",{id:"google-cloud-sql"},"Google Cloud SQL"),(0,i.kt)("p",null,"You can use this connector for MySQL instances on Google Cloud SQL using the following setup instructions."),(0,i.kt)("h4",{id:"setup-2"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nEstuary recommends SSH tunneling to allow this.\nFollow the guide to ",(0,i.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds")," ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/flags?_ga=2.8077298.-1359189752.1655241239&_gac=1.226418280.1655849730.Cj0KCQjw2MWVBhCQARIsAIjbwoOczKklaVaykkUiCMZ4n3_jVtsInpmlugWN92zx6rL5i7zTxm3AALIaAv6nEALw_wcB"},"flag"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"2592000"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/mysql/connect-instance-cloud-shell"},"Google Cloud Shell")," or your preferred client, create the watermarks table."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"flow_capture")," user with replication permission, the ability to read all tables, and the ability to read and write the watermarks table."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," permission can be restricted to just the tables that need to be\ncaptured, but automatic discovery requires ",(0,i.kt)("inlineCode",{parentName:"p"},"information_schema")," access as well."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,i.kt)("h3",{id:"azure-database-for-mysql"},"Azure Database for MySQL"),(0,i.kt)("p",null,"You can use this connector for MySQL instances on Azure Database for MySQL using the following setup instructions."),(0,i.kt)("h4",{id:"setup-3"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You'll need to configure secure access to the database to enable the Flow capture.\nEstuary recommends SSH tunneling to allow this.\nFollow the guide to ",(0,i.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/mysql/single-server/concepts-server-parameters#configurable-server-parameters"},"server perameter"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"2592000"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/mysql/single-server/connect-workbench"},"MySQL workbench")," or your preferred client, create the watermarks table."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your username must be specified in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"username@servername"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"flow_capture")," user with replication permission, the ability to read all tables, and the ability to read and write the watermarks table."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," permission can be restricted to just the tables that need to be\ncaptured, but automatic discovery requires ",(0,i.kt)("inlineCode",{parentName:"p"},"information_schema")," access as well."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\n  COMMENT 'User account for Flow MySQL data capture';\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,i.kt)("h2",{id:"troubleshooting-capture-errors"},"Troubleshooting Capture Errors"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"source-mysql")," connector is designed to halt immediately if something wrong or unexpected happens, instead of continuing on and potentially outputting incorrect data. What follows is a non-exhaustive list of some potential failure modes, and what action should be taken to fix these situations:"),(0,i.kt)("h3",{id:"unsupported-operations"},"Unsupported Operations"),(0,i.kt)("p",null,"If your capture is failing with an ",(0,i.kt)("inlineCode",{parentName:"p"},'"unsupported operation {ALTER,DROP,TRUNCATE,etc} TABLE"')," error, this indicates that such an operation has taken place impacting a table which is currently being captured."),(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," and other destructive operations this is not supported, and can only be resolved by removing the offending table(s) from the capture bindings list, after which you may recreate the capture if desired (causing the latest state of the table to be recaptured in its entirety)."),(0,i.kt)("p",null,"In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," query we intend to support a limited subset of table alterations in the future, however this error indicates that whatever alteration took place is not currently supported. Practically speaking the immediate resolution is the same as for a ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE"),", but if you frequently perform schema migrations it may be worth reaching out to see if we can add support for whatever table alteration you just did."),(0,i.kt)("h3",{id:"data-manipulation-queries"},"Data Manipulation Queries"),(0,i.kt)("p",null,"If your capture is failing with an ",(0,i.kt)("inlineCode",{parentName:"p"},'"unsupported DML query"')," error, this means that an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," or other data manipulation query is present in the MySQL binlog. This should generally not happen if ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog_format = 'ROW'")," as described in the ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section."),(0,i.kt)("p",null,"Resolving this error requires fixing the ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog_format")," system variable, and then either tearing down and recreating the entire capture so that it restarts at a later point in the binlog, or in the case of an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," query it may suffice to remove the capture binding for the offending table and then re-add it."),(0,i.kt)("h3",{id:"unhandled-queries"},"Unhandled Queries"),(0,i.kt)("p",null,"If your capture is failing with an ",(0,i.kt)("inlineCode",{parentName:"p"},'"unhandled query"')," error, some SQL query is present in the binlog which the connector does not (currently) understand."),(0,i.kt)("p",null,"In general, this error suggests that the connector should be modified to at least recognize this type of query, and most likely categorize it as either an unsupported ",(0,i.kt)("a",{parentName:"p",href:"#data-manipulation-queries"},"DML Query"),", an unsupported ",(0,i.kt)("a",{parentName:"p",href:"#unsupported-operations"},"Table Operation"),", or something that can safely be ignored. Until such a fix is made the capture cannot proceed, and you will need to tear down and recreate the entire capture so that it restarts from a later point in the binlog."),(0,i.kt)("h3",{id:"metadata-errors"},"Metadata Errors"),(0,i.kt)("p",null,"If your capture is failing with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"metadata error"')," then something has gone badly wrong with the capture's tracking of table metadata, such as column names or datatypes."),(0,i.kt)("p",null,"This should never happen, and most likely means that the MySQL binlog itself is corrupt in some way. If this occurs, it can be resolved by removing the offending table(s) from the capture bindings list and then recreating the capture (generally into a new collection, as this process will cause the table to be re-captured in its entirety)."),(0,i.kt)("h3",{id:"insufficient-binlog-retention"},"Insufficient Binlog Retention"),(0,i.kt)("p",null,"If your capture fails with a ",(0,i.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error, it is informing you that the MySQL binlog retention period is set to a dangerously low value, and your capture would risk unrecoverable failure if it were paused or the server became unreachable for a nontrivial amount of time, such that the database expired a binlog segment that the capture was still reading from."),(0,i.kt)("p",null,"(If this were to happen, then change events would be permanently lost and that particular capture would never be able to make progress without potentially producing incorrect data. Thus the capture would need to be torn down and recreated so that each table could be re-captured in its entirety, starting with a complete backfill of current contents.)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error should normally be fixed by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds = 2592000")," as described in the ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section (and when running on a managed cloud platform additional steps may be required, refer to the managed cloud setup instructions above). However, advanced users who understand the risks can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_binlog_retention_check")," configuration option to disable this safety."))}m.isMDXComponent=!0}}]);