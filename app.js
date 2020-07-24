const express = require('express');
const exphbs = require('express-handlebars');

var port = process.env.PORT || 3000;

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.status(200).render('homePage');
});

app.listen(port, function() {
    console.log("== server is listening on port", port);
});
