myModule.controller("dashboardController", function(userFactory, appointmentFactory, $location) {
	this.user = userFactory.user;
	var self = this;

	function getAppointments() {
		appointmentFactory.getAppointments(function(appointments) {
			self.appointments = appointments;
		})
	}
	getAppointments();

	this.deleteAppointment = function(appointment) {
		appointmentFactory.deleteAppointment(appointment, function() {
			console.log("front controller")
			getAppointments();
		})
	}
})