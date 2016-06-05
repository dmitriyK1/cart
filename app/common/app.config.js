(function() {
	'use strict';

	configure.$inject = ['$httpProvider', '$compileProvider'];

	angular
		.module('app')
		.config(configure);

	// @ngInject
	function configure($httpProvider, $compileProvider) {
		$httpProvider.defaults.cache      = true;
		$compileProvider.debugInfoEnabled(false);
	}

})();
