const checkbox = document.getElementById('checkbox');
const play = document.querySelector('.play');
const train = document.querySelector('.train');

// eslint-disable-next-line import/no-mutable-exports
let isTrain = true;

checkbox.addEventListener('change', () => {
	if (train.classList.contains('none')) {
		train.classList.remove('none');
		play.classList.toggle('none');
		isTrain = true;
	} else {
		play.classList.remove('none');
		train.classList.toggle('none');
		isTrain = false;
	}
});

export default isTrain;
