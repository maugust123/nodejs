/**
 * Created by Morgan on 3/31/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    name: {
        type: String,
        required: [true,"Name field is required"]
    },
    password: {
        type: String,
        required: [true,"Password field is required"]
    },
    admin: {
        type: Boolean,
        default: false
    }
}));