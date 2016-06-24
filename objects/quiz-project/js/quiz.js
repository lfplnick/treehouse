function Quiz (url_quiz) {
  this.correct   = 0;
  this.incorrect = 0;
  this.questions = JSON.parse($.ajax({
    "url" : url_quiz,
    "async" : false,
    "dataType" : "json"
  }).responseText);
  this.q_total = this.questions.length;
  this.q_current = 0;
}
