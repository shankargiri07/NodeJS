//http server
//"http" is the predefined module in nodejs, used to create the Http server
//no need to download http module
//http module already available along with the node software


//import module (http module)
//require() function used to import the modules

let http = require("http");

//createServer() is the function is http module, helps to create the http server

let server = http.createServer((req, res) => {
    //MIME Type
    res.writeHead(200, {
        "Content-Type":'text/html'
    })
    res.write("<h2> Welcome to http server </h2>");
    res.end();
});

server.listen(7777);
console.log('server listing the port no : 7777');


//http://localhost:7777/?unamwe=ashokit$upwd=ashokit
//http -> protocal
//localhost -> domine
//7777 -> port number
//?unamwe=ashokit$upwd=ashokit -> query parameter