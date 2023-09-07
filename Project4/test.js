document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    }

    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "block" : "none";
    });
  }

  // Show the next slide on click
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Show the previous slide on click
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Handle slide navigation buttons, you can use your own buttons if needed
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.addEventListener("click", nextSlide);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.addEventListener("click", prevSlide);

  const controlsContainer = document.createElement("div");
  controlsContainer.appendChild(prevBtn);
  controlsContainer.appendChild(nextBtn);

  // Append the navigation controls to the slideshow container
  document.querySelector(".slideshow-container").appendChild(controlsContainer);

  // Show the first slide by default
  showSlide(0);
});
