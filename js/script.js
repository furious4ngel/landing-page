const outerCtnr = document.querySelector('.small-screen-nav div.outer');
const innerCtnr = document.querySelector('.small-screen-nav div.inner1');
const openNavBtn = document.querySelector('#open-nav-btn');
const closeNavBtn = document.querySelector('#close-nav-btn');

openNavBtn.addEventListener('click', (e) => {
  outerCtnr.classList.add('open-nav');
  innerCtnr.classList.add('slide');
  e.currentTarget.disabled = true;
});

closeNavBtn.addEventListener('click', () => {
  outerCtnr.classList.remove('open-nav');
  innerCtnr.classList.remove('slide');
  openNavBtn.disabled = false;
});