import os from "os"
import child_process from "child_process"
import express from "express";
const app=express()
const port=8081;
const __dirname=import.meta.url.split("///")[1].split("index")[0];


app.all("/",(req,res)=>{
    res.sendFile("/"+__dirname+"index.html")
    console.log(__dirname+"index.html")
})


app.get("/index.css",(req,res)=>{
    res.sendFile(__dirname+"index.css")
})

app.listen(port,()=>{
    if(os.platform()=="linux"&&os.arch()=="arm"){
        child_process.exec(`DISPLAY=:0 chromium-browser --kiosk http://127.0.0.1:${port}`,function(error, stdout, stderr) {
            console.dir(stdout);
        })
    }
})