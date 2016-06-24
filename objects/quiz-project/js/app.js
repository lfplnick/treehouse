updateQuizName("George Washington Quiz");
var quiz = loadQuiz("js/george-washington-facts.json");
if (typeof quiz.questions === 'undefined' || quiz.questions.length === 0) {
  // need to handle this
}

updateProgress(quiz.q_current + 1, quiz.q_total);
loadQuestion(quiz.questions[0]);
