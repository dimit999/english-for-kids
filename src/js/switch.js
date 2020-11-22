const checkbox = document.getElementById('checkbox');
const play = document.querySelector('.play');
const train = document.querySelector('.train');
const cardConditionItems = document.querySelectorAll('.condition');

// eslint-disable-next-line import/no-mutable-exports
let isTrain = true;

checkbox.addEventListener('change', () => {
	if (train.classList.contains('none')) {
		train.classList.remove('none');
		play.classList.toggle('none');
		isTrain = true;
		[...cardConditionItems].forEach((item) => {
			item.style = 'background-color: #FFBC29;';
		});
	} else {
		play.classList.remove('none');
		train.classList.toggle('none');
		isTrain = false;
		[...cardConditionItems].forEach((item) => {
			item.style = 'background-color: #7033FF;';
		});
	}
});

export default isTrain;
