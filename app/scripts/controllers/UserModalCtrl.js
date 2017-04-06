(function() {
    function UserModalCtrl(Room, $scope, $uibModalInstance) {
        
        /*this.create = function () {
            Room.add($scope.roomName);
            $uibModalInstance.close();
        };*/
        

    }
    
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['Room', '$scope','$uibModalInstance', UserModalCtrl]);
})();