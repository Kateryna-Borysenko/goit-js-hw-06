const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
// console.log(listRef);

const liRefs = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
});

// console.log(liRefs); 

listRef.append(...liRefs);