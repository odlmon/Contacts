$.ajax({
  url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: function(data){
    var content = "<table align=center><tr><th scope=col>Login</th>" +
     "<th scope=col>Contributions</th><tr>";
    for(var i = 0; i < data.length; i++){
      var category;
      if (data[i].contributions >= 1 && data[i].contributions <= 4) {
        category = ' brown';
      } else if (data[i].contributions >= 5 && data[i].contributions <= 9) {
        category = ' silver';
      } else if (data[i].contributions >= 10 && data[i].contributions <= 100000) {
        category = ' gold';
      };
      content += '<tr class=\"rows' + category + '\"><td>' + data[i].login + '</td><td>'+
       data[i].contributions +'</td></tr>';
    }
    content += "</table>"
    $('#content').append(content);
  },
  error: function(){
    var textStatus = arguments[1];
    alert(textStatus);
  }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.ajax({

  url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: function Sort(f) {
    if (typeof f == "object") {

      str = f.category.options[f.category.selectedIndex].value.toLowerCase()
    } else {

      str = f.toLowerCase()

    }

    switch (str) {

      case 'DESC':
        function(data) {
          var content = "<table align=center><tr><th scope=col>Login</th>" +
            "<th scope=col>Contributions</th><tr>";
          data.sort((a, b) => a.login < b.login);
          for (var i = 0; i < data.length; i++) {
            var category;
            if (data[i].contributions >= 1 && data[i].contributions <= 4) {
              data.category = ' brown';
            } else if (data[i].contributions >= 5 && data[i].contributions <= 9) {
              data.category = ' silver';
            } else if (data[i].contributions >= 10 && data[i].contributions <= 100000) {
              data.category = ' gold';
            }
            content += '<tr class=\"rows' + data.category + '\"><td>' + data[i].login + '</td><td>' +
              data[i].contributions + '</td></tr>';
          }
          content += "</table>"
          $('#content').append(content);
        }

        break;

      case 'ASC':
        function(data) {
          var content = "<table align=center><tr><th scope=col>Login</th>" +
            "<th scope=col>Contributions</th><tr>";
          data.sort((a, b) => a.login > b.login);
          for (var i = 0; i < data.length; i++) {
            var category;
            if (data[i].contributions >= 1 && data[i].contributions <= 4) {
              data.category = ' brown';
            } else if (data[i].contributions >= 5 && data[i].contributions <= 9) {
              data.category = ' silver';
            } else if (data[i].contributions >= 10 && data[i].contributions <= 100000) {
              data.category = ' gold';
            }
            content += '<tr class=\"rows' + data.category + '\"><td>' + data[i].login + '</td><td>' +
              data[i].contributions + '</td></tr>';
          }
          content += "</table>"
          $('#content').append(content);
        }

        break;


    }
  },
  error: function() {
    var textStatus = arguments[1];
    alert(textStatus);
  }

});
