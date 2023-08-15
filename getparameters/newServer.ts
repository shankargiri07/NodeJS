//http://localhsot:7777/login?uname="admin"&upwd="admin"
//if you want read query parameter the use "query boject" ->uname & upwd is query parameter

//import express module
import * as express from "express";


//rest services, GET, POST, PUT, DELETE...
let app:any = express();

//authorization
let authorization = (req:any, res:any, next:any):any => {
    let allHeaders = req.headers;
    if(allHeaders.token === "ashokIT"){
        next();
    } else {
        res.status(500).json({auth:'Failds..'})
    }
}


//get request
app.get("/login", [authorization], (req:any, res:any):any => {
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({login:"Login Success.."})
    } else {
        res.status(401).json({ligin:"Login Faild"})
    };
});

//default Request
app.get("/", (req:any, res:any):any => {
    res.sendFile("D:/NodeJS-Class/nodejs/getparameters/index.html")
})

app.listen(7777, () => {
    console.log('Server started on port : 7777')
});

//http://localhost:7777/login?uname=admin&upwd=admin