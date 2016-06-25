function Quiz (url_quiz) {
  this.correct   = 0;
  this.incorrect = 0;
  this.questions = [];
  this.q_total   = 0;
  this.q_current = 0;


  var thisQuiz = this;
  $.ajax({
    "url" : url_quiz,
    "dataType" : "json",
  }).success(function(quiz){
    thisQuiz.initQuestions(quiz);
  });
}

Quiz.prototype = {
  initQuestions: function(quiz){
    for (var i = 0; i < quiz.length; i++) {
      var question = new Question(quiz[i].question, quiz[i].answers, quiz[i].correctAnswer);
      this.questions.push(question);
    }

    this.q_total = this.questions.length;
    updateProgress(this.q_current + 1, this.q_total);
    loadQuestion(this.questions[0]);
  }
};
