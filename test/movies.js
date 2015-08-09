const should = require('should');
const request = require('supertest');
const config = require('../config');
const url = 'http://localhost:8000';
describe('Routing', function(){

	describe('Movies', function() {
		it('should GET correctly', function(done) {
			request(url)
			   	.get('/api/movies')
				.expect(200)
		 		.end(function(err, res) {
					if (err) {
						return done(err);
					}
					//TODO: check if response array is empty or not
					done();
			});		
		});

		var _id;
		it('should POST new movie', function(done) {
			var movie = {title: 'Mocha Test'
						,releaseYear: '2015'
						,director: 'Harun'
						,genre: 'Testing'
						,language: 'Javascript'};
			request(url)
				.post('/api/movies')
				.send(movie)
				.expect(200)
				.end(function(err, res) {
					if(err) {
						return done(err);
					}
					should.exist(res.body._id, 'POST response include _id');
					_id = res.body._id;
					done();
				});
		});
		
		it('should GET by id', function(done) {
			request(url)
				.get('/api/movies/'+_id)
				.expect(200)
				.end(function(err, res) {
					if(err) {
						return done(err);
					}
					done();
			});
		});
		
		it('should DELETE by id', function(done) {
			request(url)
				.delete('/api/movies/'+_id)
				.expect(200)
				.end(function(err, res) {
					if(err) {
						return done(err);
					}
					should.exist(res.body.message, 'DELETE response include message');
					done();	
			});
		});

	});

});
