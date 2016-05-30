(function() {
	'use strict';

	cartService.$inject = ["$rootScope"];

	angular
		.module('app')
		.factory('cartService', cartService);

	/* @ngInject */
	function cartService($rootScope) {
		var orderedProducts = [];

		var service = {
			getProducts: getProducts,
			addProduct: addProduct,
			removeProduct: removeProduct
		};

		return service;

		function getProducts() {
			return orderedProducts;
		}

		function addProduct(product) {
			addOrderId(product);
			orderedProducts.push(product);
			$rootScope.$emit('product:add', orderedProducts);
		}

		function removeProduct(orderId) {
			orderedProducts = orderedProducts.filter(function iterator(order) {
				return order.orderId !== orderId;
			});

			$rootScope.$emit('product:remove', orderedProducts);
		}

		function addOrderId(product) {
			product.orderId = Math.random(0, 1) * 10e16;
		}
	}

})();
