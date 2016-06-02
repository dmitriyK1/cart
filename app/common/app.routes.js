(function() {
	'use strict';

	config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

	angular
		.module('app')
		.config(config);

	/* @ngInject */
	function config($locationProvider, $stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('shop', {
				url: '/',
				template: '<shop-component></shop-component>'
			})
			.state('cart', {
				url: '/cart',
				template: '<cart-component></cart-component>'
			});
	}

})();
