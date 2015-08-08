const should = require('should');
const request = require('supertest');
const config = require('../config');
describe('Routing', function(){
	describe('Movies', function() {
		it('should GET correctly', function(done) {
			request('http://localhost:8000')
			   	.get('/api/movies')
				.expect(200)
		 		.end(function(err, res) {
					if (err) {
						return done(err);
					}
					done();
			});		
		});
	});

});
