(function() {
    function UserModalCtrl(Room, $cookies, $uibModalInstance) {
        
        this.createUsername = function() {
            $cookies.put('blocChatCurrentUser', name);
            $uibModalInstance.close();
            console.log(this.name);
        }
    }
    
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['Room', '$cookies','$uibModalInstance', UserModalCtrl]);
})();