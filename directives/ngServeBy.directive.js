(function(angular) {
	'use strict';
	
	var app = angular.module('ngServeBy', []);
	
    /**
     * [ngServeBy description]
     * @param  {[type]} $log      [description]
     * @param  {[type]} $injector [description]
     * @return {[type]}           [description]
     */
	var ngServeBy = function ($log, $injector) {
		return {
            restrict: 'A',
            transclude: true,
            scope: true,
            link: function (scope, element, attrs) {
                if (!attrs.ngServeBy) {
                    $log.error('ngServeBy directive was called but did not receive any service as an argument');
                }

                transclude(function (clone) {
                    $injector.get(attrs.ngServeBy)(scope);
                    angular.element(element[0]).append(clone);
                });
            }
		};
	};
    
	app.directive('ngServeBy', ngServeBy);
}(angular));
