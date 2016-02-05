myModule.controller("appointmentController", function(userFactory, appointmentFactory, $location) {
	this.user = userFactory.user;
	var self = this;
	var now = moment()

	self.err = false;
	this.addAppointment = function() {
		self.newAppointment.user = this.user;
		appointmentFactory.addAppointment(self.newAppointment, function(output) {
			self.ouput = output;
			if (output !== true) {
				self.err = true;
				alert("Something is wrong with your request. Please check your date and the length of your complaint.")
			}
			else {
			$location.path("/dashboard")	
				
			}
		})
		
	}
})