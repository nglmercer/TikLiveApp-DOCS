"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[472],{4483:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=a(4848),o=a(8453);const r={sidebar_position:4},s="Minecraft Archivado",t={id:"MinecraftLive/Minecraft Archived",title:"Minecraft Archivado",description:"Version Antigua Muestras de desarrollo antiguos que ya no se utilizan",source:"@site/docs/MinecraftLive/Minecraft Archived.mdx",sourceDirName:"MinecraftLive",slug:"/MinecraftLive/Minecraft Archived",permalink:"/TikLiveApp/en/docs/MinecraftLive/Minecraft Archived",draft:!1,unlisted:!1,editUrl:"https://github.com/nglmercer/TikLiveApp/tree/gh-pages/docs/MinecraftLive/Minecraft Archived.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Comandos y Recursos",permalink:"/TikLiveApp/en/docs/MinecraftLive/Minecraft Comandos+"},next:{title:"configurarci\xf3n Archivado",permalink:"/TikLiveApp/en/docs/MinecraftLive/Minecraft Live"}},d={},c=[{value:"Instalaci\xf3n y Configuraci\xf3n Inicial",id:"instalaci\xf3n-y-configuraci\xf3n-inicial",level:2},{value:"Modifique la Configuraci\xf3n:",id:"modifique-la-configuraci\xf3n",level:2},{value:"Iniciar el Programa:",id:"iniciar-el-programa",level:2},{value:"Yaml o json",id:"yaml-o-json",level:2},{value:"Codigo que se utilizaba",id:"codigo-que-se-utilizaba",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"minecraft-archivado",children:"Minecraft Archivado"}),"\n",(0,i.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,i.jsx)(n.p,{children:"Version Antigua Muestras de desarrollo antiguos que ya no se utilizan"})}),"\n",(0,i.jsx)(n.p,{children:"La version que fue primero y de donde esta basado"}),"\n",(0,i.jsx)(n.h2,{id:"instalaci\xf3n-y-configuraci\xf3n-inicial",children:"Instalaci\xf3n y Configuraci\xf3n Inicial"}),"\n",(0,i.jsx)(n.p,{children:"Descargue la version ...link... del codigo publicado"}),"\n",(0,i.jsx)(n.p,{children:"Instale Node.js: Descargue e instale Node.js."}),"\n",(0,i.jsx)(n.p,{children:"Instale Dependencias:"}),"\n",(0,i.jsx)(n.p,{children:"Ejecute install.bat para instalar las dependencias una vez, o ejecute el comando npm install en el CMD."}),"\n",(0,i.jsx)(n.p,{children:"Puede revisar que utilizaba localhost para recibir los datos para procesarlo"}),"\n",(0,i.jsx)(n.h2,{id:"modifique-la-configuraci\xf3n",children:"Modifique la Configuraci\xf3n:"}),"\n",(0,i.jsx)(n.p,{children:"Modifique los siguientes valores seg\xfan sus preferencias o necesidades en el archivo index.js:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"// CONFIGURACION POR DEFECTO PUEDE TESTEAR\nconst keyplayerName = 'melser'; // Nombre del jugador de Minecraft\nconst keyBOT = 'melsernglBOT'; // Nombre del BOT de Minecraft para dar OP\nconst keySERVER = '127.0.0.1'; // IP del servidor\nconst keySERVERPORT = '25565'; // Puerto del servidor\n\n\n// Nombre de usuario \xfanico en TikTok\nlet tiktokUsername = \"agraviadit02\"; // Modifique su nombre de usuario TikTok\nRecuerde ajustar keyplayerName, keyBOT, keySERVER, keySERVERPORT y tiktokUsername seg\xfan sus necesidades.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"iniciar-el-programa",children:"Iniciar el Programa:"}),"\n",(0,i.jsx)(n.p,{children:"Cada vez que necesite usar el programa, inicie start.bat o ejecute node index.js en la terminal.\nModificaci\xf3n de Regalos\nSi desea modificar los regalos en CommandList.json, puede verificar la configuraci\xf3n por defecto y agregar o editar los regalos seg\xfan sea necesario."}),"\n",(0,i.jsx)(n.p,{children:"Los regalos se organizan por nombre y puede solicitar ayuda a ChatGPT con los comandos del archivo JSON."}),"\n",(0,i.jsx)(n.h2,{id:"yaml-o-json",children:"Yaml o json"}),"\n",(0,i.jsx)(n.p,{children:"primeramente era un json de comandos despues fue cambiando a Yaml a su sintaxis mas facil de usar"}),"\n",(0,i.jsx)(n.h2,{id:"codigo-que-se-utilizaba",children:"Codigo que se utilizaba"}),"\n",(0,i.jsx)(n.p,{children:"para manejar los anteriores eventos en minecraft live ya no necesario"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  app1.post('/api/receive1', (req, res) => {\n    const { eventType, data } = req.body;\n  \n    switch (eventType) {\n      case 'chat':\n        setTimeout(() => {\n        console.log(`${data.uniqueId} : ${data.comment}`);\n        sendChatMessage(`${data.uniqueId} : ${data.comment}`);\n        }, 500); // antes de enviar el comando\n        break;\n      case 'gift':\n        if (data.giftType === 1 && !data.repeatEnd) {\n          console.log(`${data.uniqueId} envio ${data.giftName} x${data.repeatCount}`);\n          setTimeout(() => {\n            sendChatMessage(`${data.uniqueId} envio ${data.giftName} x${data.repeatCount}`);\n          }, 500);\n          } else if (data.repeatEnd) {\n            console.log(`${data.uniqueId} envio ${data.giftName} x${data.repeatCount}`);\n              // Streak ended or non-streakable gift => process the gift with final repeat_count\n              sendChatMessage(`${data.uniqueId} envio ${data.giftName} x${data.repeatCount}`);\n            }\n        break;\n      case 'social':\n        if (data.displayType.includes('follow')) {\n          console.log(`${data.uniqueId} te sigue`);\n          sendChatMessage(`${data.uniqueId} te sigue`);\n        }\n        if (data.displayType.includes('share')) {\n          console.log(`${data.uniqueId} ha compartido`);\n          sendChatMessage(`${data.uniqueId} ha compartido`);\n        }\n        break;\n      case 'streamEnd':\n        sendChatMessage('Fin de la transmisi\xf3n en vivo');\n        break;\n      default:\n        console.log(`Evento desconocido: ${eventType}`);\n    }\n  \n    res.json({ message: 'Datos recibidos receive1' });\n  });\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var i=a(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);