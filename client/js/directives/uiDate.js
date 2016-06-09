app.directive("uiDate", function($filter){
  return {
    require: "ngModel",
    link:function(scope, element,attrs, ctrl_model){
      var _formatDate = function(date){
        date = date.replace(/[^0-9]+/g, "");//Remove all character, if isn't a number

        if (date.length > 2){
          date = date.substring(0,2) + "/" + date.substring(2);
        }
        
        if (date.length >5){
          date = date.substring(0,5) + "/" + date.substring(5,9);
        }

        return date;

      };
      
      element.bind("keyup", function(){
        ctrl_model.$setViewValue(_formatDate(ctrl_model.$viewValue));
        ctrl_model.$render();
      });
      
      ctrl_model.$parsers.push(function(value){
        if (value.length === 10){
          //Wrong way, just to test!
          var dateArray = value.split("/");
          return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
        }
      });
      
      ctrl_model.$formatters.push(function(value){
        return $filter("date")(value, "dd/MM/yyyy");
      });
      
    }
  };
});