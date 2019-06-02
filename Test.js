$.ajax({
  url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: function(data){
    var content = "<table align=center><tr><th>Login</th><th>Contributions</th><tr>";
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
  }
});
