var Users = require("./../controllers/users.js");
var Appointments = require("./../controllers/appointments.js");

module.exports = function(app) {
	app.post("/users", Users.create);
	
	app.get("/users/:id", Users.show);

	app.post("/appointments", Appointments.create);

	app.get("/appointments", Appointments.show);

	app.delete("/appointment/:id", Appointments.destroy);
}