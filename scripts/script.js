// Grabbing all elements of form.

const form = document.getElementById("form");

const cardName = document.getElementById("name");

const cardNumber = document.getElementById("number");

const expiryMonth = document.getElementById("month");

const expiryYear = document.getElementById("year");

const cardCvv = document.getElementById("cvv");

const submitButton = document.getElementById("submit-btn");

// Grabbing error messages field

const nameError = document.getElementById("name-error");

const numberError = document.getElementById("number-error");

const expiryError = document.getElementById("expiry-error");

const cvvError = document.getElementById("cvv-error");

// Grabbing card display fields

const numberDisplay = document.querySelector(".display-number");

const nameDisplay = document.querySelector(".display-name");

const expiryDisplay = document.querySelector(".display-expiry");

const cvvDisplay = document.querySelector(".display-cvv");

// Grabbing Thank you i.e. complete section field

const success = document.querySelector(".thank-you");

// Function to display credit card holder name.

let clientName = "";
function displayNameFunc() {
    clientName = cardName.value;
    nameDisplay.textContent = clientName;
    nameDisplay.style.textTransform = "uppercase";
}

// Function to display credit card number.

let clientNumber = 0;
function displayNumberFunc() {
    clientNumber = cardNumber.value;
    function space(s) {
        return s.toString().replace(/\d{4}(?=.)/g, "$& ");
    }
    const formatNumberDisplay = space(clientNumber);
    numberDisplay.textContent = formatNumberDisplay;
}

// Function to display credit card expiry.

let clientMonth = 0;
let clientYear = 0;
let clientExpiry = 0;
function displayCardExpiryFunc() {
    clientMonth = expiryMonth.value;
    clientYear = expiryYear.value;
    clientExpiry = clientMonth + "/" + clientYear;
    expiryDisplay.textContent = clientExpiry;
}

// Function to displat credit card cvv.

let clientCvv = 0;
function displayCvvFunc() {
    clientCvv = cardCvv.value;
    cvvDisplay.textContent = clientCvv;
}

cardName.addEventListener("input", displayNameFunc);
cardNumber.addEventListener("input", displayNumberFunc);
expiryMonth.addEventListener("input", displayCardExpiryFunc);
expiryYear.addEventListener("input", displayCardExpiryFunc);
cardCvv.addEventListener("input", displayCvvFunc);

// Function to validate form.
