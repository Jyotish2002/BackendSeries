const express = require('express');
const app=express();
const port = 3000;

const userModel=require('./usermodel');
app.get('/',(req,res)=>{
    res.send("Hello world tell me the time")
})

app.get('/create',async (req,res)=>{
  let createdUser=  await userModel.create({
        name:"Jyotish Yadav",
        username:"jyotish",
        email:"jyotish@example.com"
    })
    res.send(createdUser);
    console.log(createdUser);
});


app.get('/update',async(req,res)=>{
  let updatedUser = await  userModel.findOneAndUpdate({username:"jyotish"},{name:"Rohit Yadav"},{new:true})
  res.send(updatedUser);
})
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
})