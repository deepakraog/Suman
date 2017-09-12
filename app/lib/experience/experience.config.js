class ExperienceConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.experience', {
            url: "/experience",
            views: {
                'content@': {
                    templateUrl: require("./experience.html"),
                    controller: "ExperienceController as experience"
                }
            }
        });
        
    }
}

export default ExperienceConfig.initRoute;
