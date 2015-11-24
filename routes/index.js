var express = require('express');
var router = express.Router();
module.exports = router;
var bluebird = require("bluebird");

var models = require('../models/');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;

router.get('/', function(req, res){
	// var promises = [Hotel.find({}).exec(), Activity.find({}).exec(), Restaurant.find({}).exec()];
	// bluebird.all(promises)
	// .then(function(files){
	// 	res.json(files);
	// });
	res.render('index');
});