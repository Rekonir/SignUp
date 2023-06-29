const btn = document.getElementsByClassName('registrationBtn')[0];
const firstName = document.getElementById('First Name');
const lastName = document.getElementById('Last Name');
const nationality = document.getElementById('Nationality');
const email = document.getElementById('E-mail');
const birthday = document.getElementById('Date');
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

btn.addEventListener('click', () => {
    page.style.display = 'none';
    ty.style.display = 'flex';

    if (errRePassword.style.visibility === 'hidden' && errPassword.style.visibility === 'hidden' && password.value.length !== 0 && rePassword.value.length !== 0 && firstName.value.length !== 0 && lastName.value.length !== 0 && nationality.value.length !== 0 && email.value.length !== 0 && birthday.value.length !== 0 && gender.value.length !== 0) {
        regForm = {
            firstName: firstName.value,
            lastName: lastName.value,
            nationality: nationality.value,
            email: email.value,
            birthday: birthday.value,
            gender: gender.value,
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
});





