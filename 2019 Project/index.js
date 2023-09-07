// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('contactForm');
//     const nameInput = document.getElementById('name');
//     const phoneInput = document.getElementById('phone');
//     const emailInput = document.getElementById('email');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         validateForm();
//     });

//     function validateForm() {
//         const nameError = document.getElementById('nameError');
//         const phoneError = document.getElementById('phoneError');
//         const emailError = document.getElementById('emailError');
//         const errorMessages = document.getElementById('errorMessages');

//         let isValid = true;

//         if (nameInput.value.trim() === '') {
//             nameError.style.display = 'block';
//             isValid = false;
//         } else {
//             nameError.style.display = 'none';
//         }

//         const phonePattern = /^\d{10}$/;
//         if (!phonePattern.test(phoneInput.value)) {
//             phoneError.style.display = 'block';
//             isValid = false;
//         } else {
//             phoneError.style.display = 'none';
//         }

//         const emailPattern = /^\S+@\S+\.\S+$/;
//         if (!emailPattern.test(emailInput.value)) {
//             emailError.style.display = 'block';
//             isValid = false;
//         } else {
//             emailError.style.display = 'none';
//         }

//         if (isValid) {
//             // Submit the form or perform other actions here
//             form.reset();
//         }

//         errorMessages.style.display = isValid ? 'none' : 'block';
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let slideIndex = 0;
//     showSlides();

//     function showSlides() {
//         const slides = document.getElementsByClassName('slide');
//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = 'none';
//         }

//         slideIndex++;
//         if (slideIndex > slides.length) {
//             slideIndex = 1;
//         }

//         slides[slideIndex - 1].style.display = 'block';

//         setTimeout(showSlides, 3000); // Change slide every 3 seconds
//     }
// });


    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      