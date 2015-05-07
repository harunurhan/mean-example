var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sessionSchema = new Schema({
	day: Number,
	date: Date,
	hall: String,
	movie: {type: Schema.Types.ObjectId, ref:'Movie'},
	seats: [String]
});
module.exports = mongoose.model('Session',sessionSchema);