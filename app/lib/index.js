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
import upload from './upload/upload.module';
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
    upload,
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

demoModule.controller('MainController', function($mdSidenav,$state,$mdDialog,$window,$mdToast) {
    let vm = this;
    vm.toggleSidenav = () => {
       // $mdSidenav('left').toggle();
       console.log('alt');
    };
    vm.changeRoute = (path) => {
        window.scrollTo(0, 0);
        $state.go(path);
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
    vm.scrollUp = () => {
        window.scrollTo(0, 0);
    }
    vm.showToaster = () =>{
        
      $state.go('public.home');

    $mdToast.show(
      $mdToast.simple()
        .textContent('Your message has been sent!')
        .position('bottom right' )
        .hideDelay(3000)
    );
  
    }
    vm.openNewTab = (link) => {
        if(link=='git'){
            $window.open('https://github.com/sumanmr9591', '_blank');
        }
        else if(link=='facebook'){

        }
        else if(link=='stack'){
            $window.open('https://stackoverflow.com/users/7714466/suman-m-r?tab=profile', '_blank');
        }
        else if(link=='linkedin'){
             $window.open('https://www.linkedin.com/in/suman-raj-639352125/', '_blank');
        }
  
    }
    
    
});
