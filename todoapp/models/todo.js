/**
 * Created by Morgan on 3/29/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create todo Schema and model

const TodSchema = new Schema({

    item:{
        type: String,
        required: [true,"action is required"]
    }
});


const Todo = mongoose.model('todo', TodSchema);

module.exports = Todo;