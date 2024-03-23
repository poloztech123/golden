function sendEmail(){
    let email = document.getElementById('email').value;
let first_name = document.getElementById('first-name').value;
let last_name = document.getElementById('last-name').value;
let form = document.getElementById('form');

emailjs.send("service_brc1q5s","template_8wjruar",{
    email,
    first_name,
    last_name
})
form.reset();
}

function sendVolunteerEmail(){
    let volunteer_name = document.getElementById('volunteer-name').value;
    let volunteer_email = document.getElementById('volunteer-email').value;
    let volunteer_subject = document.getElementById('volunteer-subject').value;
    let volunteer_message = document.getElementById('volunteer-message').value;
    let form = document.getElementById('form');

    emailjs.send("service_brc1q5s","template_c6732fh",{
        volunteer_name,
        volunteer_subject,
        volunteer_message,
        volunteer_email,
        email,
})
form.reset();
}

