var bodyParser = require('body-parser');
const Todo = require('../models/todo');

var data = [
    {item: 'get milk'},
    {item: 'walk dog'},
    {item: 'kick some coding ass'},
    {item: 'get lunch'}
];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

    //Get data from mongo db and pass it on to the view
    app.get('/todo', function (req, res, next) {
        Todo.find({}).then(function (data) {
            res.render('todo', {todos: data});
        }).catch(next);

    });

    //get data from the view and save it to mongo db
    app.post('/todo', urlencodedParser, function (req, res, next) {
        Todo.create(req.body).then(function (data) {
            res.json(data);
        }).catch(next);
    });

    //get data from the view and save it to mongo db
    app.put('/todo/:item', urlencodedParser, function (req, res, next) {

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).update().then(function(data){
            res.json(data);
        }).catch(next);

    });

    //delete the requested item from the db
    app.delete('/todo/:item', function (req, res, next) {

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove().then(function(data){
            res.json(data);
        }).catch(next);

    });
};