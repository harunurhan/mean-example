var example = angular.module('meanExample', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all movies and show them
	$http.get('/api/movies')
		.success(function(data) {
			$scope.movies = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createMovie = function() {
		$http.post('/api/movies', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.movies = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a movie after checking it
	$scope.deleteMovie = function(id) {
		$http.delete('/api/movies/' + id)
			.success(function(data) {
				$scope.movies = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}