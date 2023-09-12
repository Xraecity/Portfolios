let headEl = document.getElementsByTagName("header")[0];
let footerEl = document.getElementsByTagName("footer")[0];

headEl.innerHTML = `
        <div class="menu" id="fx">
          <div class="logo-img">
          <a href="index.html"> <img src="images/logo/logo.png" class="logo" alt="logo" width="10%"></a>
          </div>
          <div class="links">
            <nav>
              <ul class="header-link" id="header-link">
                <li id="m-0"><a href="index.html" class="nav-link" id="index">Home</a></li>
                <li id="m-0"><a href="about.html" class="nav-link " id="aboutLink">About</a></li>
                <li id="m-0"><a href="services.html" class="nav-link " id ="serviceLink">Services</a></li>
                <li id="m-0"><a href="contact.html" class="nav-link " id="contactLink">Contact</a></li>
              </ul>
            </nav>
          </div>
          </div>
          `;

         
          footerEl.innerHTML =  `
          <div class="line"></div>
          <div class="footer">
            <div class="row">
              <div class="col-lg-3">
                <div class="logo-img">
                 <a href="index.html"> <img src="images/logo/logo.png" alt="" width="50%"></a>
                  <br>
                  Xraecity Mediatrist   
                </div>
                <ul class="social-icons">
                  <li><a href="www.facebook.com/princexrae_" id=""><span class=""><img src="images/icons/facebook.png" alt="" width="30px"></span></a></li>
                  <li><a href="www.instagram.com/princexrae_" id=""><span class=""><img src="images/icons/instagram.png" alt="" width="30px"></span></a></li>
                  <li><a href="www.whatsapp.me/+2045880599" id=""><span class=""><img src="images/icons/whatsapp.png" alt="" width="30px"></span></a></li>
                  <li><a href="tel:+2045880599" id=""><span class=""><img src="images/icons/phone.png" alt="" width="30px"></span></a></li>
                  <!-- Add more social media icons here -->
              </ul>
            </div>
              <div class="col-lg-2">
                <h4>QUICK LINK</h4>
                <ul class="footer-link">
                  <li> <a href="../" class="nav-link" id="index">Home</a></li>
                  <li> <a href="about.html" class="nav-link " id="aboutLink">About</a></li>
                  <li> <a href="services.html" class="nav-link " id="serviceLink">Services</a></li>
                  <li> <a href="contact.html" class="nav-link " id="contactLink">Contact</a></li>
                  <li> <a href="#" class="nav-link " id="register">Register</a></li>
                </ul>
              </div>
              <div class="col-lg-2">
                <h4>HELP</h4>
                <ul class="footer-link">
                  <li> <a href="#" class="nav-link" id="">FAQS</a></li>
                  <li> <a href="#" class="nav-link " id="">Portfolios</a></li>
                  <li> <a href="#" class="nav-link " id="">Publication</a></li>
                  <li> <a href="#" class="nav-link " id="">Price tags</a></li>
                  <li> <a href="#" class="nav-link " id="">Accessibility</a></li>
                </ul>
              </div>
              <div class="col-lg-2">
                <h4>OUR COMMUNITY</h4>
                <ul class="footer-link">
                  <li> <a href="#" class="nav-link" id="">What we do</a></li>
                  <li> <a href="#" class="nav-link " id="">Who we are</a></li>
                  <li> <a href="#" class="nav-link " id="">Our Values</a></li>
                  <li> <a href="#" class="nav-link " id="">Mission</a></li>
                  <li> <a href="#" class="nav-link " id="">Vision</a></li>
                </ul>
              </div>
            </div>
          </div>
         
          <center><code class="copright"> &copy; 2023 Your Company Name. All rights reserved.</code></center>`;

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("index");
  const aboutLink = document.getElementById("aboutLink");
  const serviceLink = document.getElementById("serviceLink");
  const contactLink = document.getElementById("contactLink");
    
    // Add a click event listener
    homeLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      window.location.href = "index.html"; // Replace with your actual "About Us" page URL
  });
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "about.html"; // Replace with your actual "About Us" page URL
});
serviceLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "services.html"; // Replace with your actual "About Us" page URL
});
contactLink.addEventListener ("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "contact.html"; // Replace with your actual "About Us" page URL
});

});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-link");
    var currentPath = window.location.pathname;

    for (var i = 0; i < navLinks.length; i++) {
        var linkPath = navLinks[i].getAttribute("href");
        if (currentPath.includes(linkPath)) {
            navLinks[i].classList.add("active");
        }
    }
});

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('fx');
    const linkEl = document.getElementsByClassName("nav-link")

    
    // Change background color and opacity based on scroll position
   
        if (window.scrollY > 0) {
            for(let i =0; i < linkEl.length; i++)
              linkEl[i].style.color = "darkgrey";
             navbar.style.backgroundColor = 'white';
        }
        else {
          for(let i =0; i < linkEl.length; i++)
            linkEl[i].style.color = "white";
           navbar.style.backgroundColor = 'transparent';

          
        }

});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}


document.addEventListener("DOMContentLoaded", function () {
const slideLeft = document.querySelector(".slideLeft");
const slideRight = document.querySelector(".slideRight");

// Function to add the 'active' class
function activateSlide() {
slideLeft.classList.add("active");
slideRight.classList.add("active");
}

// Add the 'active' class after a delay (for demonstration purposes)
setTimeout(activateSlide, 1000);
});