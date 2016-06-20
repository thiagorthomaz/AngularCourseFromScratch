app.directive("slimAlert", function(){
  return {
    templateUrl: "partials/slimAlert.html",
    scope : {
      title : "@",
      message : "@",
      type : "@"//info, warning, danger, success
    }
  };
});