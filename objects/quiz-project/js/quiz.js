function Quiz (url_quiz) {
  this.title = "";
  this.correct   = 0;
  this.incorrect = 0;
  this.questions = [];
  this.q_total   = 0;
  this.q_current = 0;

  this.readyEvent = new CustomEvent('quiz-ready', this);
  this.errorEvent = new CustomEvent('quiz-error', this);


  var thisQuiz = this;
  $.ajax({
    "url" : url_quiz,
    "dataType" : "json",
  }).success(function(quiz){
    thisQuiz.initQuiz(quiz);
  }).error(function(){
    document.body.dispatchEvent(thisQuiz.errorEvent);
  });
}

Quiz.prototype = {
  initQuiz: function(quiz){
    this.title = quiz.title;
    for (var i = 0; i < quiz.questions.length; i++) {
      var question = new Question(quiz.questions[i].question, quiz.questions[i].answers, quiz.questions[i].correctAnswer);
      this.questions.push(question);
    }

    this.q_total = this.questions.length;

    document.body.dispatchEvent(this.readyEvent);
  }
};
