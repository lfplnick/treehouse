$(document).ready(function(){
  var url = "data/employees.json";
  $.getJSON(url, function(response){
    var s_html = '<ul class="bulleted">';
    $.each(response, function(i, employee){
      if (employee.inoffice === true){
        s_html += '<li class="in">';
      } else {
        s_html += '<li class="out">';
      }
      s_html += employee.name + '</li>';
    })
    s_html += '</ul>';
    $('#employeeList').html(s_html);
  }); // end getJSON
}); // end ready
