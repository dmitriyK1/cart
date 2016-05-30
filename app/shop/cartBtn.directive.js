(function() {
	'use strict';

	cartBtn.$inject = ["$rootScope", "cartService"];

	angular
		.module('app.widgets')
		.directive('cartBtn', cartBtn);

	/* @ngInject */
	function cartBtn($rootScope, cartService) {
		var ddo = {
			scope: {},
			templateUrl: 'app/shop/cartBtn.directive.html',
			controller: 'CartbtnController',
			controllerAs: 'cartbtnController',
			link: link
		};

		return ddo;

		function link(scope, element, attrs, ctrl) {
			var subscription = $rootScope.$on('product:add', onProductAdd);

			scope.$on('$destroy', subscription);

			ctrl.orderCount = cartService.getProducts().length;

			function onProductAdd(e, orders) {
				ctrl.orderCount = orders.length;
			}
		}
	}

})();
