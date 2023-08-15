"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//import body-parser module
//body-parser  module to read the post parameters
var bodyparser = require("body-parser");
//create the rest object
var app = express();
//this rest objecty used to develop  the rest services, GET, POST, PUT, DELETE...
//set the MIME Type
app.use(bodyparser.json());
//recive form data from client and parse the data (extended Ex. uname, upwd..)
app.use(bodyparser.urlencoded({
    extended: false
}));
//authorization code 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next(); //authorization success..
    }
    else {
        res.status(401).json({ auth: "Faildes.." });
    }
};
//create the post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "Login Success..." });
    }
    else {
        res.status(401).json({ login: "Login Faildes...." });
    }
});
app.listen(7777, function () {
    console.log("Server started on port : 7777");
});
