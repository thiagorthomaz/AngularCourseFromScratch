app.directive("slimAlert", function(){
  return {
    templateUrl: "partials/slimAlert.html",
    controller : "SlimAlertCtrl",
    scope : {
      title : "@",
      message : "@",
      type : "@"//info, warning, danger, success
    }
  };
});

app.controller("SlimAlertCtrl", function($scope){
  
  $scope.isInfo = $scope.type === 'info';
  $scope.isWarning = $scope.type === 'warning';
  $scope.isDanger = $scope.type === 'danger';
  $scope.isSuccess = $scope.type === 'success';
  
  $scope.show = true;
  
  $scope.close = function() {
    $scope.show = false;
  };
  
});