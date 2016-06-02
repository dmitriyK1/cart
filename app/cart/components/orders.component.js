(function() {
	'use strict';

	var OrdersComponent = {
		templateUrl: 'app/cart/components/orders.component.html',
		controller: 'OrdersController',
		controllerAs: 'ordersController'
	};

	angular
		.module('app.cart')
		.component('orders', OrdersComponent);

})();
