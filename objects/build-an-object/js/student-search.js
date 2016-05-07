var student;
var returnCount;
var input;
var message;

function print (message){
  document.getElementById("output").innerHTML = message;
}

function studentInfoToString(student){
  var message = "<h2>Name: " + student.name + "</h2>";
  message += "<p>Track: " + student.track + "</p>";
  message += "<p>Achievements: " + student.achievements + "</p>";
  message += "<p>Points: " + student.points + "</p>";
  
  return message;
}

while (true){
  input = prompt('Enter student name. To quit enter "quit"');
  if (input === null || input.toLowerCase() === 'quit' || input.toLowerCase() === 'q') break;
  
  returnCount = 0;
  message = "";
  for (i = 0; i < students.length; i++){
    if (students[i].name == input) {
      returnCount++;
      message += studentInfoToString(students[i]);
    }
  }
  
  if (returnCount === 0) {
    message = "<h2>No students found with the name: " + input + "</h2>";
  }
  
  print(message);
}