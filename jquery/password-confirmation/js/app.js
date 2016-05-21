// Problem: Hints are shown even when form is valid
// Solution: Hide and show them at appropriate times

// Hide hints
$("form span").hide();

var $in_passwd = $("#password");
var $hint_passwd = $("#password-hint");

var $in_conf = $("#confirm_password");
var $hint_conf = $("#confirm-hint");



function confirmEvent(){
  // password matches confirmation?
  if (passwordsMatch()){
    // hide hint if match
    $hint_conf.hide();
  } else {
    // else show hint
    $hint_conf.show();
  }
}

function passwordEvent(){
  // Is password valid?
  if (validPassword()){
    // Hide hint if valid
    $hint_passwd.hide();
  } else {
    // else show hint
    $hint_passwd.show();
  }

  // Make sure password and confirmation match
  confirmEvent();
}

function passwordsMatch(){
  return $in_passwd.val() === $in_conf.val();
}

function validPassword(){
  return $in_passwd.val().length > 8;
}



// When event happens on password input
$in_passwd.focus(passwordEvent)
  .keydown(passwordEvent)
  .keyup(passwordEvent)
  .on("paste", function(){
    setTimeout(passwordEvent, 100);
  });


// When event happens on confirmation
$in_conf.focus(confirmEvent)
  .keydown(confirmEvent)
  .keyup(confirmEvent)
  .on("paste", function(){
    setTimeout(confirmEvent, 100);
  });
