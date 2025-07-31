const express = require('express');
const app = express();
const path=require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
const fs = require('fs');

app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
       res.render("index",{files:files});
    })
    
})

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Success")
            res.redirect('/');
        }
    })
})

app.get('/read/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('read', {filename: req.params.filename, content: data});
        }
    })
})


app.listen(3000,()=>{
    console.log('Server is running')
})