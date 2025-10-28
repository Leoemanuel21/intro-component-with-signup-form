const firstName = document.querySelector('.firstName');
const errorFirstName = document.querySelector('.error-first-name');
const iconError1 = document.querySelector('.icon-error1');

const lastName = document.querySelector('.lastName');
const errorLastName = document.querySelector('.error-last-name');
const iconError2 = document.querySelector('.icon-error2');

const email = document.querySelector('.email');
const errorEmail = document.querySelector('.error-email');
const iconError3 = document.querySelector('.icon-error3');

const password = document.querySelector('.password');
const errorPassword = document.querySelector('.error-password');
const iconError4 = document.querySelector('.icon-error4');

let valueEmail;
let validarEmail;
let verificarEmail;

function verificacaoEmail(){
    valueEmail = email.value;
    validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.(com)$/i;
    return validarEmail.test(valueEmail);
}

function verificar(){
    /* Verifica se o usuário preecheu o campo First Name*/
    if(firstName.value.trim() === ''){
        errorFirstName.style.display = "block";
        iconError1.style.display = "block"
    }else{
        errorFirstName.style.display = "none";
        iconError1.style.display = "none"
    }
    
    /* Verifica se o usuário preecheu o campo Last Name*/
    if(lastName.value.trim() === ''){
        errorLastName.style.display = "block";
        iconError2.style.display = "block"
    }else{
        errorLastName.style.display = "none";
        iconError2.style.display = "none"
    }

    /* Verifica se o usuário preecheu o campo Email*/
    if(email.value.trim() === '' || !verificacaoEmail()){
        errorEmail.style.display = "block";
        iconError3.style.display = "block"
        email.value = '';
        email.placeholder = "email@example/com";
        email.classList.add('input-error');
    }else{
        errorEmail.style.display = "none";
        iconError3.style.display = "none"
        email.classList.remove('input-error');
    }

    /* Verifica se o usuário preecheu o campo Password*/
    if(password.value.trim() === ''){
        errorPassword.style.display = "block";
        iconError4.style.display = "block"
    }else{
        errorPassword.style.display = "none";
        iconError4.style.display = "none"
    }
}
