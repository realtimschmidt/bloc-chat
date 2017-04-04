(function() {
    function ModalCtrl(Room, $scope, $uibModalInstance) {
        
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
        .controller('ModalCtrl', ['Room', '$scope','$uibModalInstance', ModalCtrl]);
})();