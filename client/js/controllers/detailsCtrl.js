app.controller("detailsCtrl", function ($scope, OperatorAPI) {
  
  var list_details_test = new Array();
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  list_details_test.push({id : list_details_test.length +1 });
  
  $scope.list = list_details_test;
  
  
  OperatorAPI.getOperators().success(function (data, status) {
    $scope.operators = data;
  });
  
});