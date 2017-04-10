(function() {
    function RoomCtrl(Message, Room, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.messages = 'Default Messages';
        this.currentRoom = null; //find a way to get first room [0] as default room
        this.currentUser = $cookies.get('blocChatCurrentUser');
        console.log(">>>>>>");
        console.log(this.currentUser);
        console.log("<<<<<<");
        
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
        .controller('RoomCtrl', ['Message', 'Room', '$uibModal', '$cookies', RoomCtrl]);
})();