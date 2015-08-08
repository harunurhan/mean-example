var should = require('should');
var request = require('supertest');
var mongoose = require('mongoose');
var config = require('./config');
describe('Routing', function(){
	before(function(done) {
		mongoose.connect(config.db);	
		done();
	});

	describe('Movies', function() {
		it('should', function(done) {
			//test something!
		});
	});

});
