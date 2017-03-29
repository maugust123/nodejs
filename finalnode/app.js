//https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));//tell node which folder has all your static files


app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/index.html');//Also this works
    res.render('index');
});

app.get('/profile/:name', function (req, res) {

    var person = {
        age: 29,
        job: "ninja",
        hobbies: ["music", "movies", "green cover", "fun and jokes"]
    };

    res.render('profile', {
        name: req.params.name,
        data: person
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {rq: req.query});
});

// POST /contact gets urlencoded bodies
app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);

    if (!req.body) return res.sendStatus(400)
    res.render('contact-success', {data: req.body});
})

app.listen(process.env.port || 3000);
console.log('Server started...');