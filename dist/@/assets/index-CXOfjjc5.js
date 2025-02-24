import{o as H,j as r,r as l}from"./index-CJy4qUNt.js";function ee(e,{insertAt:n}={}){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}ee(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var re={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},te={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},q=H.createContext({}),ae=({props:e,children:n})=>{let[t,s]=l.useState(e.options),o=u=>{var v;return((v=e.overrideStrings)==null?void 0:v[u])||re[u]};return l.useEffect(()=>{s(e.options)},[e.options]),r.jsx(q.Provider,{value:{t:o,...te,...e,options:t,setOptions:s},children:n})},T=()=>H.useContext(q);function se(e,n){let t=l.useRef(!1);l.useEffect(()=>{t.current?e():t.current=!0},n)}var ne={when:!0,eventTypes:["keydown"]};function I(e,n,t){let s=l.useMemo(()=>Array.isArray(e)?e:[e],[e]),o=Object.assign({},ne,t),{when:u,eventTypes:v}=o,b=l.useRef(n),{target:i}=o;l.useEffect(()=>{b.current=n});let m=l.useCallback(d=>{s.some(c=>d.key===c||d.code===c)&&b.current(d)},[s]);l.useEffect(()=>{if(u&&typeof window<"u"){let d=i?i.current:window;return v.forEach(c=>{d&&d.addEventListener(c,m)}),()=>{v.forEach(c=>{d&&d.removeEventListener(c,m)})}}},[u,v,s,i,n])}var x={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"},le=(e,n)=>{let t;return function(...s){clearTimeout(t),t=setTimeout(()=>{e.apply(null,s)},n)}};function oe(e,n){return n?e.filter(({label:t,value:s})=>t!=null&&s!=null&&t.toLowerCase().includes(n.toLowerCase())):e}var K=()=>r.jsxs("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray",children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ie=({checked:e,option:n,onClick:t,disabled:s})=>r.jsxs("div",{className:`item-renderer ${s?"disabled":""}`,children:[r.jsx("input",{type:"checkbox",onChange:t,checked:e,tabIndex:-1,disabled:s}),r.jsx("span",{children:n.label})]}),ce=ie,de=({itemRenderer:e=ce,option:n,checked:t,tabIndex:s,disabled:o,onSelectionChanged:u,onClick:v})=>{let b=l.useRef(),i=c=>{m(),c.preventDefault()},m=()=>{o||u(!t)},d=c=>{m(),v(c)};return I([x.ENTER,x.SPACE],i,{target:b}),r.jsx("label",{className:`select-item ${t?"selected":""}`,role:"option","aria-selected":t,tabIndex:s,ref:b,children:r.jsx(e,{option:n,checked:t,onClick:d,disabled:o})})},V=de,ue=({options:e,onClick:n,skipIndex:t})=>{let{disabled:s,value:o,onChange:u,ItemRenderer:v}=T(),b=(i,m)=>{s||u(m?[...o,i]:o.filter(d=>d.value!==i.value))};return r.jsx(r.Fragment,{children:e.map((i,m)=>{let d=m+t;return r.jsx("li",{children:r.jsx(V,{tabIndex:d,option:i,onSelectionChanged:c=>b(i,c),checked:!!o.find(c=>c.value===i.value),onClick:c=>n(c,d),itemRenderer:v,disabled:i.disabled||s})},(i==null?void 0:i.key)||m)})})},pe=ue,me=()=>{let{t:e,onChange:n,options:t,setOptions:s,value:o,filterOptions:u,ItemRenderer:v,disabled:b,disableSearch:i,hasSelectAll:m,ClearIcon:d,debounceDuration:c,isCreatable:P,onCreateOption:k}=T(),C=l.useRef(),g=l.useRef(),[h,A]=l.useState(""),[y,W]=l.useState(t),[j,O]=l.useState(""),[E,S]=l.useState(0),M=l.useCallback(le(a=>O(a),c),[]),R=l.useMemo(()=>{let a=0;return i||(a+=1),m&&(a+=1),a},[i,m]),D={label:e(h?"selectAllFiltered":"selectAll"),value:""},_=a=>{let p=y.filter(w=>!w.disabled).map(w=>w.value);if(a){let w=[...o.map(B=>B.value),...p];return(u?y:t).filter(B=>w.includes(B.value))}return o.filter(w=>!p.includes(w.value))},L=a=>{let p=_(a);n(p)},f=a=>{M(a.target.value),A(a.target.value),S(0)},N=()=>{var a;O(""),A(""),(a=g==null?void 0:g.current)==null||a.focus()},z=a=>S(a),Z=a=>{switch(a.code){case x.ARROW_UP:$(-1);break;case x.ARROW_DOWN:$(1);break;default:return}a.stopPropagation(),a.preventDefault()};I([x.ARROW_DOWN,x.ARROW_UP],Z,{target:C});let J=()=>{S(0)},F=async()=>{let a={label:h,value:h,__isNew__:!0};k&&(a=await k(h)),s([a,...t]),N(),n([...o,a])},Q=async()=>u?await u(t,j):oe(t,j),$=a=>{let p=E+a;p=Math.max(0,p),p=Math.min(p,t.length+Math.max(R-1,0)),S(p)};l.useEffect(()=>{var a,p;(p=(a=C==null?void 0:C.current)==null?void 0:a.querySelector(`[tabIndex='${E}']`))==null||p.focus()},[E]);let[X,Y]=l.useMemo(()=>{let a=y.filter(p=>!p.disabled);return[a.every(p=>o.findIndex(w=>w.value===p.value)!==-1),a.length!==0]},[y,o]);l.useEffect(()=>{Q().then(W)},[j,t]);let U=l.useRef();I([x.ENTER],F,{target:U});let G=P&&h&&!y.some(a=>(a==null?void 0:a.value)===h);return r.jsxs("div",{className:"select-panel",role:"listbox",ref:C,children:[!i&&r.jsxs("div",{className:"search",children:[r.jsx("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:f,onFocus:J,value:h,ref:g,tabIndex:0}),r.jsx("button",{type:"button",className:"search-clear-button",hidden:!h,onClick:N,"aria-label":e("clearSearch"),children:d||r.jsx(K,{})})]}),r.jsxs("ul",{className:"options",children:[m&&Y&&r.jsx(V,{tabIndex:R===1?0:1,checked:X,option:D,onSelectionChanged:L,onClick:()=>z(1),itemRenderer:v,disabled:b}),y.length?r.jsx(pe,{skipIndex:R,options:y,onClick:(a,p)=>z(p)}):G?r.jsx("li",{onClick:F,className:"select-item creatable",tabIndex:1,ref:U,children:`${e("create")} "${h}"`}):r.jsx("li",{className:"no-options",children:e("noOptions")})]})]})},he=me,ve=({expanded:e})=>r.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray",children:r.jsx("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})}),xe=()=>{let{t:e,value:n,options:t,valueRenderer:s}=T(),o=n.length===0,u=n.length===t.length,v=s&&s(n,t);return o?r.jsx("span",{className:"gray",children:v||e("selectSomeItems")}):r.jsx("span",{children:v||(u?e("allItemsAreSelected"):n.map(b=>b.label).join(", "))})},be=({size:e=24})=>r.jsx("span",{style:{width:e,marginRight:"0.2rem"},children:r.jsx("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"},children:r.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})})}),fe=()=>{let{t:e,onMenuToggle:n,ArrowRenderer:t,shouldToggleOnHover:s,isLoading:o,disabled:u,onChange:v,labelledBy:b,value:i,isOpen:m,defaultIsOpen:d,ClearSelectedIcon:c,closeOnChangedValue:P}=T();l.useEffect(()=>{P&&h(!1)},[i]);let[k,C]=l.useState(!0),[g,h]=l.useState(d),[A,y]=l.useState(!1),W=t||ve,j=l.useRef();se(()=>{n&&n(g)},[g]),l.useEffect(()=>{d===void 0&&typeof m=="boolean"&&(C(!1),h(m))},[m]);let O=f=>{var N;["text","button"].includes(f.target.type)&&[x.SPACE,x.ENTER].includes(f.code)||(k&&(f.code===x.ESCAPE?(h(!1),(N=j==null?void 0:j.current)==null||N.focus()):h(!0)),f.preventDefault())};I([x.ENTER,x.ARROW_DOWN,x.SPACE,x.ESCAPE],O,{target:j});let E=f=>{k&&s&&h(f)},S=()=>!A&&y(!0),M=f=>{!f.currentTarget.contains(f.relatedTarget)&&k&&(y(!1),h(!1))},R=()=>E(!0),D=()=>E(!1),_=()=>{k&&h(o||u?!1:!g)},L=f=>{f.stopPropagation(),v([]),k&&h(!1)};return r.jsxs("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":b,"aria-expanded":g,"aria-readonly":!0,"aria-disabled":u,ref:j,onFocus:S,onBlur:M,onMouseEnter:R,onMouseLeave:D,children:[r.jsxs("div",{className:"dropdown-heading",onClick:_,children:[r.jsx("div",{className:"dropdown-heading-value",children:r.jsx(xe,{})}),o&&r.jsx(be,{}),i.length>0&&c!==null&&r.jsx("button",{type:"button",className:"clear-selected-button",onClick:L,disabled:u,"aria-label":e("clearSelected"),children:c||r.jsx(K,{})}),r.jsx(W,{expanded:g})]}),g&&r.jsx("div",{className:"dropdown-content",children:r.jsx("div",{className:"panel-content",children:r.jsx(he,{})})})]})},ge=fe,ye=e=>r.jsx(ae,{props:e,children:r.jsx("div",{className:`rmsc ${e.className||"multi-select"}`,children:r.jsx(ge,{})})}),ke=ye;export{ke as j};
