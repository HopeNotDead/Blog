var n=Object.defineProperty,l=Object.defineProperties;var i=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var r=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(e,t)=>{for(var o in t||(t={}))r.call(t,o)&&c(e,o,t[o]);if(s)for(var o of s(t))p.call(t,o)&&c(e,o,t[o]);return e},d=(e,t)=>l(e,i(t));import{_ as u}from"./index.ea43eaf5.js";import{d as h,f,g as _,o as m,p as v,h as x}from"./vendor.90a7fd13.js";const g=e=>(v("data-v-201e8c86"),e=e(),x(),e),k={class:"home_page"},w={class:"titlebac",ref:"title"},S=g(()=>_("span",{class:"test"},"HopeNotDead",-1)),b=[S],y={name:"",methods:{addScrollEvent(){window.addEventListener("scroll",()=>{let e=this.$refs.title;const t=window.scrollY;t!==0?e.style.backgroundPosition=`calc(50% + ${t}px) calc(50% + ${t}px)`:e.style.backgroundPosition=""})}},mounted(){this.addScrollEvent()}},E=h(d(a({},y),{setup(e){return(t,o)=>(m(),f("div",k,[_("div",w,b,512)]))}}));var N=u(E,[["__scopeId","data-v-201e8c86"]]);export{N as default};
