import express from "express";
import "dotenv/config"
const app=express();


const PORT=process.env.PORT || 8000 ; 
app.get("/",(req,res)=>{
    res.send({"Message":"this is home page"})
});

app.listen(PORT ,()=>{
    console.log(`app is listening at ${PORT}`)
});