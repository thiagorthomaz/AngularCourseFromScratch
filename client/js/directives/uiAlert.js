app.directive("uiAlert", function () {
  return {
    templateUrl: "partials/alert.html",
    replace: true,
    restrict: "E",
    scope : {
      title : "@"
    },
    transclude: true
  };
});