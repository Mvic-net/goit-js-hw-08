import throttle from 'lodash.throttle';

const refs = {
  getForm: document.querySelector('.feedback-form'),
  getEmail: document.querySelector('input'),
  getMess: document.querySelector('textarea'),
  getBth: document.querySelector('button'),
};

// refs.getForm.addEventListener('input', onInputChange);
refs.getForm.addEventListener('input', throttle(onInputChange, 500));
refs.getForm.addEventListener('submit', onSubmitForm);

getFormData();

function onInputChange(evt) {
  localStorage.setItem(
    'KEY',
    JSON.stringify({ email: refs.getEmail.value, mess: refs.getMess.value })
  );
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const formData = JSON.parse(localStorage.getItem('KEY'));

  if (refs.getEmail.value === '' || refs.getMess.value === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    console.log(formData);

    localStorage.removeItem('KEY');
    refs.getForm.reset();
  }
}

function getFormData() {
  const formData = JSON.parse(localStorage.getItem('KEY'));
  if (formData) {
    refs.getEmail.value = formData.email;
    refs.getMess.value = formData.mess;
  }
}
