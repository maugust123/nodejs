/**
 * Created by Morgan on 3/27/2017.
 */

const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');


//Get a list of all Items based on location coordinates
router.get('/ninjas', function (req, res, next) {

    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function (ninjas) {
            res.send(ninjas);
        }).catch(next);

});

//Add a new ninja to the db
router.post('/ninjas', function (req, res, next) {

    //This approach works
//    var ninja = new Ninja(req.body);
//    ninja.save();

    //This also works
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);

});

//Update ninja
router.put('/ninjas/:_id', function (req, res, next) {

    Ninja.findByIdAndUpdate({_id: req.params._id}).then(function () {

        Ninja.findOne({_id: req.params._id}).then(function (ninja) {
            res.send(ninja);
        }).catch(next);

    }).catch(next);
});

//Delete a ninja from the db
router.delete('/ninjas/:_id', function (req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params._id}).then(function (ninja) {
        res.send(ninja);
    }).catch(next);

});


module.exports = router;