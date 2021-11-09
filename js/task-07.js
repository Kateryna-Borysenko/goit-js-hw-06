const fontSizeControler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControler.addEventListener('input', () => {
    const size = fontSizeControler.value;
    text.style.fontSize = `${size}px`;
})