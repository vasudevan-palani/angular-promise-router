function PromiseRouter(config) {
  this.config = config;
}

angular.module('angular-promise-router',[]).provider('$promiseRouter',function(){

  this.config = [];

  this.when = function(url,options){
    this.config.push(angular.merge({url:url},options));
  }

  this.$get = function(){
    return new PromiseRouter(this.config);
  }
});
