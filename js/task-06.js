const validationInput = document.querySelector('#validation-input');
// console.log(validationInput.value.length);

const validLength = validationInput.dataset.length;
// console.log(validLength);

//Можно применить ===, но тогда нужно сделать преобразование +validLength или Number()

validationInput.addEventListener('blur', () => {
    if (validationInput.value.length == validLength) {
        replaceClasses(validationInput, 'invalid', 'valid');

    } else {
        replaceClasses(validationInput, 'valid', 'invalid')
    }
})

function replaceClasses(obj, removeClass, addClass) {
    obj.classList.remove(removeClass);
    obj.classList.add(addClass);
}
