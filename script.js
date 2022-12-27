const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const username2 = document.getElementById("username2");
const password = document.getElementById("password");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function emailValidation(email) {
    const re = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

function usernameValidation(username) {
    const reg = /^[A-z][a-z0-9_-]{3,19}$/;
    return reg.test(String(username));
}

function checkPassword(password) {
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return pass.test(String(password));
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById("email");

    if (username.value === "") {
        showError(username, "First Name cannot be empty");
    } else if (!usernameValidation(username.value)) {
        showError(username, "First Name is invalid")
    } else {
        showSuccess(username);
    }
    if (username2.value === "") {
        showError(username2, "Last Name cannot be empty");
    } else if (!usernameValidation(username2.value)) {
        showError(username2, "Last Name is invalid")
    } else {
        showSuccess(username2);
    }
    if(email.value === "") {
        showError(email, "Email cannot be empty");
    } else if (!emailValidation(email.value)) {
        showError(email, "Looks like this is not an email");
        email.value= "email@example.com";
        email.style.color = "hsl(0, 100%, 74%)";
        email.style.fontWeight = "bold";
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, "Password cannot be empty");
    } else if (!checkPassword(password.value)) {
        showError(password, "Password is invalid");
    } else {
        showSuccess(password);
    }
})