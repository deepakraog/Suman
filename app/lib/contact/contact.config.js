class ContactConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.contact', {
            url: "/contact",
            views: {
                'content@': {
                    templateUrl: require("./contact.html"),
                    controller: "ContactController as contact"
                }
            }
        });
        
    }
}

export default ContactConfig.initRoute;
