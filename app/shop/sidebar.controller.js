(function() {
	'use strict';

	SidebarController.$inject = ["dataservice"];

	angular
		.module('app.shop')
		.controller('SidebarController', SidebarController);

	/* @ngInject */
	function SidebarController(dataservice) {
		var vm = this;
		vm.selectCategory = selectCategory;

		activate();

		function selectCategory(categoryName) {
			if (vm.activeCategory === categoryName) {
				vm.activeCategory = '';
				return;
			}

			vm.activeCategory = categoryName;
		}

		function activate() {
			dataservice.loadCategories().then(function(data) {
				vm.categories = data;
			});
		}
	}

})();
