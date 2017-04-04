angular.module('app', ['angular-promise-router']).controller('myController', function($scope,$promiseRouter) {
  console.log($promiseRouter.config);
});

angular.module('app').config(['$promiseRouterProvider',function($promiseRouterProvider){
    $promiseRouterProvider.when('/vasu',{
      template : 'a.html',
      controller : 'vasu',
      on : {
        'login':'/dashboard',
        'logout':'/home'
      }
    });
}]);
