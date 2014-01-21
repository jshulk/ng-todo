'use strict';
require.config({
	baseUrl : "js",
	shim:{
		angular:{
			exports : "angular"
		},
		angularRoute: ["angular"]
	},
	paths:{
		angular : "libs/angular",
		angularRoute : "libs/angular-route",
		text : "libs/text",
		jquery : "libs/jquery-1.9.1.min"
	}
});


require([
		"angular", 
		"app", 
		"routes", 
		"controllers/todo", 
		"directives/todoFocus", 
		"angularRoute"], 

		function(angular, app ){
		
		angular.element(document).ready(function(){
			angular.bootstrap(document, ['boilerplate']);
		});
		
	
	
});