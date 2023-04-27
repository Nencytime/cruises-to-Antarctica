import {createMap} from './map.js';
import {initScroll} from './scroll.js';
import {menuControl} from './menu.js';
import {phoneValidate} from './form-validate.js';
import {cardFocus} from './catalog.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  createMap();
  initScroll();

  window.addEventListener('load', () => {
    menuControl();
    phoneValidate();
    cardFocus();
  });
});
