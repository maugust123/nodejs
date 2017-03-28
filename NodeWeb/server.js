//https://www.youtube.com/watch?v=kHV7gOHvNdk
/**
 * Created by Morgan on 3/24/2017.
 */

var express = require('express');
app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log('Server running on port 3000');