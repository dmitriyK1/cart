(function() {
	'use strict';

	var CartbtnComponent = {
		templateUrl: 'app/shop/components/cartButton.component.html',
		controller: 'CartbtnController',
		controllerAs: 'cartbtnController'
	};

	angular
		.module('app.widgets')
		.component('cartButton', CartbtnComponent);

})();
