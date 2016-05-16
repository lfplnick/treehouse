//Hide Warning
$(".warning").hide();

//Show Warning slowly when user moves mouse over Ackbar
$("#ackbar").mouseenter(function(){
  $(".warning").show(1000);
});
