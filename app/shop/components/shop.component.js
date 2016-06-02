(function() {
	'use strict';
	var ShopComponent = {
		templateUrl: 'app/shop/views/shop.view.html',
		controller: 'ShopController',
		controllerAs: 'shopController'
	}

	angular
		.module('app.shop')
		.component('shopComponent', ShopComponent);


})();
