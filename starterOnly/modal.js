function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");

/**
 * launches the modal
 */
function launchModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "block";
}

/**
 * closes the modal
 */
function closeModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

const form = document.querySelector('form');
const allInputs = Array.from(document.querySelectorAll("form input"));
const toTest = ["first", "last", "email", "birthdate", "quantity", "checkbox1"];
const inputs = allInputs.filter(input => toTest.includes(input.id));
const radioInputs = allInputs.filter(input => input.type == "radio");
const location1 = document.getElementById('location1');

/**
 * tests the first name input
 * @param {object} input 
 * @returns boolean
 */
function test_first(input) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(input.value.trim())
}

/**
 * tests the last name input
 * @param {object} input 
 * @returns boolean
 */
function test_last(input) {
    return test_first(input)
}

/**
 * tests the email input
 * @param {object} input 
 * @returns boolean
 */
function test_email(input) {
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+).(.\w{2,3})+$/;
    return emailRegex.test(input.value)
}

/**
 * tests the birthdate input
 * @param {object} input 
 * @returns boolean
 */
function test_birthdate(input) {
    return input.value.length > 0 ? true : false;
}

/**
 * tests quantity input
 * @param {object} input 
 * @returns boolean
 */
function test_quantity(input) {
    let num = parseInt(input.value);
    if (num != NaN) {
        return num >= 0 ? true : false;
    }
    return false;
}

/**
 * tests if a radio button is checked
 * @returns boolean
 */
function test_radioBtn() {
    return radioInputs.some(radio => radio.checked) ? true : false
}

/**
 * test if the checkbox is checked
 * @param {object} input 
 * @returns boolean
 */
function test_checkbox1(input) {
    return input.checked
}

/**
 * hides error messages
 * @param {object} input 
 */
function hideError(input) {
    input.parentNode.setAttribute('data-error-visible', false);
}

/**
 * shows error messages
 * @param {object} input 
 */
function showError(input) {
    input.parentNode.setAttribute('data-error-visible', true);
}

/**
 * validates if all input fields are correctly filled
 */
function validate() {

    let inputValues = [];

    // test firstname, lastname, email, birthdate, quantity and checkbox1
    inputs.forEach(
        (input) => {
            if (window['test_' + input.id](input)) {
                inputValues.push(true);
                hideError(input);
            } else {
                inputValues.push(false);
                showError(input);
            }
        })

    // test location radio button
    if (test_radioBtn()) {
        inputValues.push(true);
        hideError(location1);
    } else {
        inputValues.push(false);
        showError(location1);
    }

    // if every input returns true, send the form
    if (inputValues.every(value => value === true))
        sendForm()
    return false;
}

// send form and display confimation message
const modalBody = document.querySelector(".modal-body");

/**
 * hides the form
 */
function hideForm() {
    form.style.display = "none";
}

/**
 * displays the confirmation message
 */
function displayConfirmationMessage() {
    hideForm();

    let confirmMessage = document.createElement("div");
    confirmMessage.setAttribute("id", "confirmMessage");
    confirmMessage.innerHTML = `
        <h2>Merci pour votre inscription</h2>
        <button id="closeConfirmMessage" class="btn-signup">Fermer</button>
        `
    modalBody.appendChild(confirmMessage);

    let btn = document.querySelector("#closeConfirmMessage");
    btn.addEventListener("click", closeModal);
}

/**
 * submits the form
 */
function sendForm() {
    // reset the form
    form.reset();
    displayConfirmationMessage();
}