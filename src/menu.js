const buttonMenu = document.querySelector('#buttonMenu');
const menu = document.querySelector('#menu');

buttonMenu.addEventListener('click', () => {
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});