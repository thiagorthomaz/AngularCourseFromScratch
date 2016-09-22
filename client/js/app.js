
var app = angular.module("phonebook", ['slimAlert', 'ui.router']);

app.config(function($stateProvider) {
  
  var phonebookState = {
    name: 'phonebook',
    url: '/phonebook',
    templateUrl: 'partials/phonebook.html'
  };

  var detailsState = {
    name: 'details',
    url: '/details/{id}',
    templateUrl: 'partials/details.html'
  };

  $stateProvider.state(phonebookState);
  $stateProvider.state(detailsState);

});

