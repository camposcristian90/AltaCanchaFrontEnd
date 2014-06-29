angular.module('clubsModule').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('clubs.home', {
        url: '/clubs',
        templateUrl: 'clubs/clubsHome.tpl.html',
        controller: 'clubsHomeController',
        resolve: {
            clubs: ['Clubs', function (Clubs) {
                return Clubs.query().$promise;
            }]
        }
    });
}]);

angular.module('clubsModule').controller('clubsHomeController', function ($scope, clubs, Clubs, $state) {

    $scope.showSearchBox = false;
    $scope.clubs = clubs;



});

