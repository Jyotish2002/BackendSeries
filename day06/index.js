const express = require('express');
const app= express();
const path = require('path');
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory


app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
   res.render("index")
});

app.get('/profile/:name',(req,res)=>{
    const uname=req.params.name;
    res.send(`Hello welcome ${uname} to our website`);
    
})

app.get('/profile/:name/:age',(req,res)=>{
    const uname=req.params.name;
    const age=req.params.age;
    res.send(`Welcome ${uname} your age is ${age}`)
    console.log("Profile with age accessed"); 
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

