(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('animations', animations);

	function animations() {
		var service = {
			initialize: initialize
		};

		return service;

		function initialize() {
			// new WOW().init();
		}
	}
})();
