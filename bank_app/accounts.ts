import * as express from "express";

//create the module
let accounts:any = express.Router();

//create the get request
accounts.get("/", (req:any, res:any):any => {
    res.status(200).json({"message":"Welcome to accounts module"})
});

accounts.get("/login", (req:any, res:any):any => {
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({"login":"Login Success.."});
    } else {
        res.status(400).json({"login":"Login Failds"});
    }
})

//export the module
export default accounts;