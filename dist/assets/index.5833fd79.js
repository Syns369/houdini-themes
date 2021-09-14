import{r as e,o as t,c as r,a as n,b as l,w as s,d as o,e as a,f as i,t as c,p as u,g as d,F as m,h,i as p,j as x,k as w,u as f,l as g,v,m as y,n as b,q as k,s as T,x as j,y as C}from"./vendor.4d0794b9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const H={},M={class:"p-6 shadow-lg flex items-center bg-gray-900 space-x-4"},L={class:"flex-1 px-2 mx-2"},z=o("Houdini Themes"),U={class:"\r\n                py-3\r\n                px-5\r\n                font-bold\r\n                rounded-xl\r\n                bg-blue-600\r\n                hover:bg-blue-700\r\n                transition\r\n                duration-300\r\n                cursor-pointer\r\n            "},V=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{d:"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"}),n("path",{d:"M9 13h2v5a1 1 0 11-2 0v-5z"})],-1),I=o(" Upload Theme "),B={class:"p-2 px-3 font-bold rounded-md"},S=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})],-1),P=o(" Login/Register "),R=n("div",{class:"flex-none px-2 mx-2"},[n("button",{class:"text-white"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-6 h-6 stroke-current"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])])],-1);H.render=function(o,a){const i=e("router-link");return t(),r("div",M,[n("div",L,[l(i,{class:"text-white text-2xl font-bold",to:{name:"Home"}},{default:s((()=>[z])),_:1})]),n("div",U,[l(i,{class:"flex items-center text-white",to:{name:"UploadThemes"}},{default:s((()=>[V,I])),_:1})]),n("div",B,[l(i,{to:{name:"Login"},class:"flex items-center text-white"},{default:s((()=>[S,P])),_:1})]),R])};const _={},N={class:"bg-gray-700 p-36"},A=[n("p",{class:"text-center text-white text-5xl"},"Footer",-1)];_.render=function(e,n){return t(),r("footer",N,A)};const q={class:"flex flex-col h-screen"};const O={data:()=>({navigation:null}),created(){this.checkRoute()},methods:{checkRoute(){"Login"!==this.$route.name&&"Register"!==this.$route.name&&"ForgotPassword"!==this.$route.name?this.navigation=!1:this.navigation=!0}},watch:{$route(){this.checkRoute()}}},E=Object.assign(O,{setup:function(n){return(n,s)=>{const o=e("router-view");return t(),r("div",q,[n.navigation?i("",!0):(t(),a(H,{key:0})),l(o),n.navigation?i("",!0):(t(),a(_,{key:1,class:"mt-auto"}))])}}}),F={class:"\r\n                transition\r\n                duration-500\r\n                ease-in-out\r\n                transform\r\n                hover:scale-105\r\n                h-80\r\n                w-auto\r\n            "},D={class:"flex justify-between pb-3 text-2xl"},$={class:"flex ml-2 text-white leading-none"},J={class:"flex mr-3"},Y=n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"white"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),X={class:"flex text-white leading-none text-opacity-50"},G={class:"h-64"},K=["src"],Q={class:"\r\n                    text-right\r\n                    mr-3\r\n                    text-white text-base\r\n                    pt-1\r\n                    text-opacity-50\r\n                "},W={props:{theme:Object},setup:r=>(l,o)=>{const i=e("router-link");return t(),a(i,{to:"#"},{default:s((()=>[n("div",F,[n("div",D,[n("p",$,c(r.theme.themeTitle),1),n("div",J,[Y,n("p",X,c(r.theme.like),1)])]),n("div",G,[n("img",{class:"\r\n                        rounded-xl\r\n                        shadow-lg\r\n                        h-full\r\n                        w-full\r\n                        object-cover object-center\r\n                    ",src:`./src/assets/${r.theme.coverPhoto}.jpg`,alt:""},null,8,K)]),n("p",Q," By "+c(r.theme.author),1)])])),_:1})}},Z={},ee={class:"my-5 p-10 w-full flex justify-center"},te=[n("div",{class:"h-16 w-2/4 flex"},[n("input",{type:"",placeholder:"Search Themes ...",onfocus:"this.placeholder = ''",onblur:"this.placeholder = 'Search Themes ...'",class:"\r\n                    rounded-xl\r\n                    pl-14\r\n                    w-full\r\n                    bg-gray-800\r\n                    leading-none\r\n                    text-xl text-white\r\n                    hover:bg-gray-700\r\n                    focus:outline-none focus:bg-gray-700\r\n                    transition\r\n                    duration-200\r\n                    ease-linear\r\n                    placeholder-white\r\n                "}),n("div",{class:"absolute self-center self-start ml-5 opacity-1"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7 text-white",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"}),n("path",{"fill-rule":"evenodd",d:"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clip-rule":"evenodd"})])])],-1)];Z.render=function(e,n){return t(),r("div",ee,te)};const re={data:()=>({paper:"",timer:null}),props:{titletext:String},mounted(){this.printer()},methods:{printer(){this.stoper();let e=-1;this.timer=setInterval((()=>{e++;const t=e%this.titletext.length;this.paper+=this.titletext[t]}),160-50*Math.random())},stoper(){clearInterval(this.timer)}},watch:{paper:function(){this.paper.length==this.titletext.length&&this.stoper()}}};u("data-v-47d76ecc");const ne={class:"\r\n            text-white\r\n            font-medium\r\n            p-8\r\n            mt-20\r\n            text-center text-5xl\r\n            tracking-wide\r\n        "},le=["innerHTML"];d(),re.render=function(e,l,s,o,a,i){return t(),r("div",ne,[n("h1",{class:"texttyper",innerHTML:a.paper},null,8,le)])},re.__scopeId="data-v-47d76ecc";u("data-v-e46eb8da");const se={class:"\r\n            m-52\r\n            grid\r\n            sm:grid-cols-1\r\n            md:grid-cols-1\r\n            lg:grid-cols-1\r\n            xl:grid-cols-2\r\n            2xl:grid-cols-3\r\n            gap-28\r\n        "};d();const oe={setup(e){const s=[{themeTitle:"DarkTheme",coverPhoto:"Stock-1",author:"Syns",like:254},{themeTitle:"Blue Theme",coverPhoto:"Stock-2",author:"Requa",like:500},{themeTitle:"Red Theme",coverPhoto:"Stock-3",author:"Kweyy",like:311},{themeTitle:"Green Theme",coverPhoto:"Stock-4",author:"Ayrox",like:857}];return(e,o)=>(t(),r(m,null,[l(re,{titletext:"Every Houdini Themes in one place."}),l(Z),n("div",se,[(t(),r(m,null,h(s,((e,t)=>l(W,{theme:e,key:t},null,8,["theme"]))),64))])],64))},__scopeId:"data-v-e46eb8da"},ae={},ie={class:"m-8 mb-40 h-full p-8 space-x-10 flex items-center"},ce=[p('<div class="\r\n                bg-gray-800\r\n                h-full\r\n                w-1/2\r\n                text-white text-center\r\n                border-dashed border-2\r\n                rounded-3xl\r\n                space-y-4\r\n                flex flex-col\r\n                justify-center\r\n                items-center\r\n            "><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg><h1 class="text-xl">Drag&amp;Drop files here</h1><h1>or</h1><button class="\r\n                    py-3\r\n                    px-5\r\n                    bg-blue-700\r\n                    shadow-lg\r\n                    hover:bg-blue-800 hover:shadow-xl\r\n                    rounded-xl\r\n                    font-bold\r\n                    transition\r\n                    duration-200\r\n                "> Browse Files </button></div><div class="h-full w-1/2 p-8 text-white flex space-x-12"><div class="\r\n                    w-1/2\r\n                    flex flex-col\r\n                    text-xl\r\n                    justify-center\r\n                    items-start\r\n                    space-y-4\r\n                "><h1>Name your Theme :</h1><input type="text" class="bg-gray-800 rounded-lg w-96"><h1>Add a description :</h1><textarea name="" id="" cols="30" rows="10" class="bg-gray-800 rounded-lg resize-none w-96"></textarea><h1>Tags :</h1><input type="text" class="bg-gray-800 rounded-lg"></div><div class="w-1/2 mt-11 flex flex-col items-center"><div class="\r\n                        w-full\r\n                        h-1/2\r\n                        rounded-2xl\r\n                        flex\r\n                        justify-center\r\n                        items-center\r\n                        bg-gray-800\r\n                    "><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg></div><button class="\r\n                        mt-5\r\n                        px-3\r\n                        py-2\r\n                        shadow-lg\r\n                        bg-blue-700\r\n                        hover:bg-blue-800 hover:shadow-xl\r\n                        rounded-xl\r\n                        font-bold\r\n                        transition\r\n                        duration-200\r\n                    "> Upload Thumbnail <br><span class="font-normal italic">(required)</span></button></div></div>',2)];ae.render=function(e,n){return t(),r("div",ie,ce)};var ue="/houdini-themes/assets/houdini-logo.3770b3b3.png";const de=x("https://igvsurbnqbihwsnoatyv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTU3NDYxMiwiZXhwIjoxOTQ3MTUwNjEyfQ.jlBeA8XyHlV_Y5d2CRYDvmXHJKavNNG4ysHpDLzlad0"),me={class:"flex items-center justify-center min-h-screen sm:px-6 lg:px-8"},he={class:"\r\n                w-1/3\r\n                h-3/4\r\n                px-20\r\n                py-32\r\n                rounded-2xl\r\n                flex flex-col\r\n                items-center\r\n                justify-center\r\n                space-y-10\r\n                bg-black\r\n            "},pe=n("img",{class:"h-16 w-16 rounded-full",src:ue,alt:""},null,-1),xe=n("h2",{class:"text-white mt-6 text-center text-3xl font-extrabold"}," Sign in to your account ",-1),we={class:"max-w-md w-full space-y-8 mt-8",action:"#",method:"POST"},fe={class:"flex items-center justify-between"},ge=n("div",{class:"flex items-center"},[n("input",{id:"remember-me",name:"remember-me",type:"checkbox",class:"\r\n                                h-4\r\n                                w-4\r\n                                text-blue-800\r\n                                focus:outline-none\r\n                                rounded\r\n                            "}),n("label",{for:"remember-me",class:"ml-2 block text-sm text-white"}," Remember me ")],-1),ve=o("Forgot your password?"),ye=["onClick"],be={class:"absolute left-0 inset-y-0 flex items-center pl-3"},ke={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Te=[n("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"},null,-1)],je={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",fill:"currentColor"},Ce=[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},[n("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})],-1)],He=o(" Sign in "),Me=o("Create an account ->"),Le={setup(o){const a=w(!1),c=w(""),u=w(""),d=f(),m=async()=>{try{a.value=!0;let{user:e,error:t}=await de.auth.signIn({email:c.value,password:u.value});if(e&&(d.push({name:"User"}),console.log("Logged In")),t)throw t}catch(e){alert(e.error_description||e.message)}finally{a.value=!1}};return(o,d)=>{const h=e("router-link");return t(),r("div",me,[n("div",he,[pe,xe,n("form",we,[g(n("input",{id:"email-address",name:"email",type:"",autocomplete:"email",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"Email address","onUpdate:modelValue":d[0]||(d[0]=e=>c.value=e)},null,512),[[v,c.value]]),g(n("input",{id:"password",name:"password",type:"",autocomplete:"current-password",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"Password","onUpdate:modelValue":d[1]||(d[1]=e=>u.value=e)},null,512),[[v,u.value]]),n("div",fe,[ge,l(h,{class:"\r\n                            text-sm\r\n                            font-medium\r\n                            text-blue-500\r\n                            hover:text-blue-600\r\n                        ",to:{name:"ForgotPassword"}},{default:s((()=>[ve])),_:1})]),n("button",{onClick:y(m,["prevent"]),type:"submit",class:"\r\n                        relative\r\n                        w-full\r\n                        flex\r\n                        justify-center\r\n                        py-2\r\n                        px-4\r\n                        text-sm\r\n                        font-medium\r\n                        rounded-md\r\n                        text-white\r\n                        bg-blue-800\r\n                        hover:bg-blue-900\r\n                        focus:outline-none\r\n                    "},[n("span",be,[a.value?i("",!0):(t(),r("svg",ke,Te)),a.value?(t(),r("svg",je,Ce)):i("",!0)]),He],8,ye)]),l(h,{class:"text-sm text-blue-500 font-medium hover:text-blue-600",to:{name:"Register"}},{default:s((()=>[Me])),_:1})])])}}},ze={class:"flex items-center justify-center min-h-screen sm:px-6 lg:px-8"},Ue={class:"\r\n                w-1/3\r\n                h-3/4\r\n                px-20\r\n                py-32\r\n                rounded-2xl\r\n                flex flex-col\r\n                items-center\r\n                justify-center\r\n                space-y-10\r\n                bg-black\r\n            "},Ve=n("img",{class:"h-16 w-16 rounded-full",src:ue,alt:""},null,-1),Ie=n("h2",{class:"text-white mt-6 text-center text-3xl font-extrabold"}," Create your account ",-1),Be={class:"max-w-md w-full space-y-10 mt-8",action:"#",method:"POST"},Se=["onClick"],Pe={class:"absolute left-0 inset-y-0 flex items-center pl-3"},Re={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},_e=[n("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"},null,-1)],Ne={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",fill:"currentColor"},Ae=[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},[n("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})],-1)],qe=o(" Sign Up "),Oe=o("Already have an account ?"),Ee={setup(o){const a=w(!1),c=w(""),u=w(""),d=f(),m=async()=>{try{a.value=!0;let{user:e,error:t}=await de.auth.signUp({email:c.value,password:u.value});if(e&&(d.push({name:"Login"}),console.log("Account created")),t)throw t;alert("Check your email for the login link!")}catch(e){alert(e.error_description||e.message)}finally{a.value=!1}};return(o,d)=>{const h=e("router-link");return t(),r("div",ze,[n("div",Ue,[Ve,Ie,n("form",Be,[g(n("input",{name:"username",type:"",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"User Name","onUpdate:modelValue":d[0]||(d[0]=e=>o.userName=e)},null,512),[[v,o.userName]]),g(n("input",{id:"email-address",name:"email",type:"",autocomplete:"email",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"Email address","onUpdate:modelValue":d[1]||(d[1]=e=>c.value=e)},null,512),[[v,c.value]]),g(n("input",{id:"password",name:"password",type:"",autocomplete:"current-password",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"Password","onUpdate:modelValue":d[2]||(d[2]=e=>u.value=e)},null,512),[[v,u.value]]),n("button",{onClick:y(m,["prevent"]),type:"submit",class:"\r\n                        relative\r\n                        w-full\r\n                        flex\r\n                        justify-center\r\n                        py-2\r\n                        px-4\r\n                        text-sm\r\n                        font-medium\r\n                        rounded-md\r\n                        text-white\r\n                        bg-blue-800\r\n                        hover:bg-blue-900\r\n                        focus:outline-none\r\n                    "},[n("span",Pe,[a.value?i("",!0):(t(),r("svg",Re,_e)),a.value?(t(),r("svg",Ne,Ae)):i("",!0)]),qe],8,Se)]),l(h,{class:"text-sm text-blue-500 font-medium hover:text-blue-600",to:{name:"Login"}},{default:s((()=>[Oe])),_:1})])])}}},Fe={},De={class:"flex items-center justify-center min-h-screen sm:px-6 lg:px-8"},$e=[n("div",{class:"\r\n                w-1/3\r\n                h-3/4\r\n                px-20\r\n                py-32\r\n                rounded-2xl\r\n                flex flex-col\r\n                items-center\r\n                justify-center\r\n                space-y-10\r\n                bg-black\r\n            "},[n("img",{class:"h-16 w-16 rounded-full",src:ue,alt:""}),n("h2",{class:"text-white mt-6 text-center text-3xl font-extrabold"}," Reset password "),n("p",{class:"text-white"},"Enter your email to reset your password"),n("form",{class:"max-w-md w-full space-y-8",action:"#",method:"POST"},[n("input",{id:"email-address",name:"email",type:"",autocomplete:"email",required:"",class:"\r\n                        text-white\r\n                        placeholder-white\r\n                        bg-gray-800\r\n                        relative\r\n                        block\r\n                        w-full\r\n                        px-3\r\n                        py-2\r\n                        focus:outline-none\r\n                        sm:text-sm\r\n                        rounded-lg\r\n                    ",placeholder:"Email address"}),n("button",{type:"submit",class:"\r\n                        relative\r\n                        w-full\r\n                        flex\r\n                        justify-center\r\n                        py-2\r\n                        px-4\r\n                        text-sm\r\n                        font-medium\r\n                        rounded-md\r\n                        text-white\r\n                        bg-blue-800\r\n                        hover:bg-blue-900\r\n                        focus:outline-none\r\n                    "},[n("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[n("svg",{class:"\r\n                                h-5\r\n                                w-5\r\n                                text-white\r\n                                group-hover:text-indigo-400\r\n                            ",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])]),o(" Reset ")])])],-1)];Fe.render=function(e,n){return t(),r("div",De,$e)};const Je={class:"flex flex-col items-center"},Ye={class:"text-white text-xl p-8"},Xe=["onClick"],Ge=[{path:"/",name:"Home",component:oe,meta:{title:"Home"}},{path:"/upload",name:"UploadThemes",component:ae,meta:{title:"Upload"}},{path:"/login",name:"Login",component:Le,meta:{title:"Login"}},{path:"/register",name:"Register",component:Ee,meta:{title:"Register"}},{path:"/forgot-password",name:"ForgotPassword",component:Fe,meta:{title:"Forgot Password"}},{path:"/user",name:"User",component:{setup(e){const l=f();b((()=>{}));const s=de.auth.user();console.log(s);const o=async()=>{try{if(s){let{error:e}=await de.auth.signOut();console.log("Logged Out"),l.push({name:"Home"})}if(error)throw error}catch(e){alert(e.error_description||e.message)}};return(e,l)=>(t(),r("div",Je,[n("h1",Ye,c(k(s)),1),n("button",{onClick:y(o,["prevent"]),class:"text-white mt-8 border w-32"}," Sign Out ",8,Xe)]))}},meta:{title:"User"}}],Ke=T({history:j(),routes:Ge});Ke.beforeEach(((e,t,r)=>{document.title=`${e.meta.title} | Houdini Themes`,r()}));C(E).use(Ke).mount("#app");
