(function() {
	'use strict';

	angular
		.module('app.cart')
		.directive('cart', cart);

	function cart() {
		var ddo = {
			templateUrl: 'app/cart/cartView.html',
			controller: 'CartController',
			controllerAs: 'cartController'
		};

		return ddo;
	}

})();
