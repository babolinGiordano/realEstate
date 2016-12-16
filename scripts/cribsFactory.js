// scripts/cribsFactory.js

angular
.module('cribsApp')
.factory('cribsFactory', function($http) {

		// Method that returns the cribs data
		function getCribs() {
			// We're are now using $hhtp to get the
			// data from a separate file
			return $http.get('data/cribs.json');
		}

		// We need to return the methods that we want
		// to be accessible from outside the service
		return {
			getCribs: getCribs
		};    
				
});