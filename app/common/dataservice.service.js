(function() {
	'use strict';

	dataservice.$inject = ["$http", "PRODUCTS_URL", "CATEGORIES_URL"];

	angular
		.module('app.core')
		.factory('dataservice', dataservice);

	/* @ngInject */
	function dataservice($http, PRODUCTS_URL, CATEGORIES_URL) {
		var service = {
			loadProducts: loadProducts,
			loadCategories: loadCategories
		};

		return service;

		function loadProducts() {
			return $http.get(PRODUCTS_URL)
				.then(getData)
				.catch(getDataFailed);
		}

		function loadCategories() {
			return $http.get(CATEGORIES_URL)
				.then(getData)
				.catch(getDataFailed);
		}

		function getData(data, status, headers, config) {
			return data.data;
		}

		function getDataFailed(e) {
			var newMessage = 'XHR Failed for getData';

			if (e.data && e.data.description) {
				newMessage = newMessage + '\n' + e.data.description;
			}

			e.data.description = newMessage;

			console.error(newMessage);

			return $q.reject(e);
		}


	}

})();
