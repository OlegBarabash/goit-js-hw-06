const categoriesList = document.querySelector('#categories')

console.log('Number of categories: ', categoriesList.children.length);

const itemsList = [...categoriesList.children]
itemsList.forEach(element => {
    console.log('\nCategory:',element.querySelector('h2').textContent);
    console.log(  'Elements:',element.querySelector('ul').childElementCount);
});
