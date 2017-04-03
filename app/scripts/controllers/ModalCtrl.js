(function() {
    function ModalCtrl($uibModalInstance) {
        
        this.roomName = '';
        
        this.ok = function () {
            $uibModalInstance.close(this.roomName);
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }
    
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();