const express =require("express");
const app =express();
app.get("/" ,(req,res)=>{
    // console.log(req);
    // console.log(res);
    res.send("<h1> hi lee </h1>");

});

app.listen(5000 ,()=>{
    console.log("hi sever");

});
