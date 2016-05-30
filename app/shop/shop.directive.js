(function() {
	'use strict';

	angular
		.module('app.shop')
		.directive('shop', shop);

	function shop() {
		var ddo = {
			templateUrl: 'app/shop/shopView.html',
			controller: 'ShopController',
			controllerAs: 'shopController'
		};

		return ddo;
	}

})();
