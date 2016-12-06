angular
	.module('cribsApp')
	.filter('cribsFilter', function() {

		// The filter needs to return a function
		// that does the actual filtering
		return function(listings, priceInfo) {

			// empty array that will eventually contain
			// the filtered data
			var filtered = [];
			var min = priceInfo.min;
			var max = priceInfo.max;

			// Loop through each listing and check whether
			// the price value is in range
			angular.forEach(listings, function(listing) {

				if(listing.price >= min && listing.price <= max) {

					// if the value is in range, push it into the array
					filtered.push(listing);
				}
			});

			// Return the filtered array
			return filtered;
		}
	});