var moongose = require('moongose');
var Schema = moongose.schema;
var sessionSchema = new Schema({
	day: Number,
	date: Date,
	hall: String,
	movie: {type: Schema.Types.ObjectId, ref:'Movie'},
	seats: [String]
});
module.exports = moongose.model('Session',sessionSchema);