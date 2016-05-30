(function() {
	'use strict';

	runBlock.$inject = ["routing", "animations", "viewport"];

	angular
		.module('app')
		.run(runBlock);

	/* @ngInject */
	function runBlock(routing, animations, viewport) {
		routing.initialize();
		animations.initialize();
		viewport.initialize();
	}

})();
