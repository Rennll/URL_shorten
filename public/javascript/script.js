const form = document.querySelector('.needs-validation')
const submitButton = document.querySelector('.needs-validation button')

form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
})

submitButton.addEventListener('click', function onSubmitClicked (event) {
  form.classList.add('was-validated')
})
