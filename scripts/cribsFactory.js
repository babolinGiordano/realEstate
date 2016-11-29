// scripts/cribsFactory.js

	angular
		.module('cribsApp')
		.factory('cribsFactory', function() {

		// The same real estate listing data we 
		// had in the controller before
		var cribsData = [
			{
				"type": "Condo",
				"price": 220000,
				"address": "213 Grove Street",
				"description": "Excellent place, really nice view!"
			},
			{
				"type": "House",
				"price": 410500,
				"address": "7823 Winding Way",
				"description": "Beautiful home with lots of space for a large family."
			},
			{
				"type": "Duplex",
				"price": 395000,
				"address": "834 River Lane",
				"description": "Great neighbourhood and lot's of nice green space."
			}
		];

		// Method that returns the cribs data
		function getCribs() {
			return cribsData;
		}

		// We need to return the methods that we want
		// to be accessible from outside the service
		return {
			getCribs: getCribs
		};

	});