angular.module('app', ['qRoute']).controller('myController', function($scope,$controller) {
});

angular.module('app').controller('HomeCtrl', function($scope,$done,$timeout) {
  console.log("in Home Contoller");

  $scope.login = function(){
      $done('loginOK');
  }
});

angular.module('app').controller('DashboardCtrl', function($scope,$done,$timeout) {
  console.log("in Dashboard Contoller");

  $scope.logout = function(){
    $done('logout');
  }

});

angular.module('app').config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      templateUrl : '/home.html',
      controller : 'HomeCtrl',
      on : {
        'loginOK':'/dashboard'
      }
    })
    .when('/dashboard',{
      templateUrl : '/dashboard.html',
      controller : 'DashboardCtrl',
      on : {
        'logout':'/'
      }
    });
}]);
