"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1.default);
app.use("/module2", accounts_1.default);
app.listen(7777, function () {
    console.log('Server Started On Port : 7777');
});
//http://localhost:7777/module1  -> go to transactions
//http://localhost:7777/module1/pierres
//http://localhsot:7777/module2 -> go to accounts
//http://localhost:7777/
