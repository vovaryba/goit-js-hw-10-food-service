import menu from './menu.json'
import foodCardsTpl from './templates/food-cards.hbs'
import './styles.css';


const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = foodCardsTpl(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-toggle');

currentTheme();

function currentTheme() {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === Theme.DARK) {
		themeSwitchChecked();
		return;
  	}
	notThemeSwitchChecked();
}

function notThemeSwitchChecked() {
	body.classList.remove(Theme.DARK);
	body.classList.add(Theme.LIGHT);
  	localStorage.setItem('theme', Theme.LIGHT);
}

function themeSwitchChecked() {
	themeSwitch.checked = true;
	body.classList.remove(Theme.LIGHT);
	body.classList.add(Theme.DARK);
  	localStorage.setItem('theme', Theme.DARK);
}


themeSwitch.addEventListener('change', onThemeSwitchClick);

function onThemeSwitchClick(evt) {
	evt.target.checked ? themeSwitchChecked() : notThemeSwitchChecked();
}