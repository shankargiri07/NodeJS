import * as express from "express";
import * as mongodb from "mongodb";

let ashokIT:any = mongodb.MongoClient;

let update:any = express.Router().put('/', (req:any, res:any):any => {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", (err:any, connection:any):any => {
        if(err) throw err
        else {
            let db:any = connection.db('store');
            db.collection('product').updateOne({"id":req.body.id},{$set:{"price":req.body.price, "quantity":req.body.quantity}},(err:any, result:any):any => {
                if(err) throw err;
                else {
                    res.send({"message":"record update succeefully..!"})
                }
            });
        }
    });
});

export default update;