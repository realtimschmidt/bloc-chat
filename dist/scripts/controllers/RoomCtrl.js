(function() {
    //function RoomCtrl(Message, Room, $uibModal) {
    function RoomCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.messagesTitle = 'Default Room Title';
        this.messages = 'Default Messages';
        
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'RoomModalCtrl as modal'
            });
        };
        
        this.selectRoom = function() {
            //this.messagesTitle = getByRoomId();
            this.messagesTitle = "Something to get room ID";
            this.messages = "Something to get messages";
        }
        
    }
    
    angular
        .module('blocChat')
        //.controller('RoomCtrl', ['Message', 'Room', '$uibModal', RoomCtrl]);
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();