(function() {
	'use strict';
	var ShopComponent = {
		templateUrl: 'app/shop/views/shop.view.html',
		controller: 'ShopController'
	}

	angular
		.module('app.shop')
		.component('shop', ShopComponent);


})();
