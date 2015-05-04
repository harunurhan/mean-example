var moongose = require('moongose');
var Schema = moongose.schema;
var movieSchema = new Schema({
	title: String,
	releaseYear: String,
	director: String,
	genre: String,
	language: String
});
module.exports = moongose.model('Movie',movieSchema);