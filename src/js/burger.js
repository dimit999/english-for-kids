const menu = document.querySelector('.burger-menu');
const menuButton = document.querySelector('.burger-menu_button');
const button = document.querySelector('.hamburger', '.hamburger__line');
const links = document.querySelectorAll('.burger-menu_link');
const overlay = document.querySelector('.burger-menu_overlay');
let label = false;

function rotateBurger() {
	if (!label) {
		button.style = 'transform: rotate(90deg);';
		label = true;
	} else {
		button.style = 'transform: rotate(180deg);';
		label = false;
	}
}

function toggleMenu() {
	menu.classList.toggle('burger-menu_active');

	if (menu.classList.contains('burger-menu_active')) {
		document.body.style = 'overflow: hidden';
	} else {
		document.body.style = 'overflow: visible';
	}
}

menuButton.addEventListener('click', (e) => {
	e.preventDefault();
	rotateBurger();
	toggleMenu();
});

menu.addEventListener('click', () => {
	button.style = 'z-index: 23;transform: rotate(270deg);';
});

overlay.addEventListener('click', (e) => {
	e.preventDefault();
	rotateBurger();
	button.style = 'z-index: 23;';
});

[...links].forEach((item) => {
	item.addEventListener('click', toggleMenu);
});

overlay.addEventListener('click', toggleMenu);
