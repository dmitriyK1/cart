(function() {
	'use strict';

	var OrdersComponent = {
		templateUrl: 'app/cart/components/orders.component.html',
		controller: 'OrdersController as ordersController'
	};

	angular
		.module('app.cart')
		.component('orders', OrdersComponent);

})();
