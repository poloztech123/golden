function sendEmail(){
    let email = document.getElementById('email').value;
let first_name = document.getElementById('first-name').value;
let last_name = document.getElementById('last-name').value;
let message = document.getElementById('message').value;
let form = document.getElementById('form');

emailjs.send("service_vi20xln","template_lapl8ip",{
    email,
    first_name,
    last_name,
    message
})
form.reset();
}

function sendVolunteerEmail(){}