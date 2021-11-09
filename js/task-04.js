const refs = {
    counter: document.querySelector('#counter'),
    value: counter.querySelector('#value'),
    incrementBtn: counter.querySelector('[data-action="increment"]'),
    decrementBtn: counter.querySelector('[data-action="decrement"]')
};

// console.log(refs.counter, refs.value, refs.incrementBtn, refs.decrementBtn);

let counterValue = 0;

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
   
})
refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
 })