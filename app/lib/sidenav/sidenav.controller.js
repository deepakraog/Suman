class SidenavController {

    /**
     * Constructor class SidenavController
     *
     * @param {object} $scope
     */
    constructor($scope,$mdDialog) {
        'ngInject';
   var vm = this;
   vm.mdDialog = $mdDialog;
    }

    

   closeDialog() {
   	var vm = this;
   	vm.mdDialog.hide();

    }
}

export default SidenavController;
