// DOM elements
const form = document.querySelector('form[name="reserve"]');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getAnimations('birthdate');
const quantity = document.getElementById('quantity');
const location = document.querySelector('input[name="location"]:checked');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// check minimum length requirement
function testMinimumLength(input, min, message) {
    if (input.length === 0) {
        showError(input, message)
    }
    if (input.length < min) {
        showError(input, message)
    }
    return true
}

// check email address
function testEmail(input, message) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    regex.test(input.value)
        ? hideError(input)
        : showError(input, message);
}

// check if the value is numeric
function testNumber(input, message) {
    isNaN(input.value)
        ? showError(input, message)
        : hideError(input)
}

// check if a radio button is checked
function testRadioBtn(name, input, message) {
    let checked_button = document.querySelector(`input[name = ${name}]:checked`);

    checked_button != null
        ? hideError(input)
        : showError(input, message)
}

// check if the checkbox is checked
function testCheckbox(id, input, message) {
    let checkbox = document.getElementById(id);

    checkbox != null
        ? hideError(input)
        : showError (input, message)
}

// remove error message
function hideError(input) {
    input.parentNode.removeAttribute('data-error');
    input.parentNode.setAttribute('data-error-visible', false);
}

// show error message
function showError(input, message) {
    input.parentNode.setAttribute('data-error', message);
    input.parentNode.setAttribute('data-error-visible', true);
}

// validate form
function validate() {
    testMinimumLength(firstName, 2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    testMinimumLength(lastName, 2, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    testEmail(email, "L'adresse électronique n'est pas valide");
    testNumber(quantity, "Une valeur numérique doit être saisie");
    testRadioBtn('location', location, "Vous devez choisir une option.");
    testCheckbox('checkbox1', checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.");
}