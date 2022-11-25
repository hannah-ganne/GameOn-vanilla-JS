// DOM elements


// check minimum length requirement
function checkMinimumLength(input, min, message) {
    if (input.length === 0) {
        showError(input, message)
    }
    if (input.length < min) {
        showError(input, message)
    }
    return true
}

// check email address
function checkEmail(input, message) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    regex.test(input.value)
        ? showSuccess(input)
        : showError(input, message);
}

// check if the value is numeric
function checkNumber(input, message) {
    isNaN(input)
        ? showError(input, message)
        : showSuccess(input)
}

// check if a radio button is checked
function checkRadioBtn(name, input, message) {
    let checked_button = document.querySelector(`input[name = ${name}]:checked`);

    checked_button != null
        ? showSuccess(input)
        : showError(input, message)
}

// check if the checkbox is checked
function checkCheckbox(id, input, message) {
    let checkbox = document.getElementById(id);

    checkbox != null
        ? showSuccess(input)
        : showError (input, message)
}

// remove error message
function showSuccess(input) {
    const parent = input.parentElement;
    const errorMsg = parent.lastElementChild;
    errorMsg.textContent = ""
}

// show error message
function showError(input, message) {
    const parent = input.parentElement;
    const errorMsg = parent.lastElementChild;
    errorMsg.textContent = message;
}