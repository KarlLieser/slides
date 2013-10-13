var app = angular.module('myApp',[]);
 
/**
	Calling scope as an plain string array paramater gets arround minification issues, 
	as angular knows the name of the dependancy being called
  */
app.controller('angularDemo', ['$scope', function($scope) {
    $scope.userNameStr = '{{ user.name }}';
	$scope.messageNameStr = '{{ message }}';
	$scope.colourNameStr = '{{ colour }}';
	$scope.numberNameStr = '{{ number + 1 }}';
	$scope.japCarNameStr = '{{ car.name }} by {{ car.make }}';
}]);