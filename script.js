//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});


// const search = document.getAnimations('searchBar');


const searchBar = document.querySelector('#searchBar');
const formEle = document.querySelector('form');

searchBar.addEventListener('keyup', itemSearch);

function itemSearch(e) {
  if (e.key === '/') {
    let item = e.target.value;

    let list = document.createElement('div');
    list.innerHTML = `<h3>${item}</h3>`;
    list.className = 'ingredient';
    formEle.appendChild(list)
    e.target.value = ' ';
  }
}