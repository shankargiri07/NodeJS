//import express module
//server.ts file used to collabrate the custom modules
//fetch insert update delete
//server.ts is the main file
//node starts the execution from "server.ts" file

import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

//import the all module
import fetch from "./fetch/fetch";
import insert from "./insert/insert";
import update from "./update/update";
import remove from "./remove/remove";

let app:any = express();
app.use(cors());

//set MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false
}));

//use the modules
app.use("/fetch", fetch);
app.use("/insert", insert);
app.use("/update", update);
app.use("remove", remove);

//assign the port
app.listen(7777, () => {
    console.log("Server started on port : 7777")
})