const form = document.querySelector('.form__post');

const name = document.querySelector('#form-name');
let regex = /[0-9]/g;

name.oninput = () => {
  name.value = name.value.replace(regex, '');
};

const phoneValidate = () => {
  const phone = document.querySelector('#form-phone');
  phone.onkeypress = (event) => {
    event = event || window.event;
    if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {
      const errors = form.querySelectorAll('.error');

      for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
      }

      const error = document.createElement('div');
      error.className = 'error';
      error.style.color = 'red';
      error.style.backgroundColor = '#F9FBFD';
      error.style.padding = '5px';
      error.style.marginBottom = '10px';
      error.style.width = 'max-content';
      error.innerHTML = 'Поле должно содержать только цифры';
      phone.parentElement.insertBefore(error, phone);
      return false;
    }

    if (event.charCode && (event.charCode > 48 || event.charCode < 57)) {
      const error = document.querySelector('.error');
      error.remove();
    }

    return false;
  };
};

export {phoneValidate};
