class WorksController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';

        var vm = this;
        vm.tiles = buildGridModel({
            icon: "avatar:svg-",
            title: "Svg-",
            background: ""
        });

       
    }
}

export default WorksController;
