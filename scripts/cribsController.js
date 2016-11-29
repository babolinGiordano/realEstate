// scripts/cribsController.js

	angular
		.module('cribsApp')
		.controller('cribsController', function($scope, cribsFactory) {

		//TODO: communicate data to the view!
		// $scope.hello = "Hello World!";

		$scope.cribs = cribsFactory.getCribs();

	});

