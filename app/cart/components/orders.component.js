(function() {
	'use strict';

	var OrdersComponent = {
		templateUrl: 'app/cart/components/orders.component.html',
		controller: 'OrdersController'
	};

	angular
		.module('app.cart')
		.component('orders', OrdersComponent);

})();
