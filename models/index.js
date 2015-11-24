var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip-planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));

var placeSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	location: {
		type: [Number],
		required: true
	}
});

var hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	place: {
		type: [placeSchema],
		required: true
	},
	num_stars: {
		type: Number,
		required: true
	},
	amenities: {
		type: String,
		required: true
	}
});

var activitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	place: {
		type: [placeSchema],
		required: true
	},
	age_range: {
		type: String,
		required: true
	}
});

var restaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	place: {
		type: [placeSchema],
		required: true
	},
	cuisines: {
		type: String
	},
	price: {
		type: Number,
		required: true
	}
});

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Restaurant: Restaurant,
	Activity: Activity
};