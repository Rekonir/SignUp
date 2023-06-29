const btn = document.getElementsByClassName('registrationBtn')[0];
const firstName = document.getElementById('First Name');
const lastName = document.getElementById('Last Name');
const nationality = document.getElementById('Nationality');
const email = document.getElementById('E-mail');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

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

btn.addEventListener('click', () => {
    page.style.display = 'none';
    ty.style.display = 'flex';
    // const birthday = `${day.value}/${month.value}/${year.value}`
    const birthday = new Date(year.value, month.value - 1, day.value);
    if (firstName.value.length !== 0 && lastName.value.length !== 0 && nationality.value.length !== 0 && email.value.length !== 0) {
        if (password.value.length >= 8 && /[A-Z]/.test(password.value) && /[a-z]/.test(password.value) && /[0-9]/.test(password.value)) {
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
                    birthday: birthday,
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





