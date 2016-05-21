app.service("OperatorAPI", function($http,config){
    this.getOperators = function(){
        return $http.get(config.baseUrl  + '?filter=operator_list');
    };
});