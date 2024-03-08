"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2735],{4600:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=e(4848),i=e(8453);const t={sidebar_label:"speechchat",sidebar_position:1},s="Speechchat TTS",l={id:"speechchat",title:"Speechchat TTS",description:"este bot de voz a sido creado con una api de Steamelements",source:"@site/docs/speechchat.md",sourceDirName:".",slug:"/speechchat",permalink:"/TikLiveApp/docs/speechchat",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/speechchat.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"speechchat",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Instalacion",permalink:"/TikLiveApp/docs/inicio"},next:{title:"Sonidos y alertas",permalink:"/TikLiveApp/docs/SounAlerts"}},o={},d=[{value:"opciones adicionales",id:"opciones-adicionales",level:2},{value:"<em>Voces Disponibles:</em>",id:"voces-disponibles",level:2}];function h(n){const a={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"speechchat-tts",children:"Speechchat TTS"}),"\n",(0,r.jsxs)(a.p,{children:["este bot de voz a sido creado con una api de Steamelements\r\n",(0,r.jsx)(a.img,{alt:"Streamelements API",src:e(0).A+"",width:"1531",height:"708"})]}),"\n",(0,r.jsx)(a.h2,{id:"opciones-adicionales",children:"opciones adicionales"}),"\n",(0,r.jsx)(a.p,{children:"Esta dise\xf1ado para que tenga controles de audio filtros y una whiteList, usted puede:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["controlar el audio(subir y bajar volumen o mutearlo)\r\n",(0,r.jsx)(a.img,{alt:"Reproductor de audio",src:e(2592).A+"",width:"471",height:"80"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["... si presiona en mas opciones del reproductor puedes acelerar el audio asi como descargarlo si que esta ",(0,r.jsx)(a.em,{children:"disponible"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"a\xf1adir filtros: cada palabra que quiera filtrar se separa por cada espacio y si es muy corto y tiene espacio utilize /a a/ en este caso contara como una palabra"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Whitelist cada usuario que si no lee o quieres que lea siempre ---\x3e esto ignora los filtros de spam y demas"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{title:"recomiendo",type:"tip",children:(0,r.jsx)(a.p,{children:"si no quiere escuchar escriba el a e i o u etc en el filtro"})}),"\n",(0,r.jsx)(a.h2,{id:"voces-disponibles",children:(0,r.jsx)(a.em,{children:"Voces Disponibles:"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'var VOICE_LIST = {\r\n    "Pen\xe9lope (Spanish, American)": "Penelope",\r\n    "Miguel (Spanish, American)": "Miguel",\r\n    "Enrique (Spanish, European)": "Enrique",\r\n    "Conchita (Spanish, European)": "Conchita",\r\n    "Mia (Spanish, Mexican)": "Mia",\r\n    "Rosalinda (Spanish, Castilian)": "es-ES-Standard-A",\r\n    "Brian (English, British)": "Brian",\r\n    "Amy (English, British)": "Amy",\r\n    "Emma (English, British)": "Emma",\r\n    "Geraint (English, Welsh)": "Geraint",\r\n    "Russell (English, Australian)": "Russell",\r\n    "Nicole (English, Australian)": "Nicole",\r\n    "Joey (English, American)": "Joey",\r\n    "Justin (English, American)": "Justin",\r\n    "Matthew (English, American)": "Matthew",\r\n    "Ivy (English, American)": "Ivy",\r\n    "Joanna (English, American)": "Joanna",\r\n    "Kendra (English, American)": "Kendra",\r\n    "Kimberly (English, American)": "Kimberly",\r\n    "Salli (English, American)": "Salli",\r\n    "Raveena (English, Indian)": "Raveena",\r\n    "Zhiyu (Chinese, Mandarin)": "Zhiyu",\r\n    "Mads (Danish)": "Mads",\r\n    "Naja (Danish)": "Naja",\r\n    "Ruben (Dutch)": "Ruben",\r\n    "Lotte (Polly) (Dutch)": "Lotte",\r\n    "Mathieu (French)": "Mathieu",\r\n    "C\xe9line (French)": "Celine",\r\n    "Chantal (French, Canadian)": "Chantal",\r\n    "Hans (German)": "Hans",\r\n    "Marlene (German)": "Marlene",\r\n    "Vicki (German)": "Vicki",\r\n    "Aditi (+English) (Hindi)": "Aditi",\r\n    "Karl (Icelandic)": "Karl",\r\n    "D\xf3ra (Icelandic)": "Dora",\r\n    "Carla (Italian)": "Carla",\r\n    "Bianca (Italian)": "Bianca",\r\n    "Giorgio (Italian)": "Giorgio",\r\n    "Takumi (Japanese)": "Takumi",\r\n    "Mizuki (Japanese)": "Mizuki",\r\n    "Seoyeon (Korean)": "Seoyeon",\r\n    "Liv (Norwegian)": "Liv",\r\n    "Ewa (Polish)": "Ewa",\r\n    "Maja (Polish)": "Maja",\r\n    "Jacek (Polish)": "Jacek",\r\n    "Jan (Polish)": "Jan",\r\n    "Ricardo (Portuguese, Brazilian)": "Ricardo",\r\n    "Vit\xf3ria (Portuguese, Brazilian)": "Vitoria",\r\n    "Cristiano (Portuguese, European)": "Cristiano",\r\n    "In\xeas (Portuguese, European)": "Ines",\r\n    "Carmen (Romanian)": "Carmen",\r\n    "Maxim (Russian)": "Maxim",\r\n    "Tatyana (Russian)": "Tatyana",\r\n    "Astrid (Swedish)": "Astrid",\r\n    "Filiz (Turkish)": "Filiz",\r\n    "Gwyneth (Welsh)": "Gwyneth",\r\n    "Carter (English, American)": "en-US-Wavenet-A",\r\n    "Paul (English, American)": "en-US-Wavenet-B",\r\n    "Evelyn (English, American)": "en-US-Wavenet-C",\r\n    "Liam (English, American)": "en-US-Wavenet-D",\r\n    "Jasmine (English, American)": "en-US-Wavenet-E",\r\n    "Madison (English, American)": "en-US-Wavenet-F",\r\n    "Mark (English, American)": "en-US-Standard-B",\r\n    "Vanessa (English, American)": "en-US-Standard-C",\r\n    "Zachary (English, American)": "en-US-Standard-D",\r\n    "Audrey (English, American)": "en-US-Standard-E",\r\n    "Layla (English, British)": "en-GB-Standard-A",\r\n    "Ali (English, British)": "en-GB-Standard-B",\r\n    "Scarlett (English, British)": "en-GB-Standard-C",\r\n    "Oliver (English, British)": "en-GB-Standard-D",\r\n    "Bella (English, British)": "en-GB-Wavenet-A",\r\n    "John (English, British)": "en-GB-Wavenet-B",\r\n    "Victoria (English, British)": "en-GB-Wavenet-C",\r\n    "Ron (English, British)": "en-GB-Wavenet-D",\r\n    "Zoe (English, Australian)": "en-AU-Standard-A",\r\n    "Luke (English, Australian)": "en-AU-Standard-B",\r\n    "Samantha (English, Australian)": "en-AU-Wavenet-A",\r\n    "Steve (English, Australian)": "en-AU-Wavenet-B",\r\n    "Courtney (English, Australian)": "en-AU-Wavenet-C",\r\n    "Jayden (English, Australian)": "en-AU-Wavenet-D",\r\n    "Ashleigh (English, Australian)": "en-AU-Standard-C",\r\n    "Daniel (English, Australian)": "en-AU-Standard-D",\r\n    "Anushri (English, Indian)": "en-IN-Wavenet-A",\r\n    "Sundar (English, Indian)": "en-IN-Wavenet-B",\r\n    "Satya (English, Indian)": "en-IN-Wavenet-C",\r\n    "Sonya (Afrikaans)": "af-ZA-Standard-A",\r\n    "Aisha (Arabic)": "ar-XA-Wavenet-A",\r\n    "Ahmad 1 (Arabic)": "ar-XA-Wavenet-B",\r\n    "Ahmad 2 (Arabic)": "ar-XA-Wavenet-C",\r\n    "Nikolina (Bulgarian)": "bg-bg-Standard-A",\r\n    "Li Na (Chinese, Mandarin)": "cmn-CN-Wavenet-A",\r\n    "Wang (Chinese, Mandarin)": "cmn-CN-Wavenet-B",\r\n    "Bai (Chinese, Mandarin)": "cmn-CN-Wavenet-C",\r\n    "Mingli (Chinese, Mandarin)": "cmn-CN-Wavenet-D",\r\n    "Silvia (Czech)": "cs-CZ-Wavenet-A",\r\n    "Marie (Danish)": "da-DK-Wavenet-A",\r\n    "Annemieke (Dutch)": "nl-NL-Standard-A",\r\n    "Eva (Dutch)": "nl-NL-Wavenet-A",\r\n    "Lars (Dutch)": "nl-NL-Wavenet-B",\r\n    "Marc (Dutch)": "nl-NL-Wavenet-C",\r\n    "Verona (Dutch)": "nl-NL-Wavenet-D",\r\n    "Lotte (Wavenet) (Dutch)": "nl-NL-Wavenet-E",\r\n    "Tala (Filipino (Tagalog))": "fil-PH-Wavenet-A",\r\n    "Marianne (Finnish)": "fi-FI-Wavenet-A",\r\n    "Yvonne (French)": "fr-FR-Standard-C",\r\n    "Gaspard (French)": "fr-FR-Standard-D",\r\n    "Emilie (French)": "fr-FR-Wavenet-A",\r\n    "Marcel (French)": "fr-FR-Wavenet-B",\r\n    "Brigitte (French)": "fr-FR-Wavenet-C",\r\n    "Simon (French)": "fr-FR-Wavenet-D",\r\n    "Juliette (French, Canadian)": "fr-CA-Standard-A",\r\n    "Felix (French, Canadian)": "fr-CA-Standard-B",\r\n    "Camille (French, Canadian)": "fr-CA-Standard-C",\r\n    "Jacques (French, Canadian)": "fr-CA-Standard-D",\r\n    "Karolina (German)": "de-DE-Standard-A",\r\n    "Albert (German)": "de-DE-Standard-B",\r\n    "Angelika (German)": "de-DE-Wavenet-A",\r\n    "Oskar (German)": "de-DE-Wavenet-B",\r\n    "Nina (German)": "de-DE-Wavenet-C",\r\n    "Sebastian (German)": "de-DE-Wavenet-D",\r\n    "Thalia (Greek)": "el-GR-Wavenet-A",\r\n    "Sneha (Hindi)": "hi-IN-Wavenet-A",\r\n    "Arnav (Hindi)": "hi-IN-Wavenet-B",\r\n    "Aadhav (Hindi)": "hi-IN-Wavenet-C",\r\n    "Ishtevan (Hungarian)": "hu-HU-Wavenet-A",\r\n    "Helga (Icelandic)": "is-is-Standard-A",\r\n    "Anisa (Indonesian)": "id-ID-Wavenet-A",\r\n    "Budi (Indonesian)": "id-ID-Wavenet-B",\r\n    "Bayu (Indonesian)": "id-ID-Wavenet-C",\r\n    "Gianna (Italian)": "it-IT-Standard-A",\r\n    "Valentina (Italian)": "it-IT-Wavenet-A",\r\n    "Stella (Italian)": "it-IT-Wavenet-B",\r\n    "Alessandro (Italian)": "it-IT-Wavenet-C",\r\n    "Luca (Italian)": "it-IT-Wavenet-D",\r\n    "Koharu (Japanese)": "ja-JP-Standard-A",\r\n    "Miho (Japanese)": "ja-JP-Wavenet-A",\r\n    "Eiko (Japanese)": "ja-JP-Wavenet-B",\r\n    "Haruto (Japanese)": "ja-JP-Wavenet-C",\r\n    "Eichi (Japanese)": "ja-JP-Wavenet-D",\r\n    "Heosu (Korean)": "ko-KR-Standard-A",\r\n    "Grace (Korean)": "ko-KR-Wavenet-A",\r\n    "Juris (Latvian)": "lv-lv-Standard-A",\r\n    "Nora (Norwegian, Bokm\xe5l)": "nb-no-Wavenet-E",\r\n    "Malena (Norwegian, Bokm\xe5l)": "nb-no-Wavenet-A",\r\n    "Jacob (Norwegian, Bokm\xe5l)": "nb-no-Wavenet-B",\r\n    "Thea (Norwegian, Bokm\xe5l)": "nb-no-Wavenet-C",\r\n    "Aksel (Norwegian, Bokm\xe5l)": "nb-no-Wavenet-D",\r\n    "Amelia (Polish)": "pl-PL-Wavenet-A",\r\n    "Stanislaw (Polish)": "pl-PL-Wavenet-B",\r\n    "Tomasz (Polish)": "pl-PL-Wavenet-C",\r\n    "Klaudia (Polish)": "pl-PL-Wavenet-D",\r\n    "Beatriz (Portuguese, Portugal)": "pt-PT-Wavenet-A",\r\n    "Francisco (Portuguese, Portugal)": "pt-PT-Wavenet-B",\r\n    "Lucas (Portuguese, Portugal)": "pt-PT-Wavenet-C",\r\n    "Carolina (Portuguese, Portugal)": "pt-PT-Wavenet-D",\r\n    "Alice (Portuguese, Brazilian)": "pt-BR-Standard-A",\r\n    "\u041c\u0430\u0448\u0430 (Masha) (Russian)": "ru-RU-Wavenet-A",\r\n    "\u0418\u043b\u044c\u044f (Ilya) (Russian)": "ru-RU-Wavenet-B",\r\n    "\u0410\u043b\u0451\u043d\u0430 (Alena) (Russian)": "ru-RU-Wavenet-C",\r\n    "\u041f\u0451\u0442\u0440 (Petr) (Russian)": "ru-RU-Wavenet-D",\r\n    "Aleksandra (Serbian)": "sr-rs-Standard-A",\r\n    "Eliska (Slovak)": "sk-SK-Wavenet-A",\r\n    "Elsa (Swedish)": "sv-SE-Standard-A",\r\n    "Zehra (Turkish)": "tr-TR-Standard-A",\r\n    "Yagmur (Turkish)": "tr-TR-Wavenet-A",\r\n    "Mehmet (Turkish)": "tr-TR-Wavenet-B",\r\n    "Miray (Turkish)": "tr-TR-Wavenet-C",\r\n    "Elif (Turkish)": "tr-TR-Wavenet-D",\r\n    "Enes (Turkish)": "tr-TR-Wavenet-E",\r\n    "Vladislava (Ukrainian)": "uk-UA-Wavenet-A",\r\n    "Linh (Vietnamese)": "vi-VN-Wavenet-A",\r\n    "Nguyen (Vietnamese)": "vi-VN-Wavenet-B",\r\n    "Phuong (Vietnamese)": "vi-VN-Wavenet-C",\r\n    "Viet (Vietnamese)": "vi-VN-Wavenet-D",\r\n    "Linda (English, Canadian)": "Linda",\r\n    "Heather (English, Canadian)": "Heather",\r\n    "Sean (English, Irish)": "Sean",\r\n    "Hoda (Arabic, Egypt)": "Hoda",\r\n    "Naayf (Arabic, Saudi Arabia)": "Naayf",\r\n    "Ivan (Bulgarian)": "Ivan",\r\n    "Herena (Catalan)": "Herena",\r\n    "Tracy (Chinese, Cantonese, Traditional)": "Tracy",\r\n    "Danny (Chinese, Cantonese, Traditional)": "Danny",\r\n    "Huihui (Chinese, Mandarin, Simplified)": "Huihui",\r\n    "Yaoyao (Chinese, Mandarin, Simplified)": "Yaoyao",\r\n    "Kangkang (Chinese, Mandarin, Simplified)": "Kangkang",\r\n    "HanHan (Chinese, Taiwanese, Traditional)": "HanHan",\r\n    "Zhiwei (Chinese, Taiwanese, Traditional)": "Zhiwei",\r\n    "Matej (Croatian)": "Matej",\r\n    "Jakub (Czech)": "Jakub",\r\n    "Guillaume (French, Switzerland)": "Guillaume",\r\n    "Michael (German, Austria)": "Michael",\r\n    "Karsten (German, Switzerland)": "Karsten",\r\n    "Stefanos (Greek)": "Stefanos",\r\n    "Szabolcs (Hungarian)": "Szabolcs",\r\n    "Andika (Indonesian)": "Andika",\r\n    "Heidi (Finnish)": "Heidi",\r\n    "Kalpana (Hindi)": "Kalpana",\r\n    "Hemant (Hindi)": "Hemant",\r\n    "Rizwan (Malay)": "Rizwan",\r\n    "Filip (Slovak)": "Filip",\r\n    "Lado (Slovenian)": "Lado",\r\n    "Valluvar (Tamil, India)": "Valluvar",\r\n    "Pattara (Thai)": "Pattara",\r\n    "An (Vietnamese)": "An",\r\n};\n'})})]})}function c(n={}){const{wrapper:a}={...(0,i.R)(),...n.components};return a?(0,r.jsx)(a,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},2592:(n,a,e)=>{e.d(a,{A:()=>r});const r=e.p+"assets/images/Reproductor-1e89e048d7b38c66fa5ad6a1b82d126b.png"},0:(n,a,e)=>{e.d(a,{A:()=>r});const r=e.p+"assets/images/image-5c71620e02df09160b893d54acfaa4f7.png"},8453:(n,a,e)=>{e.d(a,{R:()=>s,x:()=>l});var r=e(6540);const i={},t=r.createContext(i);function s(n){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function l(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(t.Provider,{value:a},n.children)}}}]);