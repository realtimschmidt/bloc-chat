(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId) {
                // Filter the messages by their room ID.
                ref.orderByChild('roomId').equalTo(roomId);
            },
            send: function(newMessage) {//object with multiple properties
                //send method logic
                //takes a message object as an argument and submits it to your Firebase server
                messages.$add(newMessage);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();


