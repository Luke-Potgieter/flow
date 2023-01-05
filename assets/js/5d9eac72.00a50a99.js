"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2971],{1504:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(7273);i.Z.initialize({startOnLoad:!0});const o=e=>{let{chart:t}=e;return(0,a.useEffect)((()=>{i.Z.contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),o=n(1504);const r={},s="Materialization Protocol",l={unversionedId:"reference/Connectors/materialization-protocol",id:"reference/Connectors/materialization-protocol",title:"Materialization Protocol",description:"Materializations are processed as cooperative transactions between the Flow",source:"@site/docs/reference/Connectors/materialization-protocol.md",sourceDirName:"reference/Connectors",slug:"/reference/Connectors/materialization-protocol",permalink:"/reference/Connectors/materialization-protocol",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TimescaleDB",permalink:"/reference/Connectors/materialization-connectors/timescaledb"},next:{title:"Authorizing users and authenticating with Flow",permalink:"/reference/authentication"}},d={},c=[{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Exactly-Once Semantics",id:"exactly-once-semantics",level:2},{value:"Common Implementation Patterns",id:"common-implementation-patterns",level:2},{value:"Remote Store is Authoritative",id:"remote-store-is-authoritative",level:3},{value:"Recovery Log with Non-Transactional Store",id:"recovery-log-with-non-transactional-store",level:3},{value:"Recovery Log with Idempotent Apply",id:"recovery-log-with-idempotent-apply",level:3},{value:"Push-only Endpoints &amp; Delta Updates",id:"push-only-endpoints--delta-updates",level:3},{value:"Protocol Phases",id:"protocol-phases",level:2},{value:"Acknowledge",id:"acknowledge",level:3},{value:"Load",id:"load",level:3},{value:"Store",id:"store",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"materialization-protocol"},"Materialization Protocol"),(0,i.kt)("p",null,"Materializations are processed as cooperative transactions between the Flow\nRuntime and a connector Driver, over a long-lived RPC through which the Runtime\nand Driver exchange messages."),(0,i.kt)("p",null,"This RPC workflow maintains a materialized view of a Flow collection in an\nexternal system. It has distinct acknowledge, load, and store phases.\nThe Flow runtime and driver cooperatively maintain a fully-reduced view of each\ndocument by loading current states from the store, reducing in a number of\nupdates, and then storing updated documents and checkpoints."),(0,i.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,i.kt)("p",null,"As a convention and to reduce ambiguity, message types from the Runtime are\nnamed in an imperative fashion (",(0,i.kt)("inlineCode",{parentName:"p"},"Load"),"), while responses from the driver always\nhave a past-tense name (",(0,i.kt)("inlineCode",{parentName:"p"},"Loaded"),"):"),(0,i.kt)(o.Z,{chart:"\n  sequenceDiagram\n    Runtime->>Driver: Open{MaterializationSpec, driverCP}\n    Note right of Driver: Connect to endpoint.<br/>Optionally fetch last-committed<br/>runtime checkpoint.\n    Driver->>Runtime: Opened{runtimeCP}\n    Note over Runtime, Driver: One-time initialization \u261d\ufe0f.<br/> \ud83d\udc47 Repeats for each transaction.\n    Note left of Runtime: Prior txn commits<br/>to recovery log.\n    Note right of Driver: Prior txn commits to DB<br/>(where applicable).\n    Runtime->>Driver: Acknowledge\n    Note right of Runtime: Acknowledged MAY be sent<br/>before Acknowledge.\n    Note right of Driver: MAY perform an idempotent<br/>apply of last txn.\n    Note left of Runtime: Runtime does NOT await<br/>Acknowledged before<br/>proceeding to send Load.\n    Driver->>Runtime: Acknowledged\n    Note left of Runtime: Runtime may now finalize<br/>a pipelined transaction.\n    Note over Runtime, Driver: End of Acknowledge phase.\n    Runtime->>Driver: Load<A>\n    Note left of Runtime: Load keys may<br/> not exist (yet).\n    Runtime->>Driver: Load<B>\n    Note right of Driver: MAY evaluate Load immediately,<br/>or stage for deferred retrieval.\n    Driver->>Runtime: Loaded<A>\n    Runtime->>Driver: Load<C>\n    Runtime->>Driver: Flush\n    Driver->>Runtime: Loaded<C>\n    Note right of Driver: Omits Loaded for keys<br/>that don't exist.\n    Driver->>Runtime: Flushed\n    Note left of Runtime: All existing keys<br/>have been retrieved.\n    Note over Runtime, Driver: End of Load phase.\n    Runtime->>Driver: Store<X>\n    Runtime->>Driver: Store<Y>\n    Runtime->>Driver: Store<Z>\n    Runtime->>Driver: StartCommit{runtimeCP}\n    Note right of Driver: * Completes all Store processing.<br/>* MAY include runtimeCP in DB txn.\n    Note right of Driver: Commit to DB<br/>now underway.\n    Driver->>Runtime: StartedCommit{driverCP}\n    Note left of Runtime: Begins commit to<br/> recovery log.\n    Note over Runtime, Driver: End of Store phase. Loops around<br/>to Acknowledge <=> Acknowledged.\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"exactly-once-semantics"},"Exactly-Once Semantics"),(0,i.kt)("p",null,"The central tenant of transactional materializations is this:\nthere is a consumption checkpoint, and there is a state of the view.\nAs the materialization progresses, both the checkpoint and the view state will change.\nUpdates to the checkpoint and to the view state MUST always commit together,\nin the exact same transaction."),(0,i.kt)("p",null,"Flow materialization tasks have a backing transactional recovery log,\nwhich is capable of durable commits that update both the checkpoint and also a\n(reasonably small) driver-defined state. More on driver states later."),(0,i.kt)("p",null,"Many interesting endpoint systems are also fully transactional in nature."),(0,i.kt)("p",null,"When implementing a materialization driver, the first question an implementor\nmust answer is: whose commit is authoritative?\nFlow's recovery log, or the materialized system?\nThis protocol supports either."),(0,i.kt)("h2",{id:"common-implementation-patterns"},"Common Implementation Patterns"),(0,i.kt)("p",null,"There are a few common implementation patterns for materializations. The choice\nof pattern depends on the transaction capabilities of the remote endpoint."),(0,i.kt)("h3",{id:"remote-store-is-authoritative"},"Remote Store is Authoritative"),(0,i.kt)("p",null,"In this pattern, the remote store (for example, a database) persists view states\nand the Flow consumption checkpoints which those views reflect. There are many\nsuch checkpoints: one per task split, and in this pattern the Flow recovery log\nis effectively ignored."),(0,i.kt)("p",null,"Typically this workflow runs in the context of a synchronous ",(0,i.kt)("inlineCode",{parentName:"p"},"BEGIN/COMMIT"),"\ntransaction, which updates table states and a Flow checkpoint together. The\ntransaction need be scoped only to the store phase of this workflow, as the\nmaterialization protocol requires only read-committed isolation semantics."),(0,i.kt)("p",null,'Flow is a distributed system, and an important consideration is the effect of a\n"zombie" assignment of a materialization task, which can race a newly-promoted\nassignment of that same task.'),(0,i.kt)("p",null,'Fencing is a technique which uses the transactional capabilities of a store to\n"fence off" an older zombie assignment, such that it\'s prevented from committing\nfurther transactions. This avoids a failure mode where:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New assignment N recovers a checkpoint at Ti."),(0,i.kt)("li",{parentName:"ul"},"Zombie assignment Z commits another transaction at Ti+1."),(0,i.kt)("li",{parentName:"ul"},"N beings processing from Ti, inadvertently duplicating the effects of Ti+1.")),(0,i.kt)("p",null,"When a remote store is authoritative, it must implement fencing behavior. As a\nsketch, the store can maintain a nonce value alongside the checkpoint of each\ntask split. The nonce is updated on each open of this RPC, and each commit\ntransaction then verifies that the nonce has not been changed."),(0,i.kt)("p",null,"In the future, if another RPC opens and updates the nonce, it fences off this\ninstance of the task split and prevents it from committing further transactions."),(0,i.kt)("h3",{id:"recovery-log-with-non-transactional-store"},"Recovery Log with Non-Transactional Store"),(0,i.kt)("p",null,"In this pattern, the runtime's recovery log persists the Flow checkpoint and\nhandles fencing semantics. During the Load and Store phases, the driver directly\nmanipulates a non-transactional store or API, such as a key/value store."),(0,i.kt)("p",null,"Note that this pattern is at-least-once. A transaction may fail part-way through\nand be restarted, causing its effects to be partially or fully replayed."),(0,i.kt)("p",null,"Care must be taken if the collection's schema has reduction annotations such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"sum"),", as those reductions may be applied more than once due to a partially\ncompleted, but ultimately failed transaction."),(0,i.kt)("p",null,"If the collection's schema is last-write-wins, this mode still provides\neffectively-once behavior. Collections which aren't last-write-wins can be\nturned into last-write-wins through the use of derivations."),(0,i.kt)("h3",{id:"recovery-log-with-idempotent-apply"},"Recovery Log with Idempotent Apply"),(0,i.kt)("p",null,"In this pattern the recovery log is authoritative, but the driver uses external\nstable storage to stage the effects of a transaction -- rather than directly\napplying them to the store -- such that those effects can be idempotently\napplied after the transaction commits."),(0,i.kt)("p",null,"This allows stores which feature a weaker transaction guarantee to still be\nused in an exactly-once way, so long as they support an idempotent apply\noperation."),(0,i.kt)("p",null,'Driver checkpoints can facilitate this pattern. For example, a driver might\ngenerate a unique filename in S3 and reference it in its prepared checkpoint,\nwhich is committed to the recovery log. During the "store" phase, it writes to\nthis S3 file. After the transaction commits, it tells the store of the new file\nto incorporate. The store must handle idempotency, by applying the effects of\nthe unique file just once, even if told of the file multiple times.'),(0,i.kt)("p",null,"A related extension of this pattern is for the driver to embed a Flow checkpoint\ninto its driver checkpoint. Doing so allows the driver to express an intention\nto restart from an older alternative checkpoint, as compared to the most recent\ncommitted checkpoint of the recovery log."),(0,i.kt)("p",null,"As mentioned above, it's crucial that store states and checkpoints commit\ntogether. While seemingly bending that rule, this pattern is consistent with it\nbecause, on commit, the semantic contents of the store include BOTH its base\nstate, as well as the staged idempotent update. The store just may not know it\nyet, but eventually it must because of the retried idempotent apply."),(0,i.kt)("p",null,"Note the driver must therefore ensure that staged updates are fully applied\nbefore returning ",(0,i.kt)("inlineCode",{parentName:"p"},"Loaded")," responses, in order to provide the correct\nread-committed semantics required by the Flow runtime."),(0,i.kt)("h3",{id:"push-only-endpoints--delta-updates"},"Push-only Endpoints & Delta Updates"),(0,i.kt)("p",null,'Some systems, such as APIs, Webhooks, and Pub/Sub, are push-only in nature. Flow\nmaterializations can run in a "delta updates" mode, where loads are always\nskipped and Flow does not attempt to store fully-reduced documents. Instead,\nduring the store phase, the runtime sends delta updates which reflect the\ncombined roll-up of collection documents processed only within this transaction.'),(0,i.kt)("p",null,"To illustrate the meaning of a delta update, consider documents which are simple\ncounters, having a collection schema that uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," reduction strategy."),(0,i.kt)("p",null,"Without delta updates, Flow would reduce documents -1, 3, and 2 by ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," to\narrive at document 4, which is stored. The next transaction, document 4 is\nloaded and reduced with 6, -7, and -1 to arrive at a new stored document 2. This\ndocument, 2, represents the full reduction of the collection documents\nmaterialized thus far."),(0,i.kt)("p",null,"Compare to delta updates mode: collection documents -1, 3, and 2 are combined to\nstore a delta-update document of 4. The next transaction starts anew, and 6, -7,\nand -1 combine to arrive at a delta-update document of -2. These delta updates\nare a windowed combine over documents seen in the current transaction only, and\nunlike before are not a full reduction of the document. If delta updates were\nwritten to pub/sub, note that a subscriber could further reduce over each delta\nupdate to recover the fully reduced document of 2."),(0,i.kt)("p",null,"Note that many use cases require only ",(0,i.kt)("inlineCode",{parentName:"p"},"lastWriteWins"),' reduction behavior, and\nfor these use cases delta updates does the "right thing" by trivially re-writing\neach document with its most recent version. This matches the behavior of Kafka\nConnect, for example.'),(0,i.kt)("h2",{id:"protocol-phases"},"Protocol Phases"),(0,i.kt)("h3",{id:"acknowledge"},"Acknowledge"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledge")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," are always the first messages sent every\ntransaction, including the very first transaction of an RPC. The Runtime sends\n",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledge")," to indicate that the last transaction has committed to the\nrecovery log. The Driver sends ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," to indicate that its endpoint\ntransaction has committed."),(0,i.kt)("p",null,"Acknowledge and Acknowledged ",(0,i.kt)("em",{parentName:"p"},"are not ordered"),". Acknowledged may be sent before\nAcknowledge and vice versa."),(0,i.kt)("p",null,"The Runtime ",(0,i.kt)("em",{parentName:"p"},"does not")," wait for ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," before sending ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages.\nIn most cases the Driver should simply not read these ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages until it\nhas completed its own commit and sent its own ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged"),"."),(0,i.kt)("p",null,"A Driver MAY instead process its commit and acknowledgment in the background\nwhile actively reading ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages. It MUST NOT evaluate ",(0,i.kt)("inlineCode",{parentName:"p"},"Load"),"s yet, as\nthis could otherwise be a violation of read-committed semantics, but it MAY\nstage them for deferred evaluation. This is ",(0,i.kt)("strong",{parentName:"p"},"recommended")," for Drivers that\nhave very long commit and/or acknowledgement operations. While a background\ncommit progresses the Flow runtime will optimistically pipeline the next\ntransaction, processing documents and preparing for when the Driver sends\n",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged"),"."),(0,i.kt)("p",null,'Drivers following the "Recovery Log with Idempotent Apply" pattern must take\ncare to properly handle the very first acknowledgement phase of an RPC. At\nstartup, a driver cannot know if the last commit has been acknowledged. For\nexample, a previous RPC invocation may have failed immediately after commit but\nprior to acknowledgement. The Driver must thus idempotent-ly apply or re-apply\nchanges staged by a prior Driver invocation, and reply with ',(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," only\nonce done."),(0,i.kt)("p",null,"Drivers with transactional semantics SHOULD send Acknowledged immediately after\na previous, started commit completes."),(0,i.kt)("p",null,"Drivers with at-least-once semantics SHOULD send Acknowledged immediately after\nsending StartedCommit."),(0,i.kt)("h3",{id:"load"},"Load"),(0,i.kt)("p",null,"Zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages are sent by the Runtime with documents to fetch. A\ngiven document key will appear at most once in a transaction, and will not be\nrepeated across ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages."),(0,i.kt)("p",null,"Drivers may immediately evaluate each ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," and respond, or may queue many keys\nto load and defer their evaluation. The Runtime does not await any individual\n",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," requests."),(0,i.kt)("p",null,"After the previous transaction has fully completed, and the driver has sent\n",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," to the Runtime, the current transaction may begin to close."),(0,i.kt)("p",null,"The Runtime indicates this by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"Flush")," message, which is NEVER sent\nbefore ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," is received. ",(0,i.kt)("inlineCode",{parentName:"p"},"Acknowledged")," is thus an important signal as\nto when the Runtime may begin to finalize an optimistic, pipelined transaction."),(0,i.kt)("p",null,"On reading ",(0,i.kt)("inlineCode",{parentName:"p"},"Flush"),", Drivers must process all remaining ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," messages,\nincluding any deferred evaluations, and send all ",(0,i.kt)("inlineCode",{parentName:"p"},"Loaded")," responses prior to\nsending its own ",(0,i.kt)("inlineCode",{parentName:"p"},"Flushed")," response."),(0,i.kt)("p",null,"This signals to the Runtime that all documents which can be loaded ",(0,i.kt)("em",{parentName:"p"},"have")," been\nloaded, and the transaction proceeds to the Store phase."),(0,i.kt)("p",null,"Materialization bindings which are processing in delta-updates mode will never\nreceive a ",(0,i.kt)("inlineCode",{parentName:"p"},"Load")," message, but will receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"Flush")," and must still respond with\n",(0,i.kt)("inlineCode",{parentName:"p"},"Flushed"),"."),(0,i.kt)("h3",{id:"store"},"Store"),(0,i.kt)("p",null,"Zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," messages are sent by the Runtime to the Driver, indicating\nkeys, documents, and extracted fields to store. No response is required of the\nDriver for these messages."),(0,i.kt)("p",null,"Once all documents have been stored, the Runtime sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"StartCommit")," message\nwhich carries its opaque runtime checkpoint."),(0,i.kt)("p",null,'Drivers implementing the "Remote Store is Authoritative" pattern must include\nthe runtime checkpoint in its current transaction, for retrieval in a future\nOpen of a new transactions RPC. Other driver patterns MAY ignore this\ncheckpoint.'),(0,i.kt)("p",null,"On reading ",(0,i.kt)("inlineCode",{parentName:"p"},"StartCommit")," the driver ensures that all ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," messages have been\nprocessed. It begins to commit its own transaction (where applicable), and then\nresponds with ",(0,i.kt)("inlineCode",{parentName:"p"},"StartedCommit")," which contain an update to the driver's\ncheckpoint."),(0,i.kt)("p",null,"On the Runtime's receipt of ",(0,i.kt)("inlineCode",{parentName:"p"},"StartedCommit"),", the Runtime now knows that all\n",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," messages have been fully processed. It preserves the updated Driver\ncheckpoint in its recovery log and begins to commit."),(0,i.kt)("p",null,"From here, the protocol loops back around to the Acknowledge phase."))}p.isMDXComponent=!0}}]);