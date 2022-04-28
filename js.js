var slideIndex = 1;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("paragra");
  var dots = document.getElementsByClassName("person");
  var people = document.getElementsByClassName("people");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < people.length; i++) {
    people[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  people[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

//menu hambu
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
	
	

burger.addEventListener('click', function(){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

