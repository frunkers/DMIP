'use strict';

const $popup = document.querySelector('.popup');
const $btn = document.querySelector('.about__btn');

$popup.style.display = 'none';

$btn.addEventListener('click', (evt) => {
	evt.target.classList.add('active');

	if ($popup.style.display != 'flex') {
		$popup.style.display = 'flex';
	} else {
		$popup.style.display = 'none';
	}
});