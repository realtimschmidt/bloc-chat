(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        rooms.$add({ foo: "bar" }).then(function(ref) {  //Method added from checkpoint 3. needs review
            var id = ref.key;
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