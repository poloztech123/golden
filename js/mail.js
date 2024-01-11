function sendEmail(){
    let email = document.getElementById('email').value;
let first_name = document.getElementById('first-name').value;
let last_name = document.getElementById('last-name').value;
let message = document.getElementById('message').value;
let form = document.getElementById('form');

emailjs.send("service_brc1q5s","template_8wjruar",{
    email,
    first_name,
    last_name,
    message
})
form.reset();
}

function sendVolunteerEmail(){}