"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var insert = express.Router().post("/", function (req, res) {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db('store');
            db.collection('product').inserOne({
                "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category
            }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record inserted successfully..!" });
                }
            });
        }
    });
});
exports.default = insert;
