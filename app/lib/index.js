// Import angular
import 'angular';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Animation
import angularAnimate from 'angular-animate';
// Materail Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';
// Our modules
import home from './home/home.module';
import works from './works/works.module';
import experience from './experience/experience.module';
import about from './about/about.module';
import contact from './contact/contact.module';
import sidenav from './sidenav/sidenav.module';


// Project specific style
import './scss/bootstrap.scss'

// Create our demo module
export const demoModule = angular.module('demo', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    home,
    works,
    experience,
    about,
    contact,
    sidenav
]);

demoModule.config(($stateProvider) => {
    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

demoModule.controller('MainController', function($mdSidenav,$state,$mdDialog) {
    let vm = this;
    vm.toggleSidenav = () => {
       // $mdSidenav('left').toggle();
       console.log('alt');
    };
    vm.changeRoute = (path) => {
        $state.go(path);
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
    vm.scrollUp = () => {
        window.scrollTo(0, 0);
    }
    vm.showDialog = (ev) => {
         $mdDialog.show({
      templateUrl: require("./sidenav/sidenav.html"),
      controller: "SidenavController as sidenav",
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: true // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
    }, function() {
    });
    }
    
});
