// Grabbing all elements of form.

const form = document.getElementById("form");

const cardName = document.getElementById("name");

const cardNumber = document.getElementById("number");

const expiryMonth = document.getElementById("month");

const expiryYear = document.getElementById("year");

const cardCvv = document.getElementById("cvv");

const confirmButton = document.getElementById("confirm-btn");

const continueButton = document.getElementById("continue-btn");

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
    if (clientName === "") {
        nameDisplay.textContent = "xxxx xxxxxxx";
    }
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
    if (clientNumber === "") {
        numberDisplay.textContent = "0000 0000 0000 0000";
    }
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
    if (clientMonth === "" && clientYear === "") {
        expiryDisplay.textContent = "00/00";
    }
}

// Function to displat credit card cvv.

let clientCvv = 0;
function displayCvvFunc() {
    clientCvv = cardCvv.value;
    cvvDisplay.textContent = clientCvv;
    if (clientCvv === "") {
        cvvDisplay.textContent = "000";
    }
}

cardName.addEventListener("input", displayNameFunc);
cardNumber.addEventListener("input", displayNumberFunc);
expiryMonth.addEventListener("input", displayCardExpiryFunc);
expiryYear.addEventListener("input", displayCardExpiryFunc);
cardCvv.addEventListener("input", displayCvvFunc);

// Stop form to submit when clicked on submit button

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

// Function to validate name

function validateName() {
    if (cardName.value === "") {
        nameError.textContent = "please enter name.";
        return false;
    } else {
        nameError.textContent = "";
    }
    return true;
}

// Function to validate credit card number

function validateCreditCardNumber() {
    if (cardNumber.value === "") {
        numberError.textContent = "please enter credit card number.";
        return false;
    }
    if (cardNumber.value.length != 16) {
        numberError.textContent = "not a valid credit card number !";
        return false;
    } else {
        numberError.textContent = "";
    }
    return true;
}

// Function to validate expiry date.

function validateExpiry() {
    if (expiryMonth.value === "" || expiryYear.value === "") {
        expiryError.textContent = "please enter expiry.";
        return false;
    }
    if (expiryMonth.value.length != 2 || expiryYear.value.length != 2) {
        expiryError.textContent = "wrong input !";
        return false;
    } else {
        expiryError.textContent = "";
    }
    return true;
}

// Function to validate cvv code.

function validateCvv() {
    if (cardCvv.value === "") {
        cvvError.textContent = "please enter cvv.";
        return false;
    }
    if (cardCvv.value.length != 3) {
        cvvError.textContent = "wrong input !";
        return false;
    } else {
        cvvError.textContent = "";
    }
    return true;
}

// Function to validate form.

function validateForm() {
    validateName();
    validateCreditCardNumber();
    validateExpiry();
    validateCvv();
    if (
        !validateName() ||
        !validateCreditCardNumber() ||
        !validateExpiry() ||
        !validateCvv()
    ) {
        return false;
    } else {
        form.style.display = "none";
        success.style.display = "block";
        return true;
    }
}

// What happens when the confirm button is clicked.

confirmButton.addEventListener("click", validateForm);

// What happens when the continue button is clicked.

continueButton.addEventListener("click", () => {
    success.style.display = "none";
    form.style.display = "block";
    nameDisplay.textContent = "xxxx xxxxxxx";
    cardName.value = "";
    numberDisplay.textContent = "0000 0000 0000 0000";
    cardNumber.value = "";
    expiryDisplay.textContent = "00/00";
    expiryMonth.value = "";
    expiryYear.value = "";
    cvvDisplay.textContent = "000";
    cardCvv.value = "";
});
