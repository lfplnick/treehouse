// Problem: No user interaction causes no change to application
// Solution: When user interacts, cause changes appropriately

var $color_ul = $(".controls ul");
var $btn_newColor = $("#revealColorSelect");
var $menu_colorSelect = $("#colorSelect");

var $slider_red = $("#red");
var $slider_green = $("#green");
var $slider_blue = $("#blue");
var $sliders = $("input[type=range]");
var $newColor = $("#newColor");
var $btn_addColor = $("#addNewColor");



function addNewColor(){
  var colorId = 'custom-' + $slider_red.val() + '-' + $slider_green.val() + '-' + $slider_blue.val();
  var $customColor;
  // append color to control ul
  if ($("#" + colorId).length){
    $customColor = $("#" + colorId);
  } else {
    $customColor = $('<li class="custom" id="' + colorId + '"></li>')
    $customColor.css("background", getSliderRGB());
    $color_ul.append($customColor);
  }
  // select new color
  $customColor.click();
}

function getSliderRGB(){
  return "rgb(" + $slider_red.val() + "," + $slider_green.val() + "," + $slider_blue.val() + ")";
}

function setNewColor(){
  // update new color span
  $newColor.css("background", getSliderRGB());
}

// when clicking on control list items
$(".controls").on("click", "li", function(){
  if (!$(this).hasClass("selected")){
    // deselect sibling elements
    $(this).siblings().removeClass("selected");

    // select clicked element
    $(this).addClass("selected");
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
  // draw lines

setNewColor();
