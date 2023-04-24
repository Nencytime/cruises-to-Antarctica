const ymaps = window.ymaps;

const createMap = () => {
  ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
      center: [59.938631, 30.323037],
      zoom: 16,
    }, {
      searchControlProvider: 'yandex#search',
    });

    const myPlacemark = new ymaps.Placemark([59.937640428077046, 30.32269367724605], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/sprite/map-pin.svg',
      iconImageSize: [18, 22],
      // iconImageOffset: [18, 22],
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
};

export {createMap};
