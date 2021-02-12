let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');

firstNameInput.addEventListener('change', () => {
  if (firstNameInput.value.match(/[^a-zA-Z']/)) {
    alert('invalid first name');
  }
});

lastNameInput.addEventListener('change', () => {
  if (lastNameInput.value.match(/[^a-zA-Z']/)) {
    alert('invalid last name');
  }
});

submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
});
