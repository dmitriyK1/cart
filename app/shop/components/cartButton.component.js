(function() {
	'use strict';

	var CartbtnComponent = {
		templateUrl: 'app/shop/components/cartButton.component.html',
		controller: 'CartbtnController'
	};

	angular
		.module('app.widgets')
		.component('cartButton', CartbtnComponent);

})();
