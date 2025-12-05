import express from 'express'

const app=express();
app.get('/users',(req,res)=>{
    res.send("Hello this is from backend");
});
app.get('/get-users',(req,res)=>{
    res.send("Hello this is from backend for get-users");
});
app.listen(7007,()=>{
    console.log("Server rinning on port 7007");
})