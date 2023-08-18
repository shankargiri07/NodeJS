"use strict";
//import express module
//server.ts file used to collabrate the custom modules
//fetch insert update delete
//server.ts is the main file
//node starts the execution from "server.ts" file
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
//import the all module
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var remove_1 = require("./remove/remove");
var app = express();
app.use(cors());
//set MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
//use the modules
app.use("/fetch", fetch_1.default);
app.use("/insert", insert_1.default);
app.use("/update", update_1.default);
app.use("remove", remove_1.default);
//assign the port
app.listen(7777, function () {
    console.log("Server started on port : 7777");
});
