import express from 'express'

const app=express();
app.use(express.json());
app.get('/users',(req,res)=>{
    res.send("Users page");
});
app.post('/get-user',(req,res)=>{
    let data=req.body.data;
    let result=parseInt(data);
    result=10*result;
    
    res.send(`Given data is ${data}, result for it: ${result}`);
});
app.put('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.end("data added");
});
app.listen(7007,()=>{
    console.log("Server rinning on port 7007");
})