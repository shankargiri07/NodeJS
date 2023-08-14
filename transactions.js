"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create  the sub modules
var express = require("express");
//create the module
var tarnsactions = express.Router();
tarnsactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction soon..." });
});
tarnsactions.get("/pierre", function (req, res) {
    res.status(200).json({ message: "Welcome to pierre for nodejs" });
});
exports.default = tarnsactions;
