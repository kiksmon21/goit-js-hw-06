const inputValidation = document.querySelector('#validation-input')

inputValidation.addEventListener('blur', triggerInputBlur);

function triggerInputBlur(event) {
    const {
        target: { classList, dataset, value },
    } = event;

    if (parseInt(dataset.length) === value.length) {
        classList.add('valid');
        classList.remove('invalid');
      } else {
        classList.add('invalid');
        classList.remove('valid');
      }
}