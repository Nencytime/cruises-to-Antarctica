const card = document.querySelectorAll('.catalog__item');

const cardFocus = () => {
  card.forEach(function (item) {
    item.addEventListener('focus', function () {
      closeCard();
      item.classList.add('catalog__item--focused');
      item.querySelector('.card__button').focus();
    });
  });
};

const closeCard = () => {
  card.forEach(function (item) {
    if (item.classList.contains('catalog__item--focused')) {
      item.classList.remove('catalog__item--focused');
    }
  });
};

export {cardFocus};
