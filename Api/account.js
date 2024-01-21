const express=require('express');
const router=express.Router();


router.get('/register',(req,res)=>{
    const data=req.headers;
    console.log(data);
})
module.exports=router;