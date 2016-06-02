(function() {
	'use strict';

	CartbtnController.$inject = ['$rootScope', '$scope', 'cartService'];

	angular
		.module('app.shop')
		.controller('CartbtnController', CartbtnController);

	// @ngInject
	function CartbtnController($rootScope, $scope, cartService) {
		var vm = this;
		var subscription = $rootScope.$on('product:add', onProductAdd);

		$scope.$on('$destroy', subscription);

		cartService
			.getProducts()
			.then(onGetProducts);

		function onGetProducts(orders) {
			vm.orderCount = orders.length;
		}

		function onProductAdd(e, orders) {
			vm.orderCount = orders.length;
		}
	}

})();
