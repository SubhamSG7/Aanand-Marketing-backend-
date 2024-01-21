const express=require('express');
const orders=express.Router();


orders.get('/placeorder',(req,res)=>{
    const orderData=req.headers;
})
module.exports=orders;