$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault(); // Stop form from submitting normally

    var isValid = true;

    // Clear previous errors
    $(".error").text("");

    // Name validation
    var name = $("#name").val().trim();
    if (name === "") {
      $("#nameError").text("Name is required.");
      isValid = false;
    }

    // Email validation
    var email = $("#email").val().trim();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailPattern.test(email)) {
      $("#emailError").text("Enter a valid email.");
      isValid = false;
    }

    // Phone validation (Malta format +356 #### ####)
    var phone = $("#phone").val().trim();
    var phonePattern = /^\+356\s?\d{4}\s?\d{4}$/;
    if (phone === "" || !phonePattern.test(phone)) {
      $("#phoneError").text("Use format +356 #### ####");
      isValid = false;
    }

    // Message validation
    var message = $("#message").val().trim();
    if (message.length < 10) {
      $("#messageError").text("At least 10 characters required.");
      isValid = false;
    }

    // If all fields are valid
    if (isValid) {
      alert("Thank you! Your message has been sent.");
      $("#contactForm")[0].reset(); // Reset the form
    }
  });
});
