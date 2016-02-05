var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	appt: [{type: Schema.Types.ObjectId, ref: "Appointment"}]
})

mongoose.model("User", UserSchema);