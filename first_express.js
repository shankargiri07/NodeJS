//express
//express is the 3rd modules in nodejs
//express is the framework (rest framework)
//express framework used to develop the rest services ex:-GRT, POST, PUT, DELETE, HEAD, OPTIONS, TRACE....
//express modules, we will download by using either "yarn" tool or "npm" tool
/*
    Ex:
        npm install express --save

        yarn add express --save
*/
//all the modules download to "node_modules" folder in current path

//import the espress module
let express = require('express')

//create the rest object
let app = express();

//where app object is the rest object
//where app object used to develop the rest services
//GET, POST, PUT, DELETE...

//get request
app.get("/", (req, res) => {
    res.status(200).json({"message":"default get request..."});
});

app.get("/demo", (req, res) => {
    res.status(200).json({"message":"data from mongodb data soon..."});
});

app.post("/", (req, res) => {
    res.status(200).json({"message":"default post request..."});
});

app.post("/demo", (req, res) => {
    res.status(200).json({"message":"data from cassandradb database soon..."})
});

app.listen(7777, () => {
    console.log("Server Started...")
});