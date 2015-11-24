var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/public/stylesheets', express.static(__dirname + '/public/stylesheets/'));
app.use('/public/js', express.static(__dirname + '/public/js/'));


app.set('views', (__dirname + '/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });


app.use(function(err, req, res, next){
	res.status(500).send(err.message);
	console.log(err);
});

app.listen(3000, function(err){
  console.log('Listening to port 3000');
});
