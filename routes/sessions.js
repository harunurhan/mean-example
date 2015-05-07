var Session = require('../models/session');
var express = require('express');
var router = express.Router();

//add session
router.route('/sessions').post(function (req, res) {
	var session = new Session(req.body);
	session.save(function (err) {
		if(err) {
			return res.send(err);
		}
		res.json({message: 'New session added'});
	});
});

//retrieve sessions
router.route('/sessions').get(function (req, res) {
	Session.find().exec(function (err, data) {
		if(err) {
			return res.send(err);
		}
		res.json(data);
	});
});
module.exports = router;