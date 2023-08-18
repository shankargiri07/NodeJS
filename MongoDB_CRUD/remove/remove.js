"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//import mongodb module
var mongodb = require("mongodb");
//create client api
var ashokIT = mongodb.MongoClient;
//create module
var remove = express.Router().delete("/", function (req, res) {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("store");
            db.collection("product").deleteOne({ "id": req.body.id }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ message: "".concat(req.body.id, " record delete successfully..!") });
                }
            });
        }
    });
});
//export the module
exports.default = remove;
