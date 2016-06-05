(function() {
	'use strict';

	var ProductsListComponent = {
		bindings: {
			search: '@',
			category: '@'
		},
		templateUrl: 'app/shop/components/productsList.component.html',
		controller: 'ProductsListController'
	};

	angular
		.module('app.shop')
		.component('productsList', ProductsListComponent);

})();
