const form = document.querySelector('.needs-validation')

form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
  form.classList.add('was-validated')
})
