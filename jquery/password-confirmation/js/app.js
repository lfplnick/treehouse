// Problem: Hints are shown even when form is valid
// Solution: Hide and show them at appropriate times

// Hide hints
$("form span").hide();

var $in_username = $("#username");

var $in_passwd = $("#password");
var $hint_passwd = $("#password-hint");

var $in_conf = $("#confirm_password");
var $hint_conf = $("#confirm-hint");

var $btn_submit = $("#submit");



function canSubmit(){
  return validPassword() && passwordsMatch() && usernamePresent();
}

function confirmEvent(){
  // password matches confirmation?
  if (passwordsMatch()){
    // hide hint if match
    $hint_conf.hide();
  } else {
    // else show hint
    $hint_conf.show();
  }

  // check if form can be submitted
  enableSubmitEvent();
}

function enableSubmitEvent(){
  $btn_submit.prop("disabled", !canSubmit());
}

function onInputInteraction($inputBox, handler){
  $inputBox.focus(handler)
    .keydown(handler)
    .keyup(handler)
    .on("paste", function(){
      setTimeout(handler, 100);
    });
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

function usernamePresent(){
  return $in_username.val().length > 0;
}

function validPassword(){
  return $in_passwd.val().length > 8;
}



// When event happens on username input
onInputInteraction($in_username, enableSubmitEvent);

// When event happens on password input
onInputInteraction($in_passwd, passwordEvent);

// When event happens on confirmation
onInputInteraction($in_conf, confirmEvent);

// Check if submit button should be enabled on document load
//  (i.e., disable submit button on document load)
enableSubmitEvent();
