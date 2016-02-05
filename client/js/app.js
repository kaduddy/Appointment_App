var myModule = angular.module("myApp", ["ngRoute"]);

myModule.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/login.html",
		controller: "usersController",
		controllerAs: "usersCtrl"
	})
	.when("/dashboard", {
		templateUrl: "/partials/dashboard.html",
		controller: "dashboardController",
		controllerAs: "dashboardCtrl"
	})
	.when("/new_appointment", {
		templateUrl: "/partials/appointment.html",
		controller: "appointmentController",
		controllerAs: "appointmentCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})