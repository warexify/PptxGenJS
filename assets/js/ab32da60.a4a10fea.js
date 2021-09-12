"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[7190],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"sections",title:"Slide Sections"},p=void 0,c={unversionedId:"sections",id:"sections",isDocsHomePage:!1,title:"Slide Sections",description:"Group slides using sections.",source:"@site/docs/sections.md",sourceDirName:".",slug:"/sections",permalink:"/PptxGenJS/docs/sections",tags:[],version:"current",frontMatter:{id:"sections",title:"Slide Sections"},sidebar:"docs",previous:{title:"Masters and Placeholders",permalink:"/PptxGenJS/docs/masters"},next:{title:"Shapes and Schemes",permalink:"/PptxGenJS/docs/shapes-and-schemes"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Section Options",id:"section-options",children:[]},{value:"Section Example",id:"section-example",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Group slides using sections."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'pptx.addSection({ title: "Tables" });\npptx.addSection({ title: "Tables", order: 3 });\n')),(0,a.kt)("h2",{id:"section-options"},"Section Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"title")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"section title"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",(0,a.kt)("inlineCode",{parentName:"td"},"{x:'50%'}")," will place object in the middle of the Slide)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"order")),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"left"},"section order"),(0,a.kt)("td",{parentName:"tr",align:"left"},"1-n. Used to add section at any index")))),(0,a.kt)("h2",{id:"section-example"},"Section Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import pptxgen from "pptxgenjs";\nlet pptx = new pptxgen();\n\n// STEP 1: Create a section\npptx.addSection({ title: "Tables" });\n\n// STEP 2: Provide section title to a slide that you want in corresponding section\nlet slide = pptx.addSlide({ sectionTitle: "Tables" });\n\nslide.addText("This slide is in the Tables section!", { x: 1.5, y: 1.5, fontSize: 18, color: "363636" });\npptx.writeFile({ fileName: "Section Sample.pptx" });\n')))}u.isMDXComponent=!0}}]);