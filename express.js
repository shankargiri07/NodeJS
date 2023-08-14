"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
//create rest object
var app = express();
//app object used to develop the rest services
//Ex: GET, POST, PUT, DELETE
//get request
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "welcom to typescript with node.." });
});
//assign the port no
app.listen(7777, function () {
    console.log("Server Started Successfully...");
});
