"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import custom module in main 
var accounts_1 = require("./accounts");
var transactions_1 = require("./transactions");
var card_1 = require("./card");
var app = express();
app.use("/accounts", accounts_1.default);
app.use("/transactions", transactions_1.default);
app.use("/card", card_1.default);
app.listen(7777, function () {
    console.log('Server Stared On Port : 7777');
});
//http://localhsot:7777/accounts
//http://localhost:7777/accounts/login
//http://localhsot:7777/transactions  token,wish
//http://localhsot:7777/card
