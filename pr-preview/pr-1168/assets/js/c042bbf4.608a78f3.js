"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:8},i="Configure connections with SSH tunneling",s={unversionedId:"guides/connect-network",id:"guides/connect-network",title:"Configure connections with SSH tunneling",description:"Flow connects to certain types of endpoints \u2014 generally databases \u2014 using their IP address and port.",source:"@site/docs/guides/connect-network.md",sourceDirName:"guides",slug:"/guides/connect-network",permalink:"/pr-preview/pr-1168/guides/connect-network",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/connect-network.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Troubleshoot a task with flowctl",permalink:"/pr-preview/pr-1168/guides/flowctl/troubleshoot-task"},next:{title:"Customize materialized fields",permalink:"/pr-preview/pr-1168/guides/customize-materialization-fields"}},l={},p=[{value:"General setup",id:"general-setup",level:2},{value:"Setup for AWS",id:"setup-for-aws",level:2},{value:"Setup for Google Cloud",id:"setup-for-google-cloud",level:2},{value:"Setup for Azure",id:"setup-for-azure",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-connections-with-ssh-tunneling"},"Configure connections with SSH tunneling"),(0,r.kt)("p",null,"Flow connects to certain types of endpoints \u2014 generally databases \u2014 using their IP address and port.\nFor added security, you can configure ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/tunneling/example#local-forwarding"},"SSH tunneling"),", also known as port forwarding.\nYou configure this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"networkTunnel")," section of applicable capture or materialization definitions, but\nbefore you can do so, you need a properly configured SSH server on your internal network or cloud hosting platform."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If permitted by your organization, a quicker way to connect to a secure database is to whitelist the Estuary IP address, ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),".\nFor help completing this task on different cloud hosting platforms,\nsee the documentation for the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1168/reference/Connectors/"},"connector")," you're using.")),(0,r.kt)("p",null,"This guide includes setup steps for popular cloud platforms,\nas well as generalized setup that provides a basic roadmap for on-premise servers or other cloud platforms."),(0,r.kt)("p",null,"After completing the appropriate setup requirements, proceed to the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section\nto add your SSH server to your capture or materialization definition."),(0,r.kt)("h2",{id:"general-setup"},"General setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Activate an ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/server#availability-of-ssh-servers"},"SSH implementation on a server"),", if you don't have one already.\nConsult the documentation for your server's operating system and/or cloud service provider, as the steps will vary.\nConfigure the server to your organization's standards, or reference the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/sshd_config"},"SSH documentation")," for\nbasic configuration options.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Referencing the config files and shell output, collect the following information:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The SSH ",(0,r.kt)("strong",{parentName:"li"},"user"),", which will be used to log into the SSH server, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"sshuser"),". You may choose to create a new\nuser for this workflow."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"SSH endpoint")," for the SSH server, formatted as ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh://user@hostname[:port]"),". This may look like the any of following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssh://sshuser@ec2-198-21-98-1.compute-1.amazonaws.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssh://sshuser@198.21.98.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ssh://sshuser@198.21.98.1:22"),(0,r.kt)("admonition",{parentName:"li",title:"Hint",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/port"},"SSH default port is 22"),".\nDepending on where your server is hosted, you may not be required to specify a port,\nbut we recommend specifying ",(0,r.kt)("inlineCode",{parentName:"p"},":22")," in all cases to ensure a connection can be made.")))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----"),",\nwhich indicates it is an RSA-based file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no such file exists, generate one using the command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"   ssh-keygen -m PEM -t rsa\n"))),(0,r.kt)("li",{parentName:"ul"},"If a PEM file exists, but starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN OPENSSH PRIVATE KEY-----"),", convert it with the command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'   ssh-keygen -p -N "" -m pem -f /path/to/key\n')))),(0,r.kt)("p",{parentName:"li"},"Taken together, these configuration details would allow you to log into the SSH server from your local machine.\nThey'll allow the connector to do the same.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your internal network to allow the SSH server to access your capture or materialization endpoint.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your network to expose the SSH server endpoint to external traffic. The method you use\ndepends on your organization's IT policies. Currently, Estuary doesn't provide a list of static IPs for\nwhitelisting purposes, but if you require one, ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact Estuary support"),"."))),(0,r.kt)("h2",{id:"setup-for-aws"},"Setup for AWS"),(0,r.kt)("p",null,"To allow SSH tunneling to a database instance hosted on AWS, you'll need to create a virtual computing environment, or ",(0,r.kt)("em",{parentName:"p"},"instance"),", in Amazon EC2."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin by finding your public SSH key on your local machine.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----"),",\nwhich indicates it is an RSA-based file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no such file exists, generate one using the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"   ssh-keygen -m PEM -t rsa\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a PEM file exists, but starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN OPENSSH PRIVATE KEY-----"),", convert it with the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws"},"Import your SSH key into AWS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html"},"Launch a new instance in EC2"),". During setup:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configure the security group to allow SSH connection from anywhere."),(0,r.kt)("li",{parentName:"ul"},"When selecting a key pair, choose the key you just imported."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html"},"Connect to the instance"),",\nsetting the user name to ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2-user"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find and note the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html#vpc-dns-viewing"},"instance's public DNS"),". This will be formatted like: ",(0,r.kt)("inlineCode",{parentName:"p"},"ec2-198-21-98-1.compute-1.amazonaws.com"),"."))),(0,r.kt)("h2",{id:"setup-for-google-cloud"},"Setup for Google Cloud"),(0,r.kt)("p",null,"To allow SSH tunneling to a database instance hosted on Google Cloud, you must set up a virtual machine (VM)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin by finding your public SSH key on your local machine.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----"),",\nwhich indicates it is an RSA-based file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no such file exists, generate one using the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"   ssh-keygen -m PEM -t rsa\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a PEM file exists, but starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN OPENSSH PRIVATE KEY-----"),", convert it with the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'   ssh-keygen -p -N "" -m pem -f /path/to/key\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your Google login differs from your local username, generate a key that includes your Google email address as a comment:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"   ssh-keygen -m PEM -t rsa -C user@domain.com\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/create-start-instance"},"Create and start a new VM in GCP"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/images/os-details#user-space-features"},"choosing an image that supports OS Login"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/connect/add-ssh-keys"},"Add your public key to the VM"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address"},"Reserve an external IP address")," and connect it to the VM during setup.\nNote the generated address."))),(0,r.kt)("h2",{id:"setup-for-azure"},"Setup for Azure"),(0,r.kt)("p",null,"To allow SSH tunneling to a database instance hosted on Azure, you'll need to create a virtual machine (VM) in the same virtual network as your endpoint database."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin by finding your public SSH key on your local machine.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"-----BEGIN RSA PRIVATE KEY-----"),",\nwhich indicates it is an RSA-based file."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no such file exists, generate one using the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"   ssh-keygen -m PEM -t rsa\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a PEM file exists, but starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN OPENSSH PRIVATE KEY-----"),", convert it with the command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and connect to a VM in a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"},"virtual network"),", and add the endpoint database to the network."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal"},"Create a new virtual network and subnet"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal"},"Linux")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-portal"},"Windows")," VM within the virtual network,\ndirecting the SSH public key source to the public key you generated previously.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note the VM's public IP; you'll need this later.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a service endpoint for your database in the same virtual network as your VM.\nInstructions for Azure Database For PostgreSQL can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/postgresql/howto-manage-vnet-using-portal"},"here"),";\nnote that instructions for other database engines may be different."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"After you've completed the prerequisites, you should have the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SSH Endpoint")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"sshEndpoint"),": the remote SSH server's hostname, or public IP address, formatted as ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh://user@hostname[:port]")),(0,r.kt)("p",{parentName:"li"},"   The ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/port"},"SSH default port is 22"),".\nDepending on where your server is hosted, you may not be required to specify a port,\nbut we recommend specifying ",(0,r.kt)("inlineCode",{parentName:"p"},":22")," in all cases to ensure a connection can be made.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Private Key")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey"),": the contents of the SSH private key file"))),(0,r.kt)("p",null,"Use these to add SSH tunneling to your capture or materialization definition, either by filling in the corresponding fields\nin the web app, or by working with the YAML directly. Reference the ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/connectors/#connecting-to-endpoints-on-secure-networks"},"Connectors")," page for a YAML sample."))}m.isMDXComponent=!0}}]);