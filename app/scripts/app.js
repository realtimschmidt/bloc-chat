(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('room', {
                url: '/',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/templates/rooms.html'
            });
    }
    angular
        .module('blocChat', ['ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
        .config(config);
})();