const ymaps = window.ymaps;

const createMap = () => {
  ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
      center: [59.938631, 30.323037],
      zoom: 15.65,
    }, {
      searchControlProvider: 'yandex#search',
    });

    const myPlacemark = new ymaps.Placemark([59.93806382941526, 30.322137379110007], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/sprite/map-pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [9, 22],
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
};

export {createMap};

/* const ymaps = window.ymaps;

setTimeout(function () {
  let elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.0/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function createMap() {
  let myMap = new ymaps.Map('map', {center: [30.325, 59.935], zoom: 13});
  ymaps.geocode('Санкт-Петербург, ул. Невский проспект, 28').then(function (res) {
    let coord = res.geoObjects.get(0).geometry.getCoordinates();
    let myPlacemark = new ymaps.Placemark(coord);
    myMap.geoObjects.add(myPlacemark);
    myMap.setCenter(coord);
  });
} */

/* const yandexMapsScript = document.createElement('script');
const key = '6b492866-f739-4d69-9dbc-9ff50d70ea08';

yandexMapsScript.src = `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU`;

document.body.appendChild(yandexMapsScript);

yandexMapsScript.addEventListener('load', function () {
  window.dispatchEvent(new Event('mapWasLoaded'));
}); */


/* const createMap = () => {
  let myMap = new window.ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15,
  }, {
    searchControlProvider: 'yandex#search',
  });

  const myPlacemark = new window.ymaps.Placemark([59.938635, 30.323118], {
    hintContent: 'Круизы в Антарктику',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/sprite/map-pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects
      .add(myPlacemark);
};

export {createMap};
 */
