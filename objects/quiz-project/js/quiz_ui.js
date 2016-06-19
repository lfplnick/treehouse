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

  console.log("updating progress");
  var progressHTML = "Question " + i_question  + " of " + i_total;
  document.getElementById("progress").innerHTML = progressHTML;
};

var updateQuizName = function(s_quizName){
  document.getElementById("quiz-title").innerHTML = s_quizName;
  document.title = s_quizName;
};
