/**
 * Created by Morgan on 3/27/2017.
 */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoData = require('./geodata');

//Create ninja Schema and model

const NinjaSchema = new Schema({

    name:{
        type: String,
        required: [true,"Name field is required"]
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    //Add in geo location
    geometry:{
        type:  Schema.ObjectId,
        ref: GeoData
    }
});


const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;