class UploadConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.upload', {
            url: "/upload",
            views: {
                'content@': {
                    templateUrl: require("./upload.html"),
                    controller: "UploadController as upload"
                }
            }
        });
        
    }
}

export default UploadConfig.initRoute;
