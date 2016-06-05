(function() {
	'use strict';

	var CartComponent = {
		templateUrl: 'app/cart/views/cart.view.html',
		controller: 'CartController'
	};

	angular
		.module('app.cart')
		.component('cart', CartComponent);

})();
