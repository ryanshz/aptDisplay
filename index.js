import os from "os"
import child_process from "child_process"
import express from "express";
const app=express()
const port=8081;


app.all("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    if(os.platform()=="linux"&&os.arch()=="arm")
    child_process.exec(`DISPLAY=:0 chromium-browser --kiosk http://127.0.0.1:${port}`,function(error, stdout, stderr) {
        console.dir(stdout);
      })
})