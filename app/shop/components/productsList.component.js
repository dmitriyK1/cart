(function() {
	'use strict';

	var ProductsListComponent = {
		bindings: {
			search: '@',
			category: '@'
		},
		templateUrl: 'app/shop/components/productsList.component.html',
		controller: 'ProductsListController as productsListController'
	};

	angular
		.module('app.shop')
		.component('productsList', ProductsListComponent);

})();
