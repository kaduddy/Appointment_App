myModule.factory("appointmentFactory", function($http) {
	var factory = {};
	factory.getAppointments = function(callback) {
		$http.get("/appointments").success(function(appointments) {
			callback(appointments);
		})
	}

	factory.addAppointment = function(newAppointment, callback) {
		$http.post("/appointments", newAppointment).success(function(output) {
			callback(output);
			
		})
	}

	factory.deleteAppointment = function(appointment, callback) {
		$http.delete("/appointment/" + appointment._id).success(function() {
			console.log("factory")
			callback();
		})
	}

	return factory;
})