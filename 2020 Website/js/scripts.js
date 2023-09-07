document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

// Validation function
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value;
    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let phoneError = document.getElementById("phoneError");
    let resetButton = document.getElementById("reset");
    let submitButton = document.getElementById("submitButton");

    // Reset error messages and hide submit button
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    phoneError.style.display = "none";
    resetButton.style.display = "none";
    submitButton.style.display = "none";

    // Validate name
    if (name.trim() === "") {
        nameError.style.display = "block";
        // document.getElementById("name").focus();
        // return false;
    }

    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailError.style.display = "block";
        // document.getElementById("email").focus();
        // return false;
    }

    // Validate message
    if (message.trim() === "") {
        messageError.style.display = "block";
        // document.getElementById("message").focus();
        // return false;
    }

    // Validate phone number
    let phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        phoneError.style.display = "block";
        // document.getElementById("phone").focus();
        // return false;
    }

    // Show submit button if all fields are valid
    if(phone.match(phonePattern) !="" && email.match(emailPattern) !="" && message !="" && name != "")
    submitButton.style.display = "block";
    resetButton.style.display = "block";
    // return true;
}

// // Reset function
function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("phone").value = "";

    // Hide error messages and submit button
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("reset").style.display = "none";

    // Set focus to the first input field
    document.getElementById("name").focus();
}
