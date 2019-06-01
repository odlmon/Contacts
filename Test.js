$.ajax({
  url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: function(data){
    var content = "<table align=center><tr><th class=login>Login</th>" +
     "<th class=contributions>Contributions</th><tr>";
    for(var i = 0; i < data.length; i++){
      content += '<tr class=rows><td class=login>' + data[i].login +
       '</td><td class=contributions>'+ data[i].contributions +'</td></tr>';
    }
    content += "</table>"
    $('#content').append(content);
  }
});
