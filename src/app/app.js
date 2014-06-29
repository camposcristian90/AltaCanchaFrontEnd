angular.module('alta-cancha-app', [
        'ionic',
        'ngCordova',
        'ngResource',

        'ngStorage',
        //'ezfb',
        'openfb',

        'templates-app',
        'templates-common',

        'sidebarModule',
        'clubsModule',
        'userModule'
    ])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            $cordovaSplashscreen.hide();
        });
    })

    .run(["OpenFB", "FB_APP_ID", "$rootScope" ,function (OpenFB, FB_APP_ID, $rootScope) {
        /*ezfbProvider.setInitParams({
            appId: FB_APP_ID
        });*/

        //Para el Browser
        OpenFB.init(FB_APP_ID, "http://localhost/alta-cancha-hack/build/oauthcallback.html", window.localStorage);

        //Para El celu
        //OpenFB.init('1632413586984671');

        /*$rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.name !== "user.login" && !$window.sessionStorage['fbtoken']) {
                $state.go('user.login');
                event.preventDefault();
            }
        });

        $rootScope.$on('OAuthException', function() {
            $state.go('user.login');
        });*/
    }])

    .config(['$urlRouterProvider', '$locationProvider', function ($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/user/login");
    }])

    .controller('AppController', ["$scope", "$ionicSideMenuDelegate", function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleSideBar = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }]);


