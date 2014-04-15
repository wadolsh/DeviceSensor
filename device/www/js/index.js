var deviceSensorApp = angular.module('deviceSensorApp', []);
 
deviceSensorApp.controller('MainCtrl', function ($scope) {
    document.addEventListener('deviceready', function() {
        $scope.ready = "ready";
    }, false);
});