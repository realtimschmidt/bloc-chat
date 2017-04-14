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
        }
        
        function timeStamp() {
            var now = new Date();
            var zone = now.getTimezoneOffset()/60;
            var seconds = Math.floor((now / 1000) % 60);
            var minutes = Math.floor((now / 60000) % 60);
            var hour = (Math.floor((now / 3600000) % 24)) - zone;
            
            var output = '';
            if (hour < 0) {
                output += 24 + hour + ':';
            } else if (hour < 10) {
                output += '0' + hour + ':';
            } else if (hour > 23) {
                output += '0' + (hour - 24) + ':';
            } else {
                output += hour + ':';
            }
            
            if (minutes < 10) {
                output += '0'
            }
            
            output += minutes + ':';
            if (seconds < 10) {
                output += '0'
            }
            
            output += seconds;
 
            return output;
        }


        this.send = function(messageContent) {
            var newMessage = {
                roomId: this.currentRoom.$id,
                username: this.currentUser,
                sentAt: timeStamp(),
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