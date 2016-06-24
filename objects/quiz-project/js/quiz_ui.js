var correctSelected = function(){
  quiz.correct++;
  loadNextQuestion();
  console.log("correct!!!");
};

var finishQuiz = function(){
  $("#question").html("You're done!");
  $("#answers").html("<p>You got " + quiz.correct + " right out of " + quiz.q_total + "!");
  $("#progress").html("");
};

var wrongSelected = function(){
  quiz.incorrect++;
  loadNextQuestion();
  console.log("wrong!!!");
};

var loadNextQuestion = function(){
  quiz.q_current++;
  if (quiz.q_current === quiz.q_total) {
    finishQuiz();
  } else {
    loadQuestion(quiz.questions[quiz.q_current]);
    updateProgress(quiz.q_current + 1, quiz.q_total);
  }
};

var updateProgress = function(i_question, i_total){
  if ((i_question !== parseInt(i_question, 10)) || (i_total !== parseInt(i_total, 10))){
    console.log('updateProgress called with incorrect arguments: i_question = "' + i_question + '" i_total = "' + i_total +'"');
    return;
  } else if (i_question > i_total) {
    console.log('updateProgress: i_question cannot be greater than i_total');
    return;
  } else if ((i_question <= 0) || (i_total <=0)) {
    console.log('updateProgress: i_question and i_total must be greater than 0');
    return;
  }

  var progressHTML = "Question " + i_question  + " of " + i_total;
  document.getElementById("progress").innerHTML = progressHTML;
};

var updateQuizName = function(s_quizName){
  document.getElementById("quiz-title").innerHTML = s_quizName;
  document.title = s_quizName;
};

var loadQuiz = function(url){
  $("#answers").html("Loading quiz...");
  var quiz = new Quiz("js/george-washington-facts.json");
  return quiz;
};

var loadQuestion = function(question){
  var questionText   = question.question;
  var answers        = question.answers;
  var i_correct      = question.correctAnswer - 1;
  var answersHtml    = "";

  var $answers = $("#answers");

  $("#question").html(questionText);

  $answers.empty();
  var $answer;
  var $answerBtn;
  for (var i = 0; i < answers.length; i++) {
    $answer = $('<p id="choice' + i + '">' + answers[i] + '</p>');
    $answerBtn = $('<button id="guess' + i + '" class="btn--default">Select Answer</button>');
    if (i === i_correct) {
      $answerBtn.click(correctSelected);
    } else {
      $answerBtn.click(wrongSelected);
    }

    $answers.append($answer);
    $answers.append($answerBtn);
  }
};
