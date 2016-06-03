(function() {
	'use strict';

	configure.$inject = ['$httpProvider'];

	angular
		.module('app')
		.config(configure);

	// @ngInject
	function configure($httpProvider) {
		$httpProvider.defaults.cache = true;
	}

})();
