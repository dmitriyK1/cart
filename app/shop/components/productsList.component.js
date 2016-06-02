(function() {
	'use strict';

	var ProductsListComponent = {
		bindings: {
			search: '@',
			category: '@'
		},
		templateUrl: 'app/shop/components/productsList.component.html',
		controller: 'ProductsListController',
		controllerAs: 'productsListController'
	};

	angular
		.module('app.shop')
		.component('productsListComponent', ProductsListComponent);

})();
