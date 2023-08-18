"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var update = express.Router().put('/', function (req, res) {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db('store');
            db.collection('product').updateOne({ "id": req.body.id }, { $set: { "price": req.body.price, "quantity": req.body.quantity } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "message": "record update succeefully..!" });
                }
            });
        }
    });
});
exports.default = update;
