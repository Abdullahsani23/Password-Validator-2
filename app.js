
var passInp = document.getElementById("passInp");
var eightChar = document.getElementById("eightChar");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var SpecChar = document.getElementById("SpecChar");
var number = document.getElementById("number");

function validatePassword() {
    var userPass = passInp.value;
    
    // Regular expressions for validation
    var lowerCaseLatter = /[a-z]/;
    var upperCaseLatter = /[A-Z]/;
    var numberPattern = /[0-9]/;
    var specialCharPattern = /[^a-zA-Z0-9]/;
    var minLength = 8;

    // Check for lowercase letters
    if (userPass.match(lowerCaseLatter)) {
        lowerCase.classList.add("valid");
        // lowerCase.classList.remove("invalid");
    } else {
        lowerCase.classList.remove("valid");
        // lowerCase.classList.add("invalid");
    }

    // Check for uppercase letters
    if (userPass.match(upperCaseLatter)) {
        upperCase.classList.add("valid");
        // upperCase.classList.remove("invalid");
    } else {
        upperCase.classList.remove("valid");
        // upperCase.classList.add("invalid");
    }

    // Check for numbers
    if (userPass.match(numberPattern)) {
        number.classList.add("valid");
        // number.classList.remove("invalid");
    } else {
        number.classList.remove("valid");
        // number.classList.add("invalid");
    }

    // Check for special characters
    if (userPass.match(specialCharPattern)) {
        SpecChar.classList.add("valid");
        // SpecChar.classList.remove("invalid");
    } else {
        SpecChar.classList.remove("valid");
        // SpecChar.classList.add("invalid");
    }

    // Check for minimum length
    if (userPass.length >= minLength) {
        eightChar.classList.add("valid");
        // eightChar.classList.remove("invalid");
    } else {
        eightChar.classList.remove("valid");
        // eightChar.classList.add("invalid");
    }
}

// Assign the function to the input's onkeyup event
passInp.onkeyup = validatePassword;


