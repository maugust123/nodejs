var http = require('http');
var stuff = require('./stuff');
var fs = require('fs');


var server = http.createServer(function(req,res){
   console.log('Request made was: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);

});

server.listen(3000);
console.log('Server is started now....');

//console.log(stuff.adder(4, 8));
//console.log(stuff.counter(['morgan', 'morgan','Anna']));


//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

////First way to read and write data
//myReadStream.on('data', function(chunk){
//    console.log('new chunk received: ');
////    console.log(chunk);
//
//    myWriteStream.write(chunk);
//});



//Second way to read and write data using pipe

//myReadStream.pipe(myWriteStream);