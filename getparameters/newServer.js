"use strict";
//http://localhsot:7777/login?uname="admin"&upwd="admin"
//if you want read query parameter the use "query boject" ->uname & upwd is query parameter
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//rest services, GET, POST, PUT, DELETE...
var app = express();
//authorization
var authorization = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: 'Failds..' });
    }
};
//get request
app.get("/login", [authorization], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ login: "Login Success.." });
    }
    else {
        res.status(401).json({ ligin: "Login Faild" });
    }
    ;
});
//default Request
app.get("/", function (req, res) {
    res.sendFile("D:/NodeJS-Class/nodejs/getparameters/index.html");
});
app.listen(7777, function () {
    console.log('Server started on port : 7777');
});
//http://localhost:7777/login?uname=admin&upwd=admin
