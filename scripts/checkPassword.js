const password = document.getElementById('password')
const rePassword = document.getElementById('ConfirmPassword')
const errPassword = document.getElementsByClassName('password__error')[0]
const errRePassword = document.getElementsByClassName('rePassword__error')[0]

password.addEventListener('input', () => {
    const passwordValue = password.value

    // Проверка пароля
    if (passwordValue.length < 8 || !/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
        errPassword.style.visibility = 'visible'
        return
    }
    if (passwordValue.length >= 8 && /[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
        errPassword.style.visibility = 'hidden'
        return
    }
})
rePassword.addEventListener('input', () => {
    const passwordValue = password.value
    const rePasswordValue = rePassword.value
    // Проверка на совпадение паролей
    passwordValue !== rePasswordValue ? errRePassword.style.visibility = 'visible' : errRePassword.style.visibility = 'hidden'
})
