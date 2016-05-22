// Problem: No user interaction causes no change to application
// Solution: When user interacts, cause changes appropriately

var $colors = $(".controls ul li");
var $btn_newColor = $("#revealColorSelect");
var $menu_colorSelect = $("#colorSelect");

var $slider_red = $("#red");
var $slider_green = $("#green");
var $slider_blue = $("#blue");
var $sliders = $(".sliders input");
var $newColor = $("#newColor");



function setNewColor(){
  // update new color span
  var rgb = "rgb(" + $slider_red.val() + "," + $slider_green.val() + "," + $slider_blue.val() + ")";
  $newColor.css("background", rgb);
}

// when clicking on control list items
$colors.click(function(){
  if (!$(this).hasClass("selected")){
    // deselect sibling elements
    $colors.each(function(){
      $(this).removeClass("selected");
    });

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
  // append color to control ul
  // select new color

// on mouse events on canvas
  // draw lines

setNewColor();
