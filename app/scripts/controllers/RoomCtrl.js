(function() {
    function RoomCtrl($scope, Room) {
        this.rooms = Room.all;
    }
    
    $scope.rooms = this.rooms;
    
    angular
        .module('blocJams')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl);
})();