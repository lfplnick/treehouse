var message = "";
for (i = 0; i < students.length; i++){
  for (var info in students[i]){
    infoTitle = info.charAt(0).toUpperCase() + info.substring(1, info.length);
    if (info == "name"){
      message += "<h2>" + infoTitle + ": " + students[i][info] + "</h2>";
    } else {
      message += "<p>" + infoTitle + ": " + students[i][info] + "</p>";
    }
  }
}

output = document.getElementById("output");
output.innerHTML = message;