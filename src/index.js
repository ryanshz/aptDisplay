import os from "os"
import child_process from "child_process"
import express from "express";

const app=express()
const port=8081;
let __dirname="/"+import.meta.url.split("///")[1].split("index")[0];
if(os.platform()=="win32") __dirname=import.meta.url.split("///")[1].split("index")[0];

app.all("/",(req,res)=>{
    res.sendFile("/"+__dirname+"index.html")
    console.log(__dirname+"index.html")
})

app.get("/aptDisplayBackground.jpg",(req,res)=>{
    res.sendFile(__dirname+"aptDisplayBackground.jpg")
    console.log(__dirname+"aptDisplayBackground.jpg")
})

app.get("/default.css",(req,res)=>{
    res.sendFile(__dirname+"default.css")
    console.log(__dirname+"default.css")
})

app.listen(port,()=>{
    console.log(`Server started at: http://localhost:${port}`);
    console.log(`To stop server, use CTRL + C`);
    if(os.platform()=="linux"&&os.arch()=="arm"){
        child_process.exec(`DISPLAY=:0 chromium-browser --kiosk http://127.0.0.1:${port}`,function(error, stdout, stderr) {
            console.dir(stdout);
        })
    }
})