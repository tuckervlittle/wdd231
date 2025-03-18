const hambutton = document.querySelector('#hambutton');
const navimenu = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
  navimenu.classList.toggle('open');
  hambutton.classList.toggle('open');
});