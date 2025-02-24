import{j as e,r as o,S as H,d as $,i as J}from"./index-CJy4qUNt.js";import{u as Q,E as c}from"./index.esm-DnZxAGHy.js";import{P as X}from"./PageTitle-DWQAEK_U.js";import{I as g}from"./InputAreaTwo-Blv7lJs5.js";import{S as u}from"./SwitchToggle-BkQetNrW.js";import{u as Y}from"./useDisableForDemo-BPqwYP3r.js";import{n as K,a as W}from"./toast-Cy6Kz85v.js";import{A as Z}from"./AnimatedContent-DPc1q1jb.js";import{S as ee}from"./SettingContainer-C1MK_dIM.js";import"./index.prod-Cd0YoJTP.js";import"./Layout-D7aCIW-g.js";import"./iconBase-B68MRJxU.js";import"./spinner-CkndCogW.js";const t=({label:a})=>e.jsx("label",{className:"block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1",children:a}),se=a=>{const{setIsUpdate:G}=o.useContext(H),[i,r]=o.useState(!0),[L,T]=o.useState(""),[q,k]=o.useState(""),[j,n]=o.useState(!0),[S,m]=o.useState(!0),[P,O]=o.useState(!0),[R,p]=o.useState(!0),[D,b]=o.useState(!1),[z,x]=o.useState(!0),[I,h]=o.useState(!1),[C,_]=o.useState(!1),[F,v]=o.useState(!1),[N,f]=o.useState(!1),{handleDisableForDemo:w}=Y(),{register:M,handleSubmit:U,setValue:d,formState:{errors:V}}=Q(),B=async l=>{var E,s;if(!w())try{f(!0);const y={name:"storeSetting",setting:{cod_status:j,stripe_status:S,razorpay_status:P,stripe_key:l.stripe_key,stripe_secret:l.stripe_secret,razorpay_id:l.razorpay_id,razorpay_secret:l.razorpay_secret,google_login_status:z,github_login_status:I,facebook_login_status:C,google_id:l.google_id,google_secret:l.google_secret,github_id:l.github_id,github_secret:l.github_secret,facebook_id:l.facebook_id,facebook_secret:l.facebook_secret,google_analytic_status:F,google_analytic_key:l.google_analytic_key,fb_pixel_status:R,fb_pixel_key:l.fb_pixel_key,tawk_chat_status:D,tawk_chat_property_id:l.tawk_chat_property_id,tawk_chat_widget_id:l.tawk_chat_widget_id}};if(i){const A=await $.addStoreSetting(y);G(!0),f(!1),window.location.reload(),W(A.message)}else{const A=await $.updateStoreSetting(y);G(!0),f(!1),window.location.reload(),W(A.message)}}catch(y){K(((s=(E=y==null?void 0:y.response)==null?void 0:E.data)==null?void 0:s.message)||(y==null?void 0:y.message)),f(!1)}};return o.useEffect(()=>{(async()=>{var l,E;try{const s=await $.getStoreSetting();s&&(r(!1),n(s.cod_status),m(s.stripe_status),O(s.razorpay_status),p(s.fb_pixel_status),b(s.tawk_chat_status),x(s.google_login_status),h(s.github_login_status),_(s.facebook_login_status),v(s.google_analytic_status),d("stripe_key",s.stripe_key),d("stripe_secret",s.stripe_secret),d("razorpay_id",s.razorpay_id),d("razorpay_secret",s.razorpay_secret),d("google_id",s.google_id),d("google_secret",s.google_secret),d("github_id",s.github_id),d("github_secret",s.github_secret),d("facebook_id",s.facebook_id),d("facebook_secret",s.facebook_secret),d("google_analytic_key",s.google_analytic_key),d("fb_pixel_key",s.fb_pixel_key),d("tawk_chat_property_id",s.tawk_chat_property_id),d("tawk_chat_widget_id",s.tawk_chat_widget_id))}catch(s){K(((E=(l=s==null?void 0:s.response)==null?void 0:l.data)==null?void 0:E.message)||s.message)}})()},[]),{errors:V,register:M,isSave:i,favicon:q,setFavicon:k,metaImg:L,setMetaImg:T,isSubmitting:N,onSubmit:B,handleSubmit:U,enabledCOD:j,setEnabledCOD:n,enabledStripe:S,setEnabledStripe:m,enabledRazorPay:P,setEnabledRazorPay:O,enabledFbPixel:R,setEnableFbPixel:p,enabledTawkChat:D,setEnabledTawkChat:b,enabledGoogleLogin:z,setEnabledGoogleLogin:x,enabledGithubLogin:I,setEnabledGithubLogin:h,enabledFacebookLogin:C,setEnabledFacebookLogin:_,enabledGoogleAnalytics:F,setEnabledGoogleAnalytics:v}},xe=()=>{const{t:a}=J(),{isSave:G,errors:i,register:r,onSubmit:L,handleSubmit:T,isSubmitting:q,enabledCOD:k,setEnabledCOD:j,enabledStripe:n,setEnabledStripe:S,enabledRazorPay:m,setEnabledRazorPay:P,enabledFbPixel:O,setEnableFbPixel:R,enabledTawkChat:p,setEnabledTawkChat:D,enabledGoogleLogin:b,setEnabledGoogleLogin:z,enabledGithubLogin:x,setEnabledGithubLogin:I,enabledFacebookLogin:h,setEnabledFacebookLogin:C,enabledGoogleAnalytics:_,setEnabledGoogleAnalytics:F}=se(),v=(N,f,w)=>{w==="stripe"&&!N?(S(!n),j(!0)):w==="stripe"&&N?S(!n):w==="cod"&&!N?(j(!k),S(!0)):j(!k)};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:a("StoreSetting")}),e.jsx(Z,{children:e.jsx("div",{className:"sm:container w-full md:p-6 p-4 mx-auto bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg",children:e.jsx("form",{onSubmit:T(L),children:e.jsx(ee,{isSave:G,title:a("StoreDetails"),isSubmitting:q,children:e.jsxs("div",{className:"flex-grow scrollbar-hide w-full max-h-full",children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsxs("label",{className:"block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1",children:[a("EnableCOD")," ",e.jsx("br",{}),e.jsx("span",{className:"text-xs font-normal text-gray-600 dark:text-gray-400",children:"(This is enabled by default)"})]}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"cod",processOption:k,handleProcess:v})})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("EnableStripe")}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"stripe",processOption:n,handleProcess:v})})]}),e.jsxs("div",{style:{height:n?"auto":0,transition:"all .6s",visibility:n?"visible":"hidden",opacity:n?"1":"0"},className:`${n?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("StripeKey")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:n,register:r,label:a("StripeKey"),name:"stripe_key",type:"password",placeholder:a("StripeKey")}),e.jsx(c,{errorName:i.stripe_key})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:a("StripeSecret")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:n,register:r,label:a("StripeSecret"),name:"stripe_secret",type:"password",placeholder:a("StripeSecret")}),e.jsx(c,{errorName:i.stripe_secret})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"Enable RazorPay"}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"razorpay",processOption:m,handleProcess:P})})]}),e.jsxs("div",{style:{height:m?"auto":0,transition:"all .6s",visibility:m?"visible":"hidden",opacity:m?"1":"0"},className:`${m?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"RazorPay ID"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:m,register:r,label:"RazorPay ID",name:"razorpay_id",type:"password",placeholder:"RazorPay ID"}),e.jsx(c,{errorName:i.razorpay_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:"RazorPay Secret"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:m,register:r,label:"RazorPay Secret",name:"razorpay_secret",type:"password",placeholder:"RazorPay Secret"}),e.jsx(c,{errorName:i.razorpay_secret})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("EnableGoogleLogin")}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"google_login",processOption:b,handleProcess:z})})]}),e.jsxs("div",{style:{height:b?"auto":0,transition:"all .6s",visibility:b?"visible":"hidden",opacity:b?"1":"0"},className:`${b?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("GoogleClientId")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:b,register:r,label:a("GoogleClientId"),name:"google_id",type:"password",placeholder:a("GoogleClientId")}),e.jsx(c,{errorName:i.google_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:a("GoogleSecret")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:b,register:r,label:a("GoogleSecret"),name:"google_secret",type:"password",placeholder:a("GoogleSecret")}),e.jsx(c,{errorName:i.google_secret})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"Enable Github Login"}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"github_login",processOption:x,handleProcess:I})})]}),e.jsxs("div",{style:{height:x?"auto":0,transition:"all .6s",visibility:x?"visible":"hidden",opacity:x?"1":"0"},className:`${x?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"Github ID"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:x,register:r,label:"Github ID",name:"github_id",type:"password",placeholder:"Github ID"}),e.jsx(c,{errorName:i.github_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:"Github Secret"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:x,register:r,label:"Github Secret",name:"github_secret",type:"password",placeholder:"Github Secret"}),e.jsx(c,{errorName:i.github_secret})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"Enable Facebook Login"}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"facebook_login",processOption:h,handleProcess:C})})]}),e.jsxs("div",{style:{height:h?"auto":0,transition:"all .6s",visibility:h?"visible":"hidden",opacity:h?"1":"0"},className:`${h?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:"Facebook ID"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:h,register:r,label:"Facebook ID",name:"facebook_id",type:"password",placeholder:"Facebook ID"}),e.jsx(c,{errorName:i.facebook_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:"Facebook Secret"}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:h,register:r,label:"Facebook Secret",name:"facebook_secret",type:"password",placeholder:"Facebook Secret"}),e.jsx(c,{errorName:i.facebook_secret})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("EnableGoggleAnalytics")}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"google_analytics",processOption:_,handleProcess:F})})]}),e.jsxs("div",{style:{height:_?"auto":0,transition:"all .6s",visibility:_?"visible":"hidden",opacity:_?"1":"0"},className:`${_?"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6":"mb-2"}`,children:[e.jsx(t,{label:a("GoogleAnalyticKey")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:_,register:r,label:a("GoogleAnalyticKey"),name:"google_analytic_key",type:"password",placeholder:a("GoogleAnalyticKey")}),e.jsx(c,{errorName:i.google_analytic_key})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("EnableTawkChat")}),e.jsx("div",{className:"sm:col-span-4",children:e.jsx(u,{id:"tawk_chat",processOption:p,handleProcess:D})})]}),e.jsxs("div",{style:{height:p?"auto":0,transition:"all .6s",visibility:p?"visible":"hidden",opacity:p?"1":"0"},className:`${p?"mb-8":"mb-2"}`,children:[e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(t,{label:a("TawkChatPropertyID")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:p,register:r,label:a("TawkChatPropertyID"),name:"tawk_chat_property_id",type:"password",placeholder:a("TawkChatPropertyID")}),e.jsx(c,{errorName:i.tawk_chat_property_id})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6",children:[e.jsx(t,{label:a("TawkChatWidgetID")}),e.jsxs("div",{className:"sm:col-span-4",children:[e.jsx(g,{required:p,register:r,label:a("TawkChatWidgetID"),name:"tawk_chat_widget_id",type:"password",placeholder:a("TawkChatWidgetID")}),e.jsx(c,{errorName:i.tawk_chat_widget_id})]})]})]})]})})})})})]})};export{xe as default};
