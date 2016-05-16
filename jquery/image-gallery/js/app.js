// When clicking on image it goes to a dead end
// Solution: Create overlay with large image (lightbox)

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add an image to overlay
$overlay.append($image);

// Add a caption
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

// Capture click event on link to image
$("#imageGallery a").click(function(event){
  // Stop browser from following image link
  event.preventDefault();

  // Update overlay with the image in the link
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  // Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

  // Show overlay
  $overlay.show();
});
  
// When overlay is clicked
$overlay.click(function(){
  // Hide the overlay
  $overlay.hide();
});
