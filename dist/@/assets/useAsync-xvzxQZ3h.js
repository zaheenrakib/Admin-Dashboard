import{r as t,S as b,w as c}from"./index-D5MxA1od.js";const z=u=>{const[i,a]=t.useState([]),[l,s]=t.useState(""),[d,r]=t.useState(!0),{invoice:f,status:m,zone:g,time:p,source:x,limitData:C,startDate:S,endDate:y,method:D,isUpdate:h,setIsUpdate:k,currentPage:E,category:T,searchText:w,sortedField:U}=t.useContext(b);return t.useEffect(()=>{let n=!1,o=c.CancelToken.source();return(async()=>{try{const e=await u({cancelToken:o.token});n||(a(e),s(""),r(!1))}catch(e){n||(s(e.message),c.isCancel(e)?(s(e.message),r(!1),a([])):(s(e.message),r(!1),a([])))}})(),k(!1),()=>{n=!0,o.cancel("Cancelled in cleanup")}},[f,m,g,p,D,x,C,S,y,h,E,T,w,U]),{data:i,error:l,loading:d}};export{z as u};
