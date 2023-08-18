import * as express from "express";

let accounts:any = express.Router();

accounts.get("/", (req:any, res:any):any => {
    res.status(200).json({"message":"Welcome to accounts modules..."})
});

accounts.post("/", (req:any, res:any):any => {
    res.status(200).json({"message":"Account will be add soon"})
});

export default  accounts;