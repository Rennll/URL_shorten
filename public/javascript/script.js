const form = document.querySelector('.needs-validation')
const submitButton = document.querySelector('.needs-validation button')
const clipboard = new ClipboardJS('.btn-copy', {
  target (trigger) {
    // trigger 參數為觸發元素 Node
    return document.querySelector('#short-url')
  }
})

form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
})

submitButton.addEventListener('click', function onSubmitClicked (event) {
  form.classList.add('was-validated')
})
