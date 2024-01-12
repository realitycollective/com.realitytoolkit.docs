"use strict";(self.webpackChunkreality_toolkit_docs=self.webpackChunkreality_toolkit_docs||[]).push([[4038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:0},o="What Are Interactables?",c={unversionedId:"interactions/interactables/overview",id:"interactions/interactables/overview",title:"What Are Interactables?",description:"An Interactable is a GameObject in your scene that can be interacted with via Interactors. Each Interactable must have",source:"@site/docs/03-interactions/02-interactables/overview.md",sourceDirName:"03-interactions/02-interactables",slug:"/interactions/interactables/overview",permalink:"/docs/interactions/interactables/overview",draft:!1,editUrl:"https://github.com/realitycollective/com.realitytoolkit.docs/edit/main/docs/03-interactions/02-interactables/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Interactables",permalink:"/docs/category/interactables"},next:{title:"How To Make A GameObject Interactable?",permalink:"/docs/interactions/interactables/how-to-interactable"}},l={},s=[],p={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-interactables"},"What Are Interactables?"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Interactable")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"GameObject")," in your scene that can be interacted with via ",(0,a.kt)("inlineCode",{parentName:"p"},"Interactor"),"s. Each Interactable must have\na ",(0,a.kt)("inlineCode",{parentName:"p"},"Rigidbody")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Collider")," attached to it. The default Interactable implementation of the toolkit will enforce this requirement."))}b.isMDXComponent=!0}}]);