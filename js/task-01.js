const categoriesList = document.querySelector('#categories')
const itemsList = [...categoriesList.children]

console.log('Number of categories: ', itemsList.length);

itemsList.forEach(element => {
    console.log('\nCategory:',element.firstElementChild.textContent);
    console.log(  'Elements:',element.lastElementChild.children.length);
});
