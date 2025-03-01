import{i as p,s as j,r as n,j as s,f as o,k as g}from"./index-D5MxA1od.js";import{u as b,E as i}from"./index.esm-ZPkkcAzd.js";import{L as c}from"./LabelArea-ZkaCJrp3.js";import{A as v}from"./AdminServices-B0AmVkZ6.js";import{a as N,n as P}from"./toast-CC0M9tzZ.js";import{I as y,a as k}from"./forgot-password-office-dark-CQOqfqw9.js";const C=()=>{const{t:a}=p(),{token:u}=j(),l=n.useRef(""),[f,r]=n.useState(!1),{register:d,handleSubmit:x,watch:w,formState:{errors:m}}=b();l.current=w("newPassword");const h=({newPassword:t})=>{r(!0),v.resetPassword({newPassword:t,token:u}).then(e=>{r(!1),N(e.message)}).catch(e=>{r(!1),P(e?e.response.data.message:e.message)})};return s.jsx("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:s.jsx("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:s.jsxs("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[s.jsxs("div",{className:"h-32 md:h-auto md:w-1/2",children:[s.jsx("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:y,alt:"Office"}),s.jsx("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:k,alt:"Office"})]}),s.jsx("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:s.jsxs("div",{className:"w-full",children:[s.jsx("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:a("ResetPassword")}),s.jsxs("form",{onSubmit:x(h),children:[s.jsx(c,{label:"Password"}),s.jsx(o.Input,{label:"Password",name:"newPassword",type:"password",autocomplete:"current-password",placeholder:"Password",...d("newPassword",{required:"You must specify a password",minLength:{value:10,message:"Password must have at least 10 characters"}})}),s.jsx(i,{errorName:m.newPassword}),s.jsx("div",{className:"mt-6"}),s.jsx(c,{label:"Confirm Password"}),s.jsx(o.Input,{label:"Confirm Password",name:"confirm_password",type:"password",autocomplete:"current-password",placeholder:a("ConfirmPassword"),...d("confirm_password",{validate:t=>t===l.current||"The passwords do not match"})}),s.jsx(i,{errorName:m.confirm_password}),s.jsx(o.Button,{disabled:f,type:"submit",block:!0,className:"mt-4 h-12",children:a("Reset")})]}),s.jsx("p",{className:"mt-4",children:s.jsx(g,{className:"text-sm font-medium text-emerald-500 dark:text-emerald-400 hover:underline",to:"/login",children:a("AlreadyAccount")})})]})})]})})})};export{C as default};
