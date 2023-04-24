import {createMap} from './map.js';
import {scroll} from './scroll.js';
import {menuControl} from './menu.js';
import {phoneValidate} from './form-validate.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  createMap();
  scroll();

  window.addEventListener('load', () => {
    menuControl();
    phoneValidate();
  });
});
