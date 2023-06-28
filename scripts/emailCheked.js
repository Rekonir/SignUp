const emailInp = document.getElementById('E-mail')
emailInp.addEventListener('input', function () {
    const emailValue = emailInp.value;
    const isValidEmail = emailValue.includes('@') && emailValue.includes('.');

    if (!isValidEmail) {
        emailInp.style.borderBottom = '0.7px solid #FF2828'
        emailInp.style.color = '#FF2828';
    } else {
        emailInp.style.border = 'none';
        emailInp.style.color = 'black';

    }
});

emailInp.addEventListener('focus', function () {
    emailInp.style.borderBottom = '0.7px solid #FF2828';
});