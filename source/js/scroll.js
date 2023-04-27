/* const anchors = document.querySelectorAll('a[href*="#"]');

const scroll = () => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};
 */

const scroll = () => {
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = link.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};

export {scroll};
