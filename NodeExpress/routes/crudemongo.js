var express = require('express');
var router = express.Router();


var insertDocument = function(db, callback) {
    db.collection('restaurants').insertOne( {
        "address" : {
            "street" : "2 Avenue",
            "zipcode" : "10075",
            "building" : "1480",
            "coord" : [ -73.9557413, 40.7720266 ]
        },
        "borough" : "Manhattan",
        "cuisine" : "Italian",
        "grades" : [
            {
                "date" : new Date("2014-10-01T00:00:00Z"),
                "grade" : "A",
                "score" : 11
            },
            {
                "date" : new Date("2014-01-16T00:00:00Z"),
                "grade" : "B",
                "score" : 17
            }
        ],
        "name" : "Vella",
        "restaurant_id" : "41704620"
    }, function(err, result) {
        if(err) throw err;
//        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};

var findRestaurants = function(db, callback) {
    var cursor =db.collection('restaurants').find( );
    cursor.forEach(function(err, doc) {
        //assert.equal(err, null);
        if(err){ console.log(err);}
        if (doc != null) {
            console.dir(doc);
            console.log(doc);
        } else {
            console.log('No doc');
            callback();
        }
    });
};

/* GET home page. */
router.get('/', function (req, res, next) {

    isak.open();
//    insertDocument(isak, function(err) {
//        if(err){ console.log(err);}
//        isak.close();
//    });

    findRestaurants(isak, function(err) {
        if(err){ console.log(err);}
        isak.close();
    });


    res.render('crudemongo', {
        title: 'Express',
        first_name:'Morgan',
        last_name: 'Kamoga'
    });
});



module.exports = router;
