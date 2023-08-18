//import http module
let http = require("http");

//impor url module
//url module used to read the query parameters
//url module also predefined module
//url module avaliable along with the node software

let url = require("url");

//create the httpServer
let server = http.createServer((req, res) => {
    //set the MIME Type
    //communication language between client and server called as MIME
    res.writeHead(200, {
        "Content-Type":'text/html'
    });

    //parse the request
   let obj = url.parse(req.url, true).query;

    if(obj.uname === "ashokit" && obj.upwd === "ashokit"){
        res.write('<h2> Login Success </h2>');
    } else {
        res.write("<h2> Login Faild </h2>");
    }
    res.end();
});

server.listen(7777);
console.log('server listing port no : 7777')