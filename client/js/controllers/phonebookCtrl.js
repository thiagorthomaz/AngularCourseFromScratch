app.controller("phonebookCtrl", function ($scope, $filter, ContactsAPI, OperatorAPI) {
  $scope.app = "Phonebook!";

  var loadContacts = function () {
    ContactsAPI.getContacts().success(function (data, status) {
        var result = [];
        for (var i in data) {
           result.push(data[i]);
        }
      $scope.contacts = result;
    }).error(function (data, status) {
      $scope.message = "Error: " + data;
    });
  };

  var loadOperators = function () {
    OperatorAPI.getOperators().success(function (data, status) {
      $scope.operators = data;
    });
  };

  loadContacts();
  loadOperators();

  $scope.addContact = function (contact) {
    ContactsAPI.saveContact(contact).success(function(data){ 
        delete $scope.contact;
        loadContacts();
    });
    
  };

  $scope.removeContact = function (contacts) {    
    $scope.contacts = contacts.filter(function (c) {
      if (!c.selected) {
        return c;
      }else {
        ContactsAPI.removeContact(c).success(function (data, status) {
          console.log("Contact: " + c.id + " removed");
        });
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