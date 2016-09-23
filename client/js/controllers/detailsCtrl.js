app.controller("detailsCtrl", function ($scope, OperatorAPI, ContactsAPI) {
  
  /**************************************************************
   * Just want to test how render a large page
   **************************************************************/

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
  
  ContactsAPI.getContacts().success(function (data, status) {
      var result = [];
      for (var i in data) {
         result.push(data[i]);
      }

      $scope.contacts1 = result;
  }).error(function (data, status) {
    if (!data) {
      $scope.error = "Error: Unable to load data.";
    } else {
      $scope.error = "Error: " + data;
    }
  });
  ContactsAPI.getContacts().success(function (data, status) {
      var result = [];
      for (var i in data) {
         result.push(data[i]);
      }

      $scope.contacts2 = result;
  }).error(function (data, status) {
    if (!data) {
      $scope.error = "Error: Unable to load data.";
    } else {
      $scope.error = "Error: " + data;
    }
  });
  ContactsAPI.getContacts().success(function (data, status) {
      var result = [];
      for (var i in data) {
         result.push(data[i]);
      }

      $scope.contacts3 = result;
  }).error(function (data, status) {
    if (!data) {
      $scope.error = "Error: Unable to load data.";
    } else {
      $scope.error = "Error: " + data;
    }
  });
  ContactsAPI.getContacts().success(function (data, status) {
      var result = [];
      for (var i in data) {
         result.push(data[i]);
      }

      $scope.contacts4 = result;
  }).error(function (data, status) {
    if (!data) {
      $scope.error = "Error: Unable to load data.";
    } else {
      $scope.error = "Error: " + data;
    }
  });
  

});