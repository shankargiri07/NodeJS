var express = require("express");
var cors = require("cors")
var mongoClient = require("mongodb").MongoClient;

var connectiondb = "mongodb+srv://shankargirisl2000:<password>@cluster0.0utfgjb.mongodb.net/DemoDB?retryWrites=true&w=majority";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));


app.get("/fetch", (req, res) =>{
    mongoClient.connect(connectiondb).then((clientObject) => {
        var database = clientObject.db('store');
        database.collection('product').the(documents => {
            res.send(documents);
            res.end();
        });
    })
});

app.listen(7777, () => {
    console.log('server started ..!')
});