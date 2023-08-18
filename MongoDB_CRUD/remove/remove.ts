//import express module
import * as express from "express";

//import mongodb module
import * as mongodb from "mongodb";

//create client api
let ashokIT:any = mongodb.MongoClient;

//create module
let remove:any = express.Router().delete("/", (req:any, res:any):any => {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", (err:any, connection:any):any => {
        if(err) throw err
        else {
            let db:any = connection.db("store");
            db.collection("product").deleteOne({"id":req.body.id}, (err:any, res:any):any => {
                if(err) throw err
                else {
                    res.status(200).json({message:`${req.body.id} record delete successfully..!`});
                }
            })
        }
    });
});

//export the module
export default remove;