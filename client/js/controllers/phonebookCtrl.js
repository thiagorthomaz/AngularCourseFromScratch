app.controller("phonebookCtrl", function ($scope, $filter, $http, uppercaseFilter) {
  $scope.app = "Phonebook!";

  var loadContacts = function () {
    $http.get(server_url).success(function (data, status) {
      $scope.contacts = data.contact_list;
    }).error(function (data, status) {
      $scope.message = "Error: " + data;
    });
  };

  var loadOperators = function () {
    $http.get(server_url).success(function (data, status) {
      $scope.operators = data.operator_list;
    });
  };

  loadContacts();
  loadOperators();

  $scope.addContact = function (contact) {
    $http.post(server_url, contact);
    loadContacts();
    delete $scope.contact;
  };

  $scope.removeContact = function (contacts) {
    $scope.contacts = contacts.filter(function (c) {
      if (!c.selected) {
        return c;
      }
    });
  };

  $scope.isContactSelected = function (contacts) {
    if (contacts) {
      return contacts.some(function (c) {
        return c.selected;
      });
    }
  };

  $scope.orderBy = function (field) {
    $scope.orderByField = field;
    $scope.directionoOfOrder = !$scope.directionoOfOrder;
  };

});