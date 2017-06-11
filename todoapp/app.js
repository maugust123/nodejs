var express = require('express');
const mongoose = require('mongoose');
var todoController = require('./controller/todoController');

var app  = express();

//Connect to mongo db
mongoose.connect('mongodb://localhost/todoApp');
mongoose.Promise = global.Promise;

//set up the template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//Error handling middleware
app.use(function(err, req,res, next){
    //console.log(err);
    //res.status(422).send({error: err.message});
    throw err;
});


//listen to port
app.listen(process.env.port || 3000);
console.log('You are listening to port 3000..');
