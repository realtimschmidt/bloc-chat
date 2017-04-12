(function() {
    function RoomCtrl(Message, Room, $uibModal, $cookies, $scope) {
        this.rooms = Room.all;
        this.messages = 'Placeholder Messages';
        this.currentRoom = 'Placeholder Room'; //find a way to get first room [0] as default room
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'RoomModalCtrl as modal'
            });
        };
        
        this.selectRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        }
        
        this.send = function(messageContent) {
            var newMessage = {
                roomId: this.currentRoom.$id,
                username: this.currentUser,
                sentAt: Date.now(),
                content: messageContent
            };
            Message.send(newMessage);
        }
        $scope.clearfunction = function(event){
            event.messageContent = null;
        }
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Message', 'Room', '$uibModal', '$cookies', '$scope', RoomCtrl]);
})();