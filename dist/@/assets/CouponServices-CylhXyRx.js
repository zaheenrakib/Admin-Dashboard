import{e as n}from"./index-D5MxA1od.js";const t={addCoupon:async o=>n.post("/coupon/add",o),addAllCoupon:async o=>n.post("/coupon/add/all",o),getAllCoupons:async()=>n.get("/coupon"),getCouponById:async o=>n.get(`/coupon/${o}`),updateCoupon:async(o,u)=>n.put(`/coupon/${o}`,u),updateManyCoupons:async o=>n.patch("/coupon/update/many",o),updateStatus:async(o,u)=>n.put(`/coupon/status/${o}`,u),deleteCoupon:async o=>n.delete(`/coupon/${o}`),deleteManyCoupons:async o=>n.patch("/coupon/delete/many",o)};export{t as C};
