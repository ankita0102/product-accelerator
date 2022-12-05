const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let password = document.getElementById('password'); 

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        password: password.value
    } 

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email Sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            password.value = ''; 
        } else {
           alert('Something went wrong!')  
        }
    } 

    xhr.send(JSON.stringify(formData)); 
}) 
