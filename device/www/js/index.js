var deviceSensorApp = angular.module('deviceSensorApp', []);
 
deviceSensorApp.controller('MainCtrl', function ($scope) {
    document.addEventListener('deviceready', function() {
        $scope.ready = "ready";
    }, false);
    
    $scope.info = 'Device Model: '    + device.model    + '<br />' +
                            'Device Cordova: '  + device.cordova  + '<br />' +
                            'Device Platform: ' + device.platform + '<br />' +
                            'Device UUID: '     + device.uuid     + '<br />' +
                            'Device Version: '  + device.version  + '<br />';
});