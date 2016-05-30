(function() {
	'use strict';

	routing.$inject = ["$rootScope", "$document"];

	angular
		.module('app.core')
		.factory('routing', routing);

	/* @ngInject */
	function routing($rootScope, $document) {
		var service = {
			initialize: initialize
		};

		return service;

		function initialize() {
			$rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);
			$rootScope.$on('$stateChangeError', onStateChangeError);
		}

		function onStateChangeSuccess() {
			$document.scrollTop(0, 0);
		}

		function onStateChangeError(event, toState, toParams, fromState, fromParams, error) {}

	}
})();
