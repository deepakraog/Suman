class ContactController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope,$mdToast) {
        'ngInject';

        var vm = this;
        vm.toast = $mdToast;

       
    }

    showSimpleToast() {
    	var vm = this;

    vm.toast.show(
      vm.toast.simple()
        .textContent('Your message has been sent!')
        .position('top right' )
        .hideDelay(3000)
    );
  };
}

export default ContactController;
