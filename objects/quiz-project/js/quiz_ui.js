var quiz;

var correctSelected = function(){
  quiz.correct++;
  loadNextQuestion();
};

var finishQuiz = function(){
  $("#question").html("You're done!");
  $("#answers").html("<p>You got " + quiz.correct + " right out of " + quiz.q_total + "!");
  $("#progress").html("");
};

var wrongSelected = function(){
  quiz.incorrect++;
  loadNextQuestion();
};

var loadFailed = function(){
  $("#question").html("Quiz failed to load! Sorry about that.");
};

var loadNextQuestion = function(){
  if (quiz.nextQuestion()) {
    loadQuestion();
    updateProgress();
  } else {
    finishQuiz();
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
  var question       = quiz.currentQuestion();
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
