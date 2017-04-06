(function() {
    function RoomModalCtrl(Room, $scope, $uibModalInstance) {
        
        this.create = function () {
            Room.add($scope.roomName);
            $uibModalInstance.close();
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
    
    
    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['Room', '$scope','$uibModalInstance', RoomModalCtrl]);
})();