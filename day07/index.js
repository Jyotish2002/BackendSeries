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
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
       res.render("read",{data:data,filename:req.params.filename});
    })
})


app.get('/edit/:filename',(req,res)=>{
    res.render('edit', {filename:req.params.filename});
})

app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.New}`,(err)=>{
        res.redirect("/");
    })
})

app.listen(3000,()=>{
    console.log('Server is running')
})