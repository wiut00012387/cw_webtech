var elOpenModalButton = document.querySelector('.js-modal-open');
var elModal = document.querySelector('.js-modal');
var closeButton = document.querySelector('.exit-button');

elOpenModalButton.addEventListener('click', function () {
	elModal.classList.add('modal-open');
});

closeButton.addEventListener('click', function () {
	elModal.classList.remove('modal-open');
});

// FAQ section js

elsqaItem = document.querySelectorAll('.faq-list__item');
elsqaToggler = document.querySelectorAll('.faq-list__item__btn');

elsqaToggler.forEach(function (toggler) {
	toggler.addEventListener('click', function () {
		toggler.closest('.faq-list__item').classList.toggle('faq--open');
	});
});

// Hamburger code

const elHamburger = document.querySelector('.header__menu-button');
const elHeader = document.querySelector('.header');

elHamburger.addEventListener('click', () => {
	console.log('Pressed');
	elHeader.classList.toggle('header--active');
});
