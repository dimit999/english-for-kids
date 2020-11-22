import { defaultCards, groupCards, cardsData } from './cards';

const defaultCardsData = defaultCards;
const groupCardsData = groupCards;
const cardsDataData = cardsData;

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../assets', true, /\.(png|svg|jpg|jpe?g|gif)$/));
requireAll(require.context('../assets', true, /\.(mp3)$/));

// Render Default cards on the Main page
const defaultCardsContent = document.querySelector('.cards-content');
const defaultCardsFragment = document.createDocumentFragment();

defaultCardsData.forEach((card) => {
	const divElem = document.createElement('div');
	divElem.classList.add('default-card', 'item-card');
	const defaultCardElement = `
    <div class="card" style="width: 18rem;">
      <img src="${card.image}" class="card-img-top" alt="${card.title} image">
      <div class="card-condition-wrapper">
        <div class="card-body">
          <p class="card-text">${card.title}</p>
        </div>
        <div class="condition"></div>
      </div>
    </div>
    `;
	divElem.innerHTML = defaultCardElement;
	defaultCardsFragment.appendChild(divElem);
});
defaultCardsContent.appendChild(defaultCardsFragment);

// Render internal group of cards
const itemCards = document.querySelectorAll('.item-card');

function renderInternalCards({ target }) {
	const imageGroup = target.alt ? target.alt.replace(' image', '') : target.innerText;
	const indexCard = groupCardsData.indexOf(imageGroup);
	cardsDataData[indexCard].forEach((card) => {
		defaultCardsContent.innerHTML = '';
		const divElem = document.createElement('div');
		divElem.classList.add('default-card', 'item-card', 'audio-card');
		const defaultCardElement = `
      <div class="card card-audio ${imageGroup.replace(/\s/g, '-')}" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="${card.word} image">
        <div class="card-condition-wrapper">
          <div class="card-body">
            <p class="card-text" style="font-weight: bold;">${card.word[0].toLocaleUpperCase() + card.word.slice(1)}</p>
          </div>
          <div class="small-panel">
            <div class="roll-button"><img src="assets/images/svg/arrow.svg" alt="" class="arrow"></div>
            <div class="condition"></div>
          </div>
        </div>
      </div>
      `;
		divElem.innerHTML = defaultCardElement;
		defaultCardsFragment.appendChild(divElem);
	});
	defaultCardsContent.appendChild(defaultCardsFragment);
}

[...itemCards].forEach((item) => {
	item.addEventListener('click', renderInternalCards);
});

// Say words from cards
const audioItemCards = document.querySelectorAll('.cards');

function sayWord({ target }) {
	if (target.parentNode.classList.contains('card-audio')) {
		const nameOfCardGroup = target.parentNode.classList.value.split(' ').slice(-1);
		const indexCard = groupCardsData.indexOf(nameOfCardGroup[0].replace(/-/g, ' '));
		cardsDataData[indexCard].forEach((card) => {
			if (card.word == target.alt.replace(' image', '') || card.word == target.innerText) {
				const audio = new Audio();
				audio.src = card.audioSrc;
				audio.play();
			}
		});
	}
}

[...audioItemCards].forEach((item) => {
	item.addEventListener('click', sayWord);
});
