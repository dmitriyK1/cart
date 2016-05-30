(function() {
	'use strict';

	angular
		.module('app.cart')
		.directive('orders', orders);

	function orders() {
		var ddo = {
			templateUrl: 'app/cart/orders.directive.html',
			controller: 'OrdersController',
			controllerAs: 'ordersController'
		};

		return ddo;
	}

})();
