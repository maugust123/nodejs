/**
 * Created by Morgan on 3/27/2017.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create geo data Schema and model

const GeoSchema = new Schema({

    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    }

});


const GeoData = mongoose.model('geodata', GeoSchema);

module.exports = GeoData;