var mongoose = require("mongoose");
var User = mongoose.model("User");
var Appointment = mongoose.model("Appointment");
var moment = require("moment");
moment().format();
var now = moment();
var last = moment("5:01 pm");
var first = moment("7:59 am");

module.exports = {
	create: function(req, res) {
		Appointment.find({date: moment(req.body.date).format('MMMM, D, YYYY')}, function(err, appointment) {
			if(appointment.length === 3) {
				console.log("Error")
				res.json(err)
			}
			else {
				var newAppointment = new Appointment({
					date: moment(req.body.date).format('MMMM, D, YYYY'),
					time: req.body.timer,
					complaint: req.body.complaint,
					_user: req.body.user
				})
				var comp = req.body.complaint
					if(now.isAfter(req.body.date)) {
						console.log("ERROR")
						res.send(err);
					}
					else if(comp.length < 10) {
						console.log(err)
						res.json(err)
					}
					else {

						newAppointment.save(function(err, newAppointment) {
						if(err) {
							res.json(err);
						}
						else{
							console.log("success")
							res.json(true)
						}
					})
				}

			}
		})
		

	},
	show: function(req, res) {
		Appointment.find({}).populate("_user").exec(function(err, appointments) {
			res.json(appointments);
		})
	},

	destroy: function(req, res) {
		Appointment.remove({_id: req.params.id}, function(err, appointment) {
			if(err) {
				res.json(err);
			}
			else {
				res.json(true);
			}
		})
	}
}