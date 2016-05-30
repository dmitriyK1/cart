(function() {
	'use strict';

	ProductsListController.$inject = ["dataservice", "cartService"];

	angular
		.module('app.shop')
		.controller('ProductsListController', ProductsListController);

	/* @ngInject */
	function ProductsListController(dataservice, cartService) {
		var vm = this;
		vm.add = add;

		activate();

		function activate() {
			dataservice
				.loadProducts()
				.then(onProductsLoad);
		}

		function onProductsLoad(products) {
			vm.products = products;
		}

		function add(product) {
			cartService.addProduct({
				id: product.id,
				price: product.price,
				name: product.name
			});
		}

	}

})();
