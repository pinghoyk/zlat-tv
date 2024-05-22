document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.header__burger-menu');
  const headerMenu = document.querySelector('.header__menu');

  burgerMenu.addEventListener('click', function() {
    headerMenu.classList.toggle('header__menu--active');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger-menu');
  const navMenu = document.querySelector('.header__nav');

  burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  flatpickr('#datepicker', {
    dateFormat: 'd/m/Y',
    // Добавьте любые другие настройки здесь
  });
});



