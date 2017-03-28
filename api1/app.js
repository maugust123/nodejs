/**
 * Created by Morgan on 3/27/2017.
 */
//https://www.youtube.com/watch?v=BRdcRFvuqsE
//https://www.youtube.com/watch?v=BRdcRFvuqsE&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8
//https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp
//https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/playlists?sort=dd&view=1&shelf_id=0


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up express app
const app = express();

//Connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//Parse the body to Json or any other formate
app.use(bodyParser.json())

//Initialise routes
app.use('/api',require('./routes/api'));

//Error handling middleware
app.use(function(err, req,res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

//Listen for request
app.listen(process.env.port || 3000, function () {
console.log('Now listening to requests...');
});
