"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[2772],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={id:"shapes-and-schemes",title:"Shapes and Schemes"},i=void 0,p={unversionedId:"shapes-and-schemes",id:"shapes-and-schemes",isDocsHomePage:!1,title:"Shapes and Schemes",description:"PowerPoint Shape Types",source:"@site/docs/shapes-and-schemes.md",sourceDirName:".",slug:"/shapes-and-schemes",permalink:"/PptxGenJS/docs/shapes-and-schemes",tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616114678,formattedLastUpdatedAt:"3/18/2021",frontMatter:{id:"shapes-and-schemes",title:"Shapes and Schemes"},sidebar:"docs",previous:{title:"Slide Sections",permalink:"/PptxGenJS/docs/sections"},next:{title:"Speaker Notes",permalink:"/PptxGenJS/docs/speaker-notes"}},l=[{value:"PowerPoint Shape Types",id:"powerpoint-shape-types",children:[]},{value:"PowerPoint Scheme Colors",id:"powerpoint-scheme-colors",children:[]}],u={toc:l};function m(e){var t=e.components,c=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"powerpoint-shape-types"},"PowerPoint Shape Types"),(0,a.kt)("p",null,"The library comes with over 180 built-in PowerPoint shapes (thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ziv-Barber/officegen"},"officegen project"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use inline typescript definitions to view available shapes"),(0,a.kt)("li",{parentName:"ul"},"or see ",(0,a.kt)("inlineCode",{parentName:"li"},"ShapeType")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},"index.d.ts")," for the complete list")),(0,a.kt)("h2",{id:"powerpoint-scheme-colors"},"PowerPoint Scheme Colors"),(0,a.kt)("p",null,"Scheme color is a variable that changes its value whenever another scheme palette is selected. Using scheme colors, design consistency can be easily preserved throughout the presentation and viewers can change color theme without any text/background contrast issues."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use inline typescript definitions to view available colors"),(0,a.kt)("li",{parentName:"ul"},"or see ",(0,a.kt)("inlineCode",{parentName:"li"},"SchemeColor")," in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/blob/master/types/index.d.ts"},"index.d.ts")," for the complete list")),(0,a.kt)("p",null,"To use a scheme color, set a color constant as a property value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"slide.addText(\"Scheme Color 'text1'\", { color: pptx.SchemeColor.text1 });\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://gitbrent.github.io/PptxGenJS/demo/#shapes"},"Shapes Demo")," for Scheme Colors demo"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scheme Demo",src:n(6997).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'export enum SchemeColor {\n    "text1" = "tx1",\n    "text2" = "tx2",\n    "background1" = "bg1",\n    "background2" = "bg2",\n    "accent1" = "accent1",\n    "accent2" = "accent2",\n    "accent3" = "accent3",\n    "accent4" = "accent4",\n    "accent5" = "accent5",\n    "accent6" = "accent6",\n}\n')))}m.isMDXComponent=!0},6997:function(e,t,n){t.Z=n.p+"assets/images/demo-scheme-181c7b8076de1e6badd759f437741022.png"}}]);