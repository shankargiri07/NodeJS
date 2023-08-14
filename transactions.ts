//create  the sub modules
import * as express from "express";

//create the module
let tarnsactions:any = express.Router();

tarnsactions.get("/", (req:any, res:any):any => {
    res.status(200).json({message:"transaction soon..."});
});

tarnsactions.get("/pierre", (req:any, res:any):any => {
    res.status(200).json({message:"Welcome to pierre for nodejs"});
})



export default tarnsactions;