const btnMenu = document.querySelector('.navigate__button-menu');
const menuHeader = document.querySelector('.header__navigate');
const svgmenu = document.querySelector('.navigate__button-menu-svg');
const svgCloseMenu = document.querySelector('.navigate__button-menu-svg-close');

btnMenu.addEventListener('click', () => {
  menuHeader.classList.toggle('navigate__visually-hidden');
  menuHeader.classList.toggle('navigate__visible');
  svgmenu.classList.toggle('toggle-svg');
  svgCloseMenu.classList.toggle('toggle-svg');

});

const btnModalOpen = document.querySelectorAll('#btn-modal');
const btnModalClose = document.querySelector('.modal__btn-close');
const modalOverlay = document.querySelector('.modal-overlay');

btnModalOpen.forEach(elem => {
  elem.addEventListener('click', () => {
    modalOverlay.classList.toggle('modal__overlay-visible');
    btnModalClose.scrollIntoView({ behavior: 'smooth' });
  })
});

btnModalClose.addEventListener('click', () => {
  modalOverlay.classList.toggle('modal__overlay-visible');
})

modalOverlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === modalOverlay) {
    modalOverlay.classList.toggle('modal__overlay-visible');
  }
})

menuHeader.addEventListener('click', e => {
  const target = e.target;
  if (target.className === 'header__item-link') {
    menuHeader.classList.toggle('navigate__visually-hidden');
    menuHeader.classList.toggle('navigate__visible');
    svgmenu.classList.toggle('toggle-svg');
    svgCloseMenu.classList.toggle('toggle-svg');
  }
});

new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.pets__swiper-button-next',
    prevEl: '.pets__swiper-button-prev',
  },
  containerModifierClass: 'swiper-wrapper'
});

// $(function () {
//   $("#tabs").tabs();
// });

function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.723661504206355, 37.56504308465882],
    zoom: 17
  });

  const mark = new ymaps.Placemark([55.723661504206355, 37.56504308465882]);

  myMap.geoObjects.add(mark);
}

ymaps.ready(init);