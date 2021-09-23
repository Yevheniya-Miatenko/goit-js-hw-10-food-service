import './sass/main.scss';
import menuCardsTpl from './templates/menu-cards.hbs';
import menuData from './js/menu.json';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'currentTheme';
const listRef = document.querySelector('.js-menu');
const inputRef = document.querySelector('#theme-switch-toggle');

const setUserTheme = savedTheme => {
  if (!savedTheme) {
    document.body.classList.add(Theme.LIGHT);
  } else {
    document.body.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
      inputRef.checked = true;
    }
  }
};
setUserTheme(localStorage.getItem(STORAGE_KEY));

listRef.innerHTML = menuCardsTpl(menuData);

inputRef.addEventListener('change', event => {
  if (event.target.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
});