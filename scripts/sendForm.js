const btn = document.getElementsByClassName('registrationBtn')[0];
const firstName = document.getElementById('First Name');
const lastName = document.getElementById('Last Name');
const nationality = document.getElementById('Nationality');
const email = document.getElementById('E-mail');
const day = document.getElementsByClassName('show-placeholder')[0];
const month = document.getElementsByClassName('show-placeholder')[1];
const year = document.getElementsByClassName('show-placeholder')[2];

const gender = document.getElementById('Gender');
// const password = document.getElementById('Password');
// const rePassword = document.getElementById('Re-Password');
// const errRePassword = document.getElementById('errRePassword');
// const errPassword = document.getElementById('errPassword');
const ty = document.getElementsByClassName("ty")[0];
const page = document.getElementsByClassName("page")[0];
let regForm = {
    firstName: "",
    lastName: "",
    nationality: "",
    email: "",
    birthday: "",
    gender: "",
    password: "",
};
let genderCheck = ''
console.log(day)

btn.addEventListener('click', () => {
    page.style.display = 'none';
    ty.style.display = 'flex';

    if (firstName.value.length !== 0 && lastName.value.length !== 0 && nationality.value.length !== 0 && email.value.length !== 0 && birthday.value.length !== 0) {
        if (passwordValue.length >= 8 && /[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
            if (password.value === rePassword.value) {
                for (var i = 0; i < gender.length; i++) {
                    if (gender[i].checked) {
                        genderCheck = gender[i].value
                    }
                }
                regForm = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    nationality: nationality.value,
                    email: email.value,
                    birthday: birthday.value,
                    gender: genderCheck,
                    password: password.value,
                };
                console.log(regForm);
                regForm = {
                    firstName: "",
                    lastName: "",
                    nationality: "",
                    email: "",
                    birthday: "",
                    gender: "",
                    password: "",
                };
                btn.style.display = "none";
            }
        }

    }
});





