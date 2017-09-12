class AboutConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.about', {
            url: "/about",
            views: {
                'content@': {
                    templateUrl: require("./about.html"),
                    controller: "AboutController as about"
                }
            }
        });
        
    }
}

export default AboutConfig.initRoute;
