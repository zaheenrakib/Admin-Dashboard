import{o as T,r as N,S as $,u as I,i as E,j as t,f as d,L as S,k as O}from"./index-D5MxA1od.js";import{f as A,i as R,e as M}from"./Layout-DbgPFayI.js";import{s as H}from"./spinner-CkndCogW.js";import{A as K}from"./AdminServices-B0AmVkZ6.js";import{P as D,C as y,b as V,A as p}from"./ProductServices-CWHNXDdP.js";import{C as F}from"./CouponServices-CylhXyRx.js";import{u as Z}from"./DrawerButton-BkpV-hZI.js";import{C as B}from"./CurrencyServices-DSarpw9a.js";import{a as n,n as b}from"./toast-CC0M9tzZ.js";import{u as _}from"./useDisableForDemo-PELIHLpC.js";import{T as j}from"./NotFound-Dz2tSxuD.js";import{S as q}from"./SelectLanguageTwo-C7Uu99KD.js";const z=({id:o,ids:l,setIsCheck:m,category:f,title:u,useParamId:h})=>{const{isModalOpen:g,closeModal:s,setIsUpdate:a}=N.useContext($),{setServiceId:i}=Z(),c=I(),[C,r]=N.useState(!1),{handleDisableForDemo:L}=_(),P=async()=>{var w,v;if(!L())try{if(r(!0),c.pathname==="/products")if(l){const e=await D.deleteManyProducts({ids:l});a(!0),n(e.message),m([]),i(),s(),r(!1)}else{const e=await D.deleteProduct(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/coupons")if(l){const e=await F.deleteManyCoupons({ids:l});a(!0),n(e.message),m([]),i(),s(),r(!1)}else{const e=await F.deleteCoupon(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/categories"||f)if(l){const e=await y.deleteManyCategory({ids:l});a(!0),n(e.message),m([]),i(),s(),r(!1)}else{if(o===void 0||!o)return b("Please select a category first!"),r(!1),s();const e=await y.deleteCategory(o);a(!0),n(e.message),s(),i(),r(!1)}else if(c.pathname===`/categories/${h}`||f){if(o===void 0||!o)return b("Please select a category first!"),r(!1),s();const e=await y.deleteCategory(o);a(!0),n(e.message),s(),i(),r(!1)}if(c.pathname==="/customers"){const e=await V.deleteCustomer(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/attributes")if(l){const e=await p.deleteManyAttribute({ids:l});a(!0),n(e.message),m([]),i(),s(),r(!1)}else{const e=await p.deleteAttribute(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname===`/attributes/${c.pathname.split("/")[2]}`)if(l){const e=await p.deleteManyChildAttribute({id:c.pathname.split("/")[2],ids:l});a(!0),n(e.message),i(),m([]),s(),r(!1)}else{const e=await p.deleteChildAttribute({id:o,ids:c.pathname.split("/")[2]});a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/our-staff"){const e=await K.deleteStaff(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/languages")if(l){const e=await S.deleteManyLanguage({ids:l});a(!0),n(e.message),m([]),s(),r(!1)}else{const e=await S.deleteLanguage(o);a(!0),n(e.message),i(),s(),r(!1)}if(c.pathname==="/currencies")if(l){const e=await B.deleteManyCurrency({ids:l});a(!0),n(e.message),m([]),s(),r(!1)}else{const e=await B.deleteCurrency(o);a(!0),n(e.message),i(),s(),r(!1)}}catch(e){b(e?(v=(w=e==null?void 0:e.response)==null?void 0:w.data)==null?void 0:v.message:e==null?void 0:e.message),i(),m([]),s(),r(!1)}},{t:x}=E();return t.jsx(t.Fragment,{children:t.jsxs(d.Modal,{isOpen:g,onClose:s,children:[t.jsxs(d.ModalBody,{className:"text-center custom-modal px-8 pt-6 pb-4",children:[t.jsx("span",{className:"flex justify-center text-3xl mb-6 text-red-500",children:t.jsx(A,{})}),t.jsxs("h2",{className:"text-xl font-medium mb-2",children:[x("DeleteModalH2")," ",t.jsx("span",{className:"text-red-500",children:u}),"?"]}),t.jsx("p",{children:x("DeleteModalPtag")})]}),t.jsxs(d.ModalFooter,{className:"justify-center",children:[t.jsx(d.Button,{className:"w-full sm:w-auto hover:bg-white hover:border-gray-50",layout:"outline",onClick:s,children:x("modalKeepBtn")}),t.jsx("div",{className:"flex justify-end",children:C?t.jsxs(d.Button,{disabled:!0,type:"button",className:"w-full h-12 sm:w-auto",children:[t.jsx("img",{src:H,alt:"Loading",width:20,height:10})," ",t.jsx("span",{className:"font-serif ml-2 font-light",children:x("Processing")})]}):t.jsx(d.Button,{onClick:P,className:"w-full h-12 sm:w-auto",children:x("modalDeletBtn")})})]})]})})},re=T.memo(z),oe=({id:o,title:l,handleUpdate:m,handleModalOpen:f,isCheck:u,product:h,parent:g,children:s})=>{const{t:a}=E();return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex justify-end text-right",children:[(s==null?void 0:s.length)>0?t.jsxs(t.Fragment,{children:[t.jsx(O,{to:`/categories/${g==null?void 0:g._id}`,className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(j,{id:"view",Icon:R,title:a("View"),bgColor:"#10B981"})}),t.jsx("button",{disabled:(u==null?void 0:u.length)>0,onClick:()=>m(o),className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(j,{id:"edit",Icon:M,title:a("Edit"),bgColor:"#10B981"})})]}):t.jsx("button",{disabled:(u==null?void 0:u.length)>0,onClick:()=>m(o),className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(j,{id:"edit",Icon:M,title:a("Edit"),bgColor:"#10B981"})}),t.jsx("button",{disabled:(u==null?void 0:u.length)>0,onClick:()=>f(o,l,h),className:"p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none",children:t.jsx(j,{id:"delete",Icon:A,title:a("Delete"),bgColor:"#EF4444"})})]})})},le=({title:o,description:l,handleSelectLanguage:m,register:f})=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex md:flex-row flex-col justify-between mr-20",children:[t.jsxs("div",{children:[t.jsx("h4",{className:"text-xl font-medium dark:text-gray-300",children:o}),t.jsx("p",{className:"mb-0 text-sm dark:text-gray-300",children:l})]}),m&&t.jsx(q,{handleSelectLanguage:m,register:f})]})});export{re as D,oe as E,le as T};
