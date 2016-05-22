app.filter('name', function () {
  return function (input) {
    var name_list = input.split(" ");
    var name_list_fixed = name_list.map(function(name){
      if (/(da|de|do|of|from)/.test(name)) return name;
      return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    });
    return name_list_fixed.join(" ");
  };
});