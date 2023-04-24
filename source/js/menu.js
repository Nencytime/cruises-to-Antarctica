const INTERECTIVE_SELECTORS = ['a', 'button', 'input', 'textarea', '[tabindex]'];
const openButton = document.querySelector('.navigation__toggle');
const header = document.querySelector('.header');

class MenuWindow {
  constructor(doc, menu) {
    this.doc = doc;
    this.menu = menu;
    this.interactiveElementsList = [];
    this.blockElementsList = [];
  }

  create() {
    let elements = this.doc.querySelectorAll(INTERECTIVE_SELECTORS.toString());
    let element;
    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      if (!this.menu.contains(element)) {
        if (element.getAttribute('tabindex') !== '-1') {
          element.setAttribute('tabindex', '-1');
          this.interactiveElementsList.push(element);
        }
      }
    }

    /* let children = this.doc.header.children;
    for (let i = 0; i < children.length; i++) {
      element = children[i];
      if (!this.menu.contains(element)) {
        if (element.getAttribute('aria-hidden') !== 'true') {
          element.setAttribute('aria-hidden', 'true');
          this.blockElementsList.push(element);
        }
      }
    } */
  }

  remove() {
    let element;
    while (this.interactiveElementsList.length !== 0) {
      element = this.interactiveElementsList.pop();
      element.setAttribute('tabindex', '0');
    }

    while (this.interactiveElementsList.length !== 0) {
      element = this.interactiveElementsList.pop();
      element.setAttribute('aria-gidden', 'false');
    }
  }
}

/* const showPrompt = () => {
  const form = document.querySelector('.navigation');
  const container = document.querySelector('.header');
  const lastElem = form.elements[form.elements.length - 1];
  const firstElem = form.elements[0];

  lastElem = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
    return false;
  };

  firstElem = (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
      lastElem.focus();
      return;
    }
  };

  container.style.display = 'block';
};

openButton.onclick = () => {
  showPrompt();
}; */

const menu = new MenuWindow(document, header);

const menuControl = () => {
  const closeMenu = (event) => {
    const target = event.target;

    if (target === header || event.code === 'Escape' || target.closest('.navigation__link')) {
      header.classList.remove('is-open');
      menu.remove();
      document.body.classList.remove('scroll-lock');
    }
    document.removeEventListener('keydown', closeMenu);
  };

  const openMenu = () => {
    header.classList.remove('no-js');
    header.classList.toggle('is-open');
    menu.create();
    openButton.focus();
    document.body.classList.toggle('scroll-lock');
    document.addEventListener('keydown', closeMenu);
  };

  openButton.addEventListener('click', openMenu);
  header.addEventListener('click', closeMenu);
};

export {menuControl};
