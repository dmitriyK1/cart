(function() {
	'use strict';

	viewport.$inject = ["$window", "debounce", "MOBILE_WIDTH"];

	angular
		.module('app.core')
		.factory('viewport', viewport);

	/* @ngInject */
	function viewport($window, debounce, MOBILE_WIDTH) {
		var service = {
			initialize: initialize,
			checkIsMobile: checkIsMobile
		};

		var isMobile = false;

		return service;

		function initialize() {
			var onWindowResizeDebounced = debounce(onWindowResize, 300);
			angular.element($window).on('resize', onWindowResizeDebounced);
			isMobile = compare();
		}

		function checkIsMobile() {
			return isMobile;
		}

		function onWindowResize() {
			isMobile = compare();
		}

		function compare() {
			return document.documentElement.clientWidth < MOBILE_WIDTH;
		}

	}

})();
