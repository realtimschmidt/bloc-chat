(function() {
    function UserModalCtrl(Room, $cookies, $uibModalInstance) {
        
        this.createUsername = function(name) {
            $cookies.put('blocChatCurrentUser', name);
            $uibModalInstance.close();
        }
    }
    
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['Room', '$cookies','$uibModalInstance', UserModalCtrl]);
})();