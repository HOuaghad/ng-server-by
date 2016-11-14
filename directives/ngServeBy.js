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
                            throw ('ngServeBy directive was called but did not receive any service as an argument');
                        }

                        var serveAs = attrs.ngServeBy.split(' ');

                        if (serveAs.length === 3) {

                            (function (serviceName, serviceAs) {
                                var service = $injector.get(serviceName);
                                scope[serviceAs] = new service(scope, element, attrs);
                            } (serveAs[0], serveAs[2]));
                            
                        } else {
                            $injector.get(serveAs[0])(scope, element, attrs);
                        }
                    }
                };
            }
        };
    };
    
    app.directive('ngServeBy', ngServeBy);
}(angular));