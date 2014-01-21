define(['app'], function(app){

	return app.directive("todoFocus", ["$timeout", function($timeout){	
		
		return function(scope, element, attrs){
			scope.$watch(attrs.todoFocus, function(newVal){
				if( newVal ){
					$timeout(function(){
						element[0].focus();
					}, 0, false);
				}
			});
		};
	}]);
});