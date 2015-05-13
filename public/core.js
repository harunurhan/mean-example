var example = angular.module('meanExample', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all movies and show them
	function refresh() {
		$http.get('/api/movies')
			.success(function(data) {
				$scope.movies = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
	refresh();

	// when submitting the add form, send the text to the node API
	$scope.createMovie = function() {
		$http.post('/api/movies', $scope.formData)
			.success(function(res) {
				refresh();
				$scope.formData = {}; // clear the form so our user is ready to enter another
				console.log('Succes: ' + res);
			})
			.error(function(res) {
				console.log('Error: ' + res);
			});
	};

	// delete a movie after checking it
	$scope.deleteMovie = function(id) {
		$http.delete('/api/movies/' + id)
			.success(function(res) {
				refresh();
				console.log('Succes: ' + res);
			})
			.error(function(res) {
				console.log('Error: ' + res);
			});
	};

}