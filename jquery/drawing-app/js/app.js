// Problem: No user interaction causes no change to application
// Solution: When user interacts, cause changes appropriately

var $color_ul = $(".controls ul");
var $btn_newColor = $("#revealColorSelect");
var $menu_colorSelect = $("#colorSelect");

var $r = $("#red");
var $g = $("#green");
var $b = $("#blue");
var $sliders = $("input[type=range]");
var $newColor = $("#newColor");
var $btn_addColor = $("#addNewColor");
var activeColor = $(".controls li.selected").css("background-color");

var $canvas = $("canvas");
var ctx_canvas = $canvas[0].getContext('2d');
var flg_mouseDown = false;

function addNewColor(){
  var colorId = 'custom-' + $r.val() + '-' + $g.val() + '-' + $b.val();
  var $customColor;
  // append color to control ul
  if ($("#" + colorId).length){
    $customColor = $("#" + colorId);
  } else {
    $customColor = $('<li class="custom" id="' + colorId + '"></li>')
    $customColor.css("background-color", $newColor.css("background-color"));
    $color_ul.append($customColor);
  }
  // select new color
  $customColor.click();
}

function setNewColor(){
  // update new color span
  $newColor.css("background-color", "rgb(" + $r.val() + "," + $g.val() + "," + $b.val() + ")");
}

// when clicking on control list items
$(".controls").on("click", "li", function(){
  if (!$(this).hasClass("selected")){
    // deselect sibling elements
    $(this).siblings().removeClass("selected");

    // select clicked element
    $(this).addClass("selected");

    activeColor = $(this).css("background-color");
  }
});

// when new color is clicked
$btn_newColor.click(function(){
  // show or hide color select
  $menu_colorSelect.toggle();
});

// when color sliders change
$sliders.change(setNewColor);

// when add color is clicked
$btn_addColor.click(addNewColor);

// on mouse events on canvas
$canvas.mousedown(function(e){
  ctx_canvas.beginPath();
  ctx_canvas.moveTo(e.offsetX, e.offsetY);
}).mousemove(function(e){
  // draw lines
  if (flg_mouseDown) {
    ctx_canvas.lineTo(e.offsetX, e.offsetY);
    ctx_canvas.strokeStyle = activeColor;
    ctx_canvas.stroke();
  }
}).mouseenter(function(e){
  if (flg_mouseDown){
    ctx_canvas.beginPath();
    ctx_canvas.moveTo(e.offsetX, e.offsetY);
  }
});

$(document).mousedown(function(e){
  flg_mouseDown = true;
}).mouseup(function(){
  flg_mouseDown = false;
});

setNewColor();
