class WorksConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.works', {
            url: "/works",
            views: {
                'content@': {
                    templateUrl: require("./works.html"),
                    controller: "WorksController as works"
                }
            }
        });
        
    }
}

export default WorksConfig.initRoute;
