"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express modular
//express module, used to develop the rest services
var express = require("express");
//import mongobd module
//mongodb module, used to connect to mongodb database
var mongodb = require("mongodb");
//create the client
//mongodb follows the "client server" architecture
var ashokIT = mongodb.MongoClient;
//create the module 
var fetch = express.Router().get("/", function (req, res) {
    ashokIT.connect("mongodb+srv://shankargirisl2000:<password>@cluster0.pwmuppa.mongodb.net/?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db('store');
            db.collection("product").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//export the module
exports.default = fetch;
