(function() {
    function RoomCtrl(Message, Room, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.messages = 'Default Messages';
        this.currentRoom = null; //find a way to get first room [0] as default room
        this.currentUser = $cookies.get('blocChatCurrentUser');
        console.log(this.currentUser);
        
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
        
        this.something = function(somthing) {
            this.something = Message.send(something);
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Message', 'Room', '$uibModal', '$cookies', RoomCtrl]);
})();