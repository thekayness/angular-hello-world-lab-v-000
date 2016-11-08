function MainController ($scope) {
	$scope.contact = {
		name: 'Grace Hopper'
	}
}

angular
	.module('app')
	.controller('MainController', MainController);