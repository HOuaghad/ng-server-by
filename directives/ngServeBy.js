(function(angular) {
    'use strict';
    
    var app = angular.module('ngServeBy');
    
    /**
     * [ngServeBy description]
     * @param  {ngModule} $log      [description]
     * @param  {ngModule} $injector [description]
     */
    var ngServeBy = function ($log, $injector) {
        return {
            restrict: 'A',
            scope: true,
            compile: function () {
                return {
                    pre: function (scope, element, attrs) {
                        if (!attrs.ngServeBy) {
                            $log.error('ngServeBy directive was called but did not receive any service as an argument');
                        }

                        scope = $injector.get(attrs.ngServeBy)(scope, element, attrs);
                    }
                };
            }
        };
    };
    
    app.directive('ngServeBy', ngServeBy);
}(angular));