const phoneValidate = () => {
  const phone = document.querySelector('#form-phone');
  phone.onkeypress = (event) => {
    event = event || window.event;
    const message = document.querySelector('.form__message--letters');
    if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }
  };
};

const onEventCalllback = function (evt) {
  phoneValidate();
  const el = evt.target;
  const clearVal = el.dataset.phoneClear;
  const pattern = el.dataset.phonePattern;
  const matrixDef = '+7 (___) ___-__-__';
  const matrix = pattern ? pattern : matrixDef;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = evt.target.value.replace(/\D/g, '');
  if (clearVal !== 'false' && evt.type === 'blur') {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      evt.target.value = '';
      return;
    }
  }
  if (def.length >= val.length) {
    val = def;
  }
  evt.target.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } return i >= val.length ? '' : a;
  });

  const message = document.querySelector('.form__message--quantity');
  if (val.length > 1 && val.length < 11) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
};

export {onEventCalllback};
