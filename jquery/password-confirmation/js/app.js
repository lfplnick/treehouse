// Problem: Hints are shown even when form is valid
// Solution: Hide and show them at appropriate times

// Hide hints
$("form span").hide();

var $in_passwd = $("#password");
var $hint_passwd = $("#password-hint");

function passwordEvent(){
  // Is password valid?
  if ($in_passwd.val().length > 8){
    // Hide hint if valid
    $hint_passwd.hide();
  } else {
    // else show hint
    $hint_passwd.show();
  }
}



// When event happens on password input
$in_passwd.change(passwordEvent).keyup(passwordEvent);


// When event happens on confirmation
  // password matches confirmation?
    // hide hint if match

    // else show hint
