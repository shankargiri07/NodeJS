"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var card = express.Router();
card.post("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to card module" });
});
exports.default = card;
