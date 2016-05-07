var questions =
  [
    ['What color starts with "gr" and ends with "een:?', "green"],
    ["How many hours are there in 1.25 days?", 30],
    ["What is the most popular beverage in the US?", "water"]
  ]

var correct =[];
var wrong = [];
var answer;
var html = "";
for (var i_question = 0; i_question < questions.length; i_question++) {
  answer = prompt(questions[i_question][0]);
  if (answer.toLowerCase() == questions[i_question][1]) {
    correct.push(i_question);
  } else {
    wrong.push([i_question, answer]);
  }
}

html += "<h2>Quiz Results: " + Math.round(correct.length / questions.length * 100) + "%</h2>";
html += "<p>Correct: " + correct.length + "</p>";
html += "<p>Incorrect: " + wrong.length + "</p>";

html += "<h3>Correct:</h3>";

var i_question
for (var i_correct = 0; i_correct < correct.length; i_correct++) {
  i_question = correct[i_correct];
  html += "<p>" + (i_question + 1) + ") " + questions[i_question][0] + "</p>";
  html += "<p>You answered: " + questions[i_question][1];
  html += "<br/>";
}

html += "<br/>";
html += "<h3>Incorrect:</h3>";

for (var i_wrong = 0; i_wrong < wrong.length; i_wrong++) {
  i_question = wrong[i_wrong][0];
  html += "<p>" + (i_question + 1) + ") " + questions[i_question][0] + "</p>";
  html += "<p>You answered: " + wrong[i_wrong][1] + "</p>";
  html += "<p>Correct answer: " + questions[i_question][1] + "</p>";
  html += "<br/>";
}

document.getElementById("output").innerHTML = html;
