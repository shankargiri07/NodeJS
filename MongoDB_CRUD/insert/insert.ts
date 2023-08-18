import * as express from "express";
import * as mongodb from "mongodb";

let ashokIT:any = mongodb.MongoClient;

let insert:any = express.Router().post("/", (req:any, res:any):any => {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", (err:any, connection:any):any => {
        if(err) throw err
        else {
           let db:any = connection.db('store');
            db.collection('product').inserOne({
                "id":req.body.id,
                "name":req.body.name,
                "quantity":req.body.quantity,
                "price":req.body.price,
                "category":req.body.category
            }, (err:any, result:any):any => {
                if(err) throw err;
                else {
                    res.send({message:"record inserted successfully..!"})
                } 
            });
        }
    });
});

export default insert;