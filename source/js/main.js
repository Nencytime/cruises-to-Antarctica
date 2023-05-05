import {createMap} from './map.js';
import {initScroll} from './scroll.js';
import {menuControl} from './menu.js';
// import {phoneValidate} from './form-validate.js';
import {cardFocus} from './catalog.js';
import {onEventCalllback} from './tel-mask.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  createMap();
  initScroll();

  window.addEventListener('load', () => {
    menuControl();
    // phoneValidate();
    cardFocus();

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, onEventCalllback);
      }
    }
  });
});
