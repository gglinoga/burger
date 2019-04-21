var exp = require('express');
var burger = require('../burger.js');

var app = express();
app.use(urlencoded({
    extended: true
}));
app.use(json());

//router

module.exports = router;