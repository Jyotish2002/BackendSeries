const express = require('express');
const app = express();
const userModel=require("./models/user");
const postModel=require("./models/post")
app.get('/', (req, res) => {
    res.send("Hey there!");
});

app.get('/create',async (req,res)=>{
   let user= await userModel.create({
       username:"Jyotish",
       age:22,
       email:"jyotish@gmail.com",
    });
    res.send(user);
})

app.get('/post/create',async(req,res)=>{
  let post= await postModel.create({
    postdata:"Hello sab kaisa ha",
    user:"68ffa1515e8b28440293e3cd",
    
   })
  let user= await userModel.findOne({_id:"68ffa1515e8b28440293e3cd"});
  user.posts.push(post._id);
 await user.save();
  res.send({post,user});
})

app.get('/post/read',async (req,res)=>{
  let posts=  await postModel.find({});
  res.send(posts);
})
app.listen(3000,()=>{
    console.log("working properly");
});