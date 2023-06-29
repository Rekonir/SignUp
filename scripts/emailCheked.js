const emailInp = document.getElementById('E-mail')
const checkImg = document.getElementsByClassName('email__check')[0]
console.dir(checkImg)
emailInp.addEventListener('input', function () {
    const emailValue = emailInp.value;
    const isValidEmail = emailValue.includes('@') && emailValue.includes('.');

    if (!isValidEmail) {
        emailInp.style.borderBottom = '0.7px solid #FF2828'
        emailInp.style.color = '#FF2828';
        checkImg.style.display = 'none'

    } else {
        emailInp.style.border = 'none';
        emailInp.style.color = 'black';
        checkImg.style.display = 'block'

    }
});

emailInp.addEventListener('focus', function () {
    emailInp.style.borderBottom = '0.7px solid #FF2828';
});