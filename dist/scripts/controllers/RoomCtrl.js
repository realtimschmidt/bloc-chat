(function() {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.messagesTitle = 'Selected Room Title Goes Here';
        
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        //this.selectRoom = function(room) {
            //this.messagesTitle = room;
        //}

    }
    

    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();