function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  output: document.querySelector('#boxes'),
}
// console.log(refs.output, refs.destroyBtn, refs.createBtn, refs.input);


refs.createBtn.addEventListener('click', () => {
  const quantityBoxes = refs.input.value; //введенное число
  console.log("~ quantityBoxes", quantityBoxes)

  const arrayBoxes = [];
  for (let i = 0; i < quantityBoxes; i += 1) {
    const box = document.createElement('div');
    
    const width = '30px';
    const height = '30px';
    box.style.width = width;
    box.style.height = height;

    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
  refs.output.append(...arrayBoxes);
  
});

