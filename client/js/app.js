
var app = angular.module("phonebook", ['slimAlert', 'ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/default/phonebook");
  
  var defaultState = {
    name: 'default',
    url: '/default',
    abstract : true,
    views: {
      default: {
        templateUrl: "partials/default.html"
      }
    }
  };
  
  var phonebookState = {
    name: 'default.phonebook',
    url: '/phonebook',
    templateUrl: 'partials/phonebook.html'
  };

  var detailsState = {
    name: 'default.details',
    url: '/details/{id}',
    templateUrl: 'partials/details.html'
  };

  $stateProvider.state(defaultState);
  $stateProvider.state(phonebookState);
  $stateProvider.state(detailsState);

});

