//import express module
import * as express from "express";

//create rest object
let app:any = express();

//app object used to develop the rest services
//Ex: GET, POST, PUT, DELETE

//get request
app.get("/ashokit", (req:any, res:any):any => {
    res.status(200).json({"message":"welcom to typescript with node.."});
});

//assign the port no
app.listen(7777, () => {
    console.log("Server Started Successfully...")
});