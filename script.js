var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


//twitter live feed---this blocks out the slideshow for some reason?!//
//  const scrollLine = document.querySelector('.scrollLine');

//     function fillScrollLine() {
//       const windowHeight    = window.innerHeight;
//       const fullHeight      = document.body.clientHeight;
//       const scrolled        = window.scrollY;
//       const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

//       scrollLine.style.width = `${percentScrolled}%`;
//     }

//     window.addEventListener('scroll', debounce(fillScrollLine));

//     function debounce(func, wait = 15, immediate) {
//       var timeout;
//       return function() {
//         var context = this, args = arguments;
//         var later = function() {
//           timeout = null;
//           if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//       };
//     }


