# angular-promise-router
This is an extension of the router provided by angular (ngRoute).

Its named as 'qRoute' named after $q of angularJS.

**Reason** for extending the ngRoute is to keep the route config manage the page flow. For page flows in controller today we use __$location.url()__. This is not a good design to have route URL's spread across the entire controller code base.

**qRoute** provides an alternative where the page flow is handled in the route configuration with the help of outcomes.

## Example
###Step 1 : Include the qRoute module in your application
```javascript
  angular.module('app', ['qRoute']).controller('myController', function($scope,$controller) {
  });
```

###Step 2 : Create the route configuration
```javascript
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
```
###Step3: Resolve the outcomes from controller
```javascript
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
```
