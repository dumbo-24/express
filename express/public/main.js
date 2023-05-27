const form = document.getElementById('contact')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
      name : name,
      email: email,
      message: message
    }

    localStorage.setItem('formData', JSON.stringify(formData));
})
