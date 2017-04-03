(function() {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
            
            modalInstance.result.then(function(newRoom) {
                Room.add(newRoom)
            });
        };
    }
    

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();