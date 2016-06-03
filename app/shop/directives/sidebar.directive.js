(function() {
	'use strict';

	sidebar.$inject = ["$document", "dataservice", "viewport"];

	angular
		.module('app.shop')
		.directive('sidebar', sidebar);

	/* @ngInject */
	function sidebar($document, dataservice, viewport) {
		var ddo = {
			scope: {
				activeCategory: '=category'
			},
			templateUrl: 'app/shop/directives/sidebar.directive.html',
			controller: 'SidebarController as sidebarController',
			link: link,
			bindToController: true
		};

		return ddo;

		function link(scope, element) {
			element.on('click', onClick);

			scope.$on('$destroy', onScopeDestroy);

			function onScopeDestroy() {
				element.off('click');
			}
		}

		function onClick(e) {
			var $categoryItem = angular.element(e.target);

			if (!$categoryItem.hasClass('active')) return;
			if (!viewport.checkIsMobile()) return;

			var top = 0;
			var duration = 500;

			e.preventDefault();
			$document.scrollTo(document.querySelector('.products'), top, duration);
		}

	}

})();
