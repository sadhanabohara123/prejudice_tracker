//---for Navigation Bar---// 
// Function to toggle the navigation bar and toggle icon
function toggleNavbar() {
  const navbar = document.getElementById('myNav');
  const icon = document.querySelector('.icon i');
 
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    icon.classList.remove('rotate-90');
    
  } else {
    navbar.style.display = 'block';
    icon.classList.add('rotate-90');
  }
}


// Function to check window width and show/hide toggle icon accordingly
function checkWindowSize() {
  var icon = document.querySelector(".icon i");
  var header = document.querySelector(".header");
  var navbar = document.getElementById("myNav");
  if (window.innerWidth <= 1380) {
    icon.style.display = "block"; 
    header.style.height='150px';
    navbar.style.display = 'none'; // Hide navbar if window width is less than or equal to 1380px
  } else {
    icon.style.display = "none"; 
    header.style.height='150px';
    navbar.style.display = 'block'; // Show navbar if window width is greater than 1380px
  }
}
// Get all tabs
const tabs = document.querySelectorAll('.tabs');

// Iterate through each tab and attach click event listener
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active-page class from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('active-page');
    });

    // Add active-page class to the clicked tab
    this.classList.add('active-page');
  });
});

//---for banners---//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//---for About section---//
var links = document.getElementsByClassName("links");
var contents = document.getElementsByClassName("contents");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    // Remove active class from all links
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove("active-link");
    }
    // Add active class to the clicked link
    this.classList.add("active-link");

    var targetId = this.innerText.replace(/\s/g, '-');
  
    // Remove active class from all contents
    for (var k = 0; k < contents.length; k++) {
      contents[k].classList.remove("active-tab");
    }
    // Add active class to the target content
    document.getElementById(targetId).classList.add("active-tab");
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}


checkWindowSize();
window.addEventListener("resize", checkWindowSize);
