const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/',(req,res)=>{
    // res.cookie("name","Jyotish")
    
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("polonoho", salt, function(err, hash) {
       console.log(hash)
       res.send(hash);//password
        
    });
})
})

app.get('/check',(req,res)=>{
    // console.log(req.cookies);
    bcrypt.compare("polonoho", "$2b$10$P3O1/5WxPX6ZbTwKPghcYuTGgOoFR7DJ0t7F6wIIoOrmzlQ/vDuJC", function(err, result) {
        res.send(result);
    // result == true
});
})


app.get('/jwt',(req,res)=>{
    let token = jwt.sign({email:"jyotish@google.com"},"secret");
    console.log(token);
    res.cookie("token",token);
    res.send("Ho gya maja kro")
   
})
app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
})
app.listen(port)