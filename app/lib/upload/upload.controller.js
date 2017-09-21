class UploadController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope,$state) {
        'ngInject';

        var vm = this;
       vm.state = $state;

       
    }
    cancel(){
    	var vm = this;
    	vm.state.go('public.home');
    }
    submitForm(){
    	var vm = this;
    	console.log('I can submit yopur form!');
    }
}

export default UploadController;
