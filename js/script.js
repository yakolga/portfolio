const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'), 
  close = document.querySelector('.menu__close');  

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

 const counters = document.querySelectorAll('.skills__ranking-elem-procent'),
    lines = document.querySelectorAll('.skills__ranking-elem-skale span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});