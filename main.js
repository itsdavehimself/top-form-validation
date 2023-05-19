const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const passwordRegEx = new RegExp ('(?=.*)(?=.*[!@#$%?=*&]).{6,}');
const passConfirm = document.getElementById('confirm-password');
const confirmError = document.getElementById('confirmation-error');

email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address'
  } else {
    emailError.textContent = '';
  }
});

password.addEventListener('input', (e) => {
  if (!passwordRegEx.test(password.value) && password.value.length > 0) {
    passwordError.textContent = 'Must be at least 6 characters & contain a special character'
    password.classList.add('error');
  } else {
    passwordError.textContent = '';
    password.classList.remove('error');
  }
});

passConfirm.addEventListener('input', (e) => {
  if (password.value !== passConfirm.value && passConfirm.value.length > 0) {
    confirmError.textContent = 'Passwords do not match';
    passConfirm.classList.add('error');
  } else {
    confirmError.textContent = '';
    passConfirm.classList.remove('error');
  }
})