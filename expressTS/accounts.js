"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to accounts modules..." });
});
accounts.post("/", function (req, res) {
    res.status(200).json({ "message": "Welcom will be add soon" });
});
exports.default = accounts;
