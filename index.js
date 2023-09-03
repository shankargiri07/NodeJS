const http = require("http");

//create server
const server = http.createServer((req, res) => {
    //sending the response
    res.write("This is the response from the server")
    res.end();
})

//server listening to port no
server.listen((7777), () => {
    console.log("server started on port : 7777")
})

//create connection with cloud database
const mongoose = require('mongoose')
let URL = "mongodb+srv://shankargirisl2000:<password>@cluster0.0utfgjb.mongodb.net/DemoDB?retryWrites=true&w=majority";
mongoose.connect(URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback () {
    console.log('Data base connected successfully..')
})