import http from 'http'
const server=http.createServer((req,res)=>{
    // console.log(req.method);
    if(req.url=="/users"){
        res.writeHead(200,{"content-Type":"application/json"});
        res.end(JSON.stringify({name:"Karthik"}));
    }
    else{
        res.writeHead(200,{"Container-type":"test/plain"});
        res.end("Hello this is from back-end");      
    }
});
server.listen(7007,()=>{
    console.log(`server running at port ${7007}`);
});