var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

//retrieve all movies
router.route('/movies').get(function (req, res) {
	Movie.find({}).exec(function (err, data) {
		if(err) {
			return res.send(err);
		}
		res.json(data);
	});
});

//add new movie
router.route('/movies').post(function (req, res) {
	var movie = new Movie(req.body);
	movie.save(function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({message: 'New movie added'});
	});
});

//update existing movie
router.route('/movies/:id').put(function (req, res) {
	Movie.findOne({ _id: req.params.id }, function (err, movie) {
		if (err) {
			return res.send(err);
		}
		req.body.forEach( function (property) { // TEST this
			movie[property] = req.body[property];
		});
		movie.save(function(err) {
	      	if (err) {
	        	return res.send(err);
	      	}
 		res.json({ message: 'Movie updated' });
    	});
	});
});

//retrieve movie by id
router.route('/movies/:id').get(function (req, res) {
	Movie.findOne({ _id: req.params.id }, function (err, movie) {
		if(err) {
			return res.send(err);
		}
		res.json(movie);
	});
});

//deleting movie by id
router.route('/movies/:id').delete( function (req, res) {
	Movie.remove({_id: req.params.id}, function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({ message: 'Movie deleted'});
	});
});
module.exports = router;


