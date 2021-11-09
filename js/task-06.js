const validationInput = document.querySelector('#validation-input');
// console.log(validationInput.value.length);

const validLength = validationInput.dataset.length;
// console.log(validLength);

//Можно применить ===, но тогда нужно сделать преобразование +validLength

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length == validLength) {
        validationInput.classList.remove('invalid')
        validationInput.classList.add('valid')
    } else {
        validationInput.classList.remove('valid')
        validationInput.classList.add('invalid')
    }
})
