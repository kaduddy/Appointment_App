var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
	date: String,
	time: String,
	complaint: String,
	_user: {type: Schema.Types.ObjectId, ref: "User"}
})

var Appointment = mongoose.model("Appointment", AppointmentSchema);