// Problem: No user interaction causes no change to application
// Solution: When user interacts, cause changes appropriately

var $colors = $(".controls ul li");
var $btn_newColor = $("#revealColorSelect");
var $menu_colorSelect = $("#colorSelect");



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
  // update new color span

// when add color is clicked
  // append color to control ul
  // select new color

// on mouse events on canvas
  // draw lines
