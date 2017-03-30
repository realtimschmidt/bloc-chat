(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms.$add({ room: newRoom }).then(function(ref) {  //Method added from checkpoint 3. needs review
            var id = ref.key;
            console.log("added record with id " + id);
            rooms.$indexFor(id);
        });
        
        return {
            all: rooms
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();