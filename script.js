document.getElementById("submit").addEventListener("click", function() {
    const passwordField = document.getElementById("password-field");
    const password = passwordField.value; // Get the value of the input field

    // Define character requirements using regular expressions
    const number = /[0-9]/;
    const cap = /[A-Z]/;
    const low = /[a-z]/;
    const symbol = /[!@#$%^&*(),.?":{}|<>]/;

    // Calculate strength based on the presence of each character type
    let strength = 0;
    if (password.length >= 8) strength += 20; // Length check
    if (cap.test(password)) strength += 20;   // Uppercase check
    if (low.test(password)) strength += 20;   // Lowercase check
    if (number.test(password)) strength += 20; // Number check
    if (symbol.test(password)) strength += 20; // Symbol check

    // Update the progress bar and text
    const strengthMeter = document.getElementById("strength-meter");
    const strengthText = document.getElementById("strength-text");
    
    strengthMeter.value = strength;

    // Display text based on strength value
    if (strength === 100) {
        strengthText.textContent = "Very Strong";
        strengthText.style.color = "green";
    } else if (strength >= 80) {
        strengthText.textContent = "Strong";
        strengthText.style.color = "darkgreen";
    } else if (strength >= 60) {
        strengthText.textContent = "Moderate";
        strengthText.style.color = "orange";
    } else if (strength >= 40) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "orangered";
    } else {
        strengthText.textContent = "Very Weak";
        strengthText.style.color = "red";
    }

    // Clear the input field after processing
    passwordField.value = "";
});

// Toggle password visibility
const toggleButton = document.getElementById("toggle-visibility");
toggleButton.addEventListener("click", function() {
    const passwordField = document.getElementById("password-field");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide"; // Change button text to "Hide"
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show"; // Change button text to "Show"
    }
});
