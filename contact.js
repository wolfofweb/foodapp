addEventListener('submit', event => {
    validate()
    if (validate() == false) {
        event.preventDefault();
    }
})
function validate() {
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let nameAlert = document.querySelector("#name-alert");
    let messageAlert = document.getElementById("message-alert");
    let message = document.getElementById("message-area")
    if (fname.value.toLowerCase() == lname.value.toLowerCase()) {
        nameAlert.style.display = "block";
        nameAlert.innerText = "First Name and Last Name should not be same";
        return false;
    }
    else if (fname.value.length < 3 || lname.value.length < 3) {
        nameAlert.style.display = "block";
        nameAlert.innerText = "First Name and last name should have minimum of 3 characters"
        return false;
    }
    else if (message.value.length > 250) {
        messageAlert.style.display = "block";
        messageAlert.innerText = "The message text should not be more than 250 characters"
        return false;
    }
    else {
        successAlert = document.getElementById("submit-alert");
        successAlert.style.display = "block";
        return true;
    }
}
function emailAlert() {
    let emailAlert = document.getElementById("email-alert");
    emailAlert.style.display = "block";
    emailAlert.innerText = "Please enter a valid Email ID";
}
function messageAlert() {
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.display = "block";
    messageAlert.innerText = "Enter a message";
}