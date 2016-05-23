// Problem: No user interaction causes no change to application
// Solution: When user interacts, cause changes appropriately

var $colorTray = $(".controls ul");

var $btn_addColor = $("#addNewColor");
var $btn_newColor = $("#revealColorSelect");

var $menu_colorSelect = $("#colorSelect");

var $newColorSwatch = $("#newColor");
var $sliders = $("input[type=range]");
var $r = $("#red");
var $g = $("#green");
var $b = $("#blue");

var $canvas = $("canvas");
var ctx_canvas = $canvas[0].getContext('2d');

var activeColor = $(".controls li.selected").css("background-color");
var flg_mouseDown = false;

function addNewColor(){
  var colorId = 'custom-' + $r.val() + '-' + $g.val() + '-' + $b.val();
  var $customColor;
  // check if color is already in tray
  if ($("#" + colorId).length){
    // set $customColor to existing swatch in tray
    $customColor = $("#" + colorId);
  } else {
    // append new color to color tray
    $customColor = $('<li class="custom" id="' + colorId + '"></li>')
    $customColor.css("background-color", $newColorSwatch.css("background-color"));
    $colorTray.append($customColor);
  }

  // select custom color
  $customColor.click();
}

function setNewColor(){
  // update new color span
  $newColorSwatch.css("background-color", "rgb(" + $r.val() + "," + $g.val() + "," + $b.val() + ")");
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
