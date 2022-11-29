function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* 
opening and closing the modal
*/
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");

function launchModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "block";
}

function closeModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*
Validating input values in the modal form
*/

const form = document.querySelector('form');
const allInputs = Array.from(document.querySelectorAll("form input"));
const toTest = ["first", "last", "email", "birthdate", "quantity", "checkbox1"];
const inputs = allInputs.filter(input => toCheck.includes(input.id));
const radioInputs = allInputs.filter(input => input.type == "radio");
const location1 = document.getElementById('location1');

function test_first(input) {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(input.value.trim())
}

function test_last(input) {
    return test_first(input)
}

function test_email(input) {
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+).(.\w{2,3})+$/;
    return emailRegex.test(input.value)
}

function test_birthdate(input) {
    return input.value.length > 0 ? true : false;
}

function test_quantity(input) {
    let num = parseInt(input.value);
    if (num != NaN) {
        return num >= 0 ? true : false;
    }
    return false;
}

function test_radioBtn() {
    return radioInputs.some(radio => radio.checked) ? true : false
}

function test_checkbox1(input) {
    return input.checked
}

function hideError(input) {
    input.parentNode.setAttribute('data-error-visible', false);
}

function showError(input) {
    input.parentNode.setAttribute('data-error-visible', true);
}

// validate form
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

function sendForm() {
    form.reset();
    displayConfirmationMsg();
}

/* 
hiding form and displaying confirmation message
*/

const modalBody = document.querySelector(".modal-body");

function hideForm() {
    form.style.display = "none";
}

function displayConfirmationMsg() {
    hideForm();

    let message = document.createElement("div");
    message.setAttribute("id", "confirmMessage");
    message.innerHTML = `
        <h2>Merci pour votre inscription !</h2>
        <button id="closeConfirmMessage" class="btn-signup">Fermer</button>
        `
    modalBody.appendChild(confirmMessage);

    let btn = document.querySelector("#closeConfirmMessage");
    btn.addEventListener("click", closeModal);
}



