import { defaultCards } from './cards';

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../assets', true, /\.(png|svg|jpg|jpe?g|gif)$/));
requireAll(require.context('../assets', true, /\.(mp3)$/));

const defaultCardsContent = document.querySelector('.cards-content');

const defaultCardsFragment = document.createDocumentFragment();

defaultCards.forEach((card) => {
	const divElem = document.createElement('div');
	divElem.classList.add('default-card');
	const defaultCardElement = `
    <div class="card" style="width: 18rem;">
    <img src="${card.image}" class="card-img-top" alt="${card.title} image">
    <div class="card-body">
      <p class="card-text">${card.title}</p>
    </div>
  </div>
    `;
	divElem.innerHTML = defaultCardElement;
	defaultCardsFragment.appendChild(divElem);
});
defaultCardsContent.appendChild(defaultCardsFragment);
