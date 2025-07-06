const menuBtn = document.querySelector('.menu-button') as HTMLElement;
const menu = document.querySelector('.menu-container') as HTMLElement;
const overlay = document.querySelector('.menu-container .overlay') as HTMLElement;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (!menu.classList.contains('active')) {
    menu.classList.add('deactive');
    setTimeout(() => {
      menu.classList.remove('deactive');
    }, 1000);
  }
});
