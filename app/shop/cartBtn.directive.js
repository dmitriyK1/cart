(function() {
	'use strict';

	cartBtn.$inject = ["$rootScope", "cartService"];

	angular
		.module('app.widgets')
		.directive('cartBtn', cartBtn);

	/* @ngInject */
	function cartBtn() {
		var ddo = {
			scope: {},
			templateUrl: 'app/shop/cartBtn.directive.html',
			controller: 'CartbtnController',
			controllerAs: 'cartbtnController'
		};

		return ddo;
	}

})();
