/**
 * Created by Morgan on 3/24/2017.
 */


var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    pages:{
        type: String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});


var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
    Book.find(id,callback);
}

module.exports.addBook = function(book,callback){
    Book.create(book,callback);
}
