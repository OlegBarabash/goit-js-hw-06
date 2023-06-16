const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemLi = []
ingredients.forEach(element => {
  const item = document.createElement('li')
  item.textContent = element
  item.classList.add('item')
  itemLi.push(item)
});

const ingrList = document.querySelector('#ingredients')
ingrList.append(...itemLi)