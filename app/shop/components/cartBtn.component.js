(function() {
	'use strict';

	var CartbtnComponent = {
		templateUrl: 'app/shop/components/cartBtn.component.html',
		controller: 'CartbtnController',
		controllerAs: 'cartbtnController'
	};

	angular
		.module('app.widgets')
		.component('cartbtnComponent', CartbtnComponent);

})();
