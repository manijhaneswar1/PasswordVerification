function checkPassword(event) {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    console.log(password,confirmPassword);
    let message = document.getElementById('message');

    if (password.length !== 0) {
        if (password === confirmPassword) {
            message.textContent = "Passwords Match";
            message.style.color = "green";
        } else {
            message.textContent = "Passwords do not match";
            message.style.color = "red";
        }
    } else {
        alert("Password can't be empty");
        message.textContent="";
    }
}