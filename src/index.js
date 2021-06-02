import menu from './menu.json'
import foodCardsTpl from './templates/food-cards.hbs'
import './styles.css';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createFoodCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createFoodCardsMarkup(menu) {
	return foodCardsTpl(menu);
}

// console.log(data);