let slideIndex = 0;
slideShow();

function slideShow(){
  let i;
  let slide = document.getElementsByClassName("slider");
  let dot = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
  setTimeout(slideShow, 2000); // Change image every 2 seconds

}