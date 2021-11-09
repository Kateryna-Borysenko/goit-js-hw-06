console.log('---Task-01---');
const categories = document.querySelector('#categories');
const categoryItems = categories.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

[...categoryItems].forEach(category => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
})
