/* //read get parameters in expressjs
import * as express from "express";

let app = express();
app.get("/login/uname/:uname/upwd/:upwd", (req:any, res:any):any => {
    if(req.params.uname === "ashokit" && req.params.upwd === "ashokit"){
        res.status(200).json({login:'Login Success..'})
    } else {
        res.status(401).json({login:'Login Failds..'})
    }
});

app.listen(7777, () => {
    console.log("Server Started On Port : 7777");
});

//http://localhost:7777/sample?uname=ashokit&upwd=ashokit
//http://localhost:7777/sample/user/ashokit/pwd/ashokit */

//http://localhost:7777/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd

import * as express from "express";

let app = express();

app.use("/login", (req:any, res:any):any => {
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({login:"Login successed.."})
    } else {
        res.status(401).json("login:'Login Failds..")
    }
});

app.listen(7777, () => {
    console.log('Server started on port : 7777')
})