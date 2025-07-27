const express = require('express');
const app = express();


// middleware to log requests
// This middleware will log every request made to the server
app.use((req,res,next)=>{
    console.log("Middleware executed");
    res.send("Hiiiii");
    next();
});
//Route to handle GET requests to the root URL
app.get('/',(req,res,next)=>{
    res.send("Hello from the Express server");
   
});
app.get("/profile",(req,res,next)=>{
    return next(new Error("This is a test error")); 
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("Internal Server Error");
})

app.listen(3000,()=>{
    console.log('Express server is listening on port 3000');
});