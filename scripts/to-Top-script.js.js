 // Get the button
 let mybutton = document.getElementById("toTopBtn");
    
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 function topFunction() {
 $('html, body').animate({
     scrollTop: 0
 }, 500); 
 }