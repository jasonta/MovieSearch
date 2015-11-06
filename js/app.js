(function() {
	var app = angular.module('app', []);
	app.controller('AppController', function($scope, $http, $filter) {

		this.submitQuery = function() {
			var query = "http://www.omdbapi.com/?t=" + this.title;
			console.log("Submitting query: " + query);
			$http.get(query)
				.success(function(response) {
					console.log("response: " + $filter('json')(response, 4));
					$scope.json = response;

					angular.forEach(response, function(value, key) {
						console.log(key + " : " + value);
					});
				});
		};

		this.clearResults = function() {
			delete $scope.json;
			delete this.title;
		}

	});

})();

