//import express module
import * as express from "express";

let transactions:any = express.Router();

const auth1:any = (req:any, res:any, next:any):any => {
    let allHeaders:any = req.headers;
    let token = allHeaders.token;
    if(token === "abc123"){
        next();
    } else {
        res.status(200).json({'auth1':"Failds.."})
    }
};

const auth2:any = (req:any, res:any, next:any):any => {
    let allHeaders = req.headers;
    let wish = allHeaders.wish;

    if(wish === "Hello"){
        next();
    } else {
        res.status(200).json({"auth2":"Failds..."})
    }
}

transactions.get("/", [auth1, auth2], (req:any, res:any):any => {
    res.status(200).json({"message":"Welcome to transactions module"});
});

//export the module
export default transactions