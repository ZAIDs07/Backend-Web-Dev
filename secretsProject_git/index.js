//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import  Express  from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port=3000;
const app=Express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
console.log(req.body);
if(req.body['password']=='ZaidDev'){
    res.sendFile(__dirname+"/public/fsk.html");
}
else{
    res.sendFile(__dirname+"/public/index.html");
}
})

app.listen(port,()=>{
    console.log("Server running on port 3000.");
});

