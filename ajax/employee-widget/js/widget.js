var xhr = new XMLHttpRequest();
var xhr_rooms = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i++) {
      if (employees[i].inoffice === true){
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
  }
  document.getElementById('employeeList').innerHTML = statusHTML;
};

xhr_rooms.onreadystatechange = function(){
  if (xhr_rooms.readyState === 4){
    if (xhr_rooms.status === 200){
      var rooms = JSON.parse(xhr_rooms.responseText);
      var statusHTML = '<ul class="rooms">';
      for (var i = 0; i < rooms.length; i++) {
        if (rooms[i].available === true) {
          statusHTML += '<li class="empty">';
        } else {
          statusHTML += '<li class="full">';
        }
        statusHTML += rooms[i].room + '</li>'
      }
      statusHTML += '</ul>';
      document.getElementById('roomList').innerHTML = statusHTML;
    }
  }
};

xhr.open('GET', 'data/employees.json');
xhr.send();

xhr_rooms.open('GET', 'data/rooms.json');
xhr_rooms.send();
