define(["app"], function(app){

	return app.factory("todoStorage", function(){
		var STORAGE_ID = 'angular-todo';
		return {
			get: function(){
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},
			put: function(todos){
				localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			}
		};
	});
});