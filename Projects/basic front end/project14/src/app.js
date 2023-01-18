const form = document.querySelector('#form-card');
form.addEventListener('submit', function (e) {
    checkEmpety(firstName, errorFristName)
    checkEmpety(lasttName, errorLastName)
    checkEmpety(emailAdress, errorEmail)
    checkEmpety(password, errorPassword)
    e.preventDefault();

})

const errorColor = "hsl(0, 100%, 74%)";
const colorInput = "hsl(246, 25%, 77%)";




const errorFristName = document.getElementById("error-first-name");
const errorLastName = document.getElementById("error-last-name");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");


const firstName = document.querySelector('#first-name');
const lasttName = document.querySelector('#last-name');
const emailAdress = document.querySelector('#email-adress');
const password = document.querySelector('#password');

function checkEmpety(e, error) {
    if (e.value === '') {
        error.style.display = 'block';
        e.style.borderColor = errorColor;
        e.classList.add('error-icon')
        e.style.borderWidth = 'medium';

        if (e.placeholder === 'Email Adress') {
            e.placeholder = 'email@exemple/com';
            e.classList.add('error-email');
        } else {
            e.placeholder = '';
        }

     

    } else {
        error.style.display = 'none';
        e.style.borderWidth = 'thin';
        e.style.borderColor = colorInput;

    }


}

