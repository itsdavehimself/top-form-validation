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
});

function checkZip() {
  const constraints = {
    usa: [
      '^[0-9]{5}$',
      'U.S. ZIPs must have exactly 5 digits: e.g. 10001'
    ],

    pr: [
      '^[0-9]{5}$',
      'Puerto Rico ZIPs must have exactly 5 digits: e.g. 00600'
    ],

    ca: [
      '^[a-zA-Z]\\d[a-zA-Z]\\s[\\d][a-zA-Z][\\d]$',
      'Canada ZIPs must have 6 characters & a space: e.g. A0A 0A0'
    ],

    mx: [
      '^[0-9]{5}$',
      'Mexico ZIPs must have exactly 5 digits: e.g. 00810'
    ],

    pl: [
      '^[0-9]{2}[-][0-9]{3}$',
      'Poland ZIPs must have exactly 5 digits with a hyphen: e.g. 30-021'
    ],
  };

  const country = document.getElementById('country').value;

  const zipField = document.getElementById('zip');

  const zipError = document.getElementById('zip-error');

  const constraint = new RegExp(constraints[country][0], '');

  if (!constraint.test(zipField.value) && zipField.value.length > 0) {
    zipError.textContent = `${constraints[country][1]}`
    zipField.classList.add('error');
    return false;
  } else {
    zipError.textContent = '';
    zipField.classList.remove('error');
    return true;
  }
};

window.onload = () => {
  document.getElementById('country').onchange = checkZip;
  document.getElementById('zip').onchange = checkZip;
}