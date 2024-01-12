const form = document.querySelector('.login-form');

form.addEventListener('submit', triggerFormSubmit);

function triggerFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert('All fields must be filled in.');
  }

  const userDetails = { email: email.value, password: password.value };
  console.log(userDetails);

  event.target.reset();
}