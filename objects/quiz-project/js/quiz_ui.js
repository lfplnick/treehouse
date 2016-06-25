var quiz;

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

var loadFailed = function(){
  $("#question").html("Quiz failed to load! Sorry about that.");
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

var updateProgress = function(){
  var progressHTML = "Question " + (quiz.q_current + 1)  + " of " + quiz.q_total;
  $("#progress").html(progressHTML);
};

var updateQuizName = function(){
  document.getElementById("quiz-title").innerHTML = quiz.title;
  document.title = quiz.title;
};

var loadQuiz = function(url){
  $("#quiz-title").html("Loading quiz...");
  document.body.addEventListener("quiz-ready", startQuiz);
  document.body.addEventListener("quiz-error", loadFailed);
  quiz = new Quiz(url);
};

var loadQuestion = function(){
  var question       = quiz.questions[quiz.q_current];
  var questionText   = question.question;
  var answers        = question.answers;
  var i_correct      = question.correctAnswer - 1;

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

var startQuiz = function(e){
  if (quiz instanceof Quiz){
    updateQuizName(quiz.title);
    updateProgress(quiz.q_current + 1, quiz.q_total);
    loadQuestion(quiz.questions[quiz.q_current]);
  } else {
    loadFailed();
  }
};
