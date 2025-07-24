const http = require('http');
 const PORT = 3000;
const server = http.createServer((req,res)=>{
    res.end("Hello from the server");
});

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});