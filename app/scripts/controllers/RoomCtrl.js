(function() {
    function RoomCtrl(Message, Room, $uibModal) {
        this.rooms = Room.all;
        this.messages = 'Default Messages';
        this.currentRoom = null;

        
        
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'RoomModalCtrl as modal'
            });
        };
        
        this.selectRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Message', 'Room', '$uibModal', RoomCtrl]);
})();