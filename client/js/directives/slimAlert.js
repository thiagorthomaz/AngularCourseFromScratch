app.directive("slimAlert", function () {
  return {
    template: '<div class="alert"' +
            'ng-class="{' +
            "'alert-info': isInfo, " +
            "'alert-warning' : isWarning," +
            "'alert-danger' : isDanger," +
            "'alert-success' : isSuccess" +
            '}"' +
            'ng-show="(showInfo && isInfo) || (showWarning && isWarning) || (showDanger && isDanger) || (showSucesso && isSuccess)">' +
            '<span ng-if="isInfo" class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>' +
            '<span ng-if="isWarning" class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>' +
            '<span ng-if="isDanger" class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>' +
            '<span ng-if="isSuccess" class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '<strong>{{title}}</strong>' +
            '<span>{{message}}</span>' +
            '<button type="button" class="close" ng-click="close()">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>',
    controller: "SlimAlertCtrl",
    scope: {
      title: "@",
      message: "@",
      type: "@"//info, warning, danger, success
    }
  };
});

app.controller("SlimAlertCtrl", function ($scope) {

  $scope.$on("showInfo", function(event, args) {
    if (args) $scope.showInfo = true;
  });
  $scope.$on("showWarning", function(event, args) {
    if (args) $scope.showWarning = true;
  });
  $scope.$on("showDanger", function(event, args) {
    if (args) $scope.showDanger = true;
  });
  $scope.$on("showSuccess", function(event, args) {
    if (args) $scope.showSuccess = true;
  });

  $scope.isInfo = $scope.type === 'info';
  $scope.isWarning = $scope.type === 'warning';
  $scope.isDanger = $scope.type === 'danger';
  $scope.isSuccess = $scope.type === 'success';

  $scope.show = true;

  $scope.close = function () {
    $scope.showInfo = false;
    $scope.showWarning = false; 
    $scope.showDanger = false;
    $scope.showSuccess = false;
  };

});