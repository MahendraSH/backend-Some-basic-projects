const express = require("express")
const bodyParser=require("body-parser")
const app =express();
app.use(bodyParser.urlencoded({extended:true}))
app.post("/",(req,res)=>{
// console.log(req.body);
// res.send("hisndis")
res.send (`The result =${ Number(req.body.number1)+Number(req.body.number2)}`)
console.log((req.body.number1));
console.log((req.body.number2));



});
app.get("/",(req,res)=>{

    // res.send("HI")
    res.sendFile(__dirname+"/index.html");


});
app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmicalculator.html");
})
app.listen(5000,()=>{
    console.log("server at port 5000");
})
app.post("/bmicalculator",(req,res)=>{
    let bmi =Number(req.body.weight);
let hg=Number(req.body.height);
bmi =Math.round(bmi/hg*hg);
res.send("The result "+bmi);
console.log(bmi +" "+hg);
})