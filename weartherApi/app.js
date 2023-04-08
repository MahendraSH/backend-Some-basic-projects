const { json } = require("express");
const express = require("express");
const bodyParser=require('body-parser')
const https =require("node:https");
const dotenv= require('dotenv').config();

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
    
})
app.post("/",(req,res)=>{

    const query=req.body.CityName;
    
const url =process.env.url


https.get(url,(respos)=>
    {
        console.log(respos.statusCode);
        respos.on("data",(data)=>{
                 const weatherData=JSON.parse(data);
                //  console.log(weatherData);
                const temp=weatherData.main.temp;
                const weatherDiscription=weatherData.weather[0].description
                const icon =weatherData.weather[0].icon
                // console.log(temp)
                res.send(`
                <h1> 
                temp at ciity ${query} =${temp}
                and the climate is =${weatherDiscription};
                </h1>
                <img src='http://openweathermap.org/img/wn/${icon}@2x.png'>
                `)
                // <img src="" alt="">
        })
    })
    

})


app.listen(5000,()=>{
console.log('The serving running at port 5000');
})
