(function() {
	'use strict';

	angular
		.module('app.shop')
		.directive('productsList', productsList);

	function productsList() {
		var ddo = {
			scope: {
				search: '@',
				category: '@'
			},
			templateUrl: 'app/shop/productsList.directive.html',
			controller: 'ProductsListController',
			controllerAs: 'productsListController',
			bindToController: true
		};

		return ddo;
	}
})();
