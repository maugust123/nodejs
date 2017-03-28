/*
 var connect = require('connect');
 var http = require('http');

 var app = connect();

 function onRequest(request, response) {
 console.log("A user made a request" + request.url);
 response.writeHead(200, { "Context-Type": "text/plain" });
 response.write("Here is some data");
 response.end();
 }

 http.createServer(onRequest).listen(8888);
 console.log("server is now running...");*/

var connect = require('connect');
var http = require('http');

var app = connect();

// gzip/deflate outgoing responses
var compression = require('compression');
app.use(compression());

// store session state in browser cookie
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// respond to all requests
app.use(function(req, res){
    res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(8888);
console.log("server is now running...");
