(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            // Do something to allow users to set their username
            // autorun userModal.html and UserModalCtrl.js when no username is detected
            $uibModal.open({
                
            })
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();