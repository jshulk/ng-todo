define([
		"angular", 
		"app", 
		"text!partials/todos.html",
		"controllers/todo",
		"angularRoute"
		], function(angular, app, todosTemplate ){

	return app.config(['$routeProvider', function($routeProvider){

		$routeProvider
					.when("/", {
						controller : "TodoController",
						template : todosTemplate
					})
					.when("/:status", {
						controller : "TodoController",
						template : todosTemplate
					})
					.otherwise({redirectTo:"/"});
	}]);
});