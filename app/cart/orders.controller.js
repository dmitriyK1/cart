(function() {
	'use strict';

	OrdersController.$inject = ["$rootScope", "$scope", "cartService"];

	angular
		.module('app.cart')
		.controller('OrdersController', OrdersController);

	/* @ngInject */
	function OrdersController($rootScope, $scope, cartService) {
		var vm = this;
		vm.togglePopover = togglePopover;
		vm.removeOrder = removeOrder;

		activate();

		function activate() {
			var subscription = $rootScope.$on('product:remove', onProductRemove);
			$scope.$on('$destroy', subscription);

			updateOrdersInfo();
		}

		function togglePopover(order) {
			if (vm.activePopover === order.orderId) {
				vm.activePopover = '';
				return;
			}

			vm.activePopover = order.orderId;
		}

		function removeOrder(order) {
			cartService.removeProduct(order.orderId);
		}

		function onProductRemove(e, orders) {
			updateOrdersInfo();
		}

		function updateOrdersInfo() {
			vm.orders = cartService.getProducts();
			vm.ordersCount = vm.orders.length;
		}
	}

})();
