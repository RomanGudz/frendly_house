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


const swiper1 = new Swiper('.main-help__swiper', {

  direction: 'horizontal',
  loop: true,
  containerModifierClass: 'swiper-wrapper',
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
});

const swiper2 = new Swiper('.our-pets__swiper', {

  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.pets__swiper-button-next',
    prevEl: '.pets__swiper-button-prev',
  },
  containerModifierClass: 'swiper-wrapper'
});

const swiper3 = new Swiper('.main-help__swiper-two', {

  direction: 'horizontal',
  loop: true,
  containerModifierClass: 'swiper-wrapper',
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
});




function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.847927, 37.374884],
    zoom: 17
  });

  const mark = new ymaps.Placemark([55.847927, 37.374884], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/mark.svg',
    iconImageSize: [39, 59],
    iconImageOffset: [-19, -59]
  });

  mark.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageSize', [49, 75]);
      e.get('target').options.set('iconImageOffset', [-24, -75]);
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageSize', [39, 59]);
      e.get('target').options.set('iconImageOffset', [-19, -59]);
    });

  myMap.geoObjects.add(mark);
};


$(function () {
  $("#tabs").tabs({
    activate: function (event, ui) {
      $('.banner__tabs-list-item').removeClass('hidden-tab');
      console.log(ui);
      const activeTabId = ui.newTab.find('a').attr('href');
      $('a[href="' + activeTabId + '"]').closest('.banner__tabs-list-item').addClass('hidden-tab');
    }
  });

  const activeTabId = $("#tabs").tabs("option", "active");
  $('.banner__tabs-list-item').eq(activeTabId).addClass('hidden-tab');
});

ymaps.ready(init);


const form = $('.form-help__form')[0];
const modalForm = $('.form-help__form')[1];

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target;
  const data = {
    phone: value[0].value,
    email: value[1].value
  };
  $.ajax({
    "url": 'https://jsonplaceholder.typicode.com/posts',
    "method": 'post',
    "dataType": 'json',
    "data": JSON.stringify(data),
    success: function (data) {
      console.log(data);
      modalOverlay.classList.toggle('modal__overlay-visible');
    },
    error: function (exception) {
      console.log('exception: ', exception);

    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target;
  const data = {
    phone: value[0].value,
    email: value[1].value
  };
  $.ajax({
    "url": 'https://jsonplaceholder.typicode.com/posts',
    "method": 'post',
    "dataType": 'json',
    "data": JSON.stringify(data),
    success: function (data) {
      console.log(data);
    },
    error: function (exception) {
      console.log('exception: ', exception);

    }
  });
});