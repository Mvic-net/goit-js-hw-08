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

function onInputChange(evt) {
  localStorage.setItem(
    'KEY',
    JSON.stringify({ email: refs.getEmail.value, mess: refs.getMess.value })
  );
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const formkData = JSON.parse(localStorage.getItem('KEY'));
  console.log(formkData);

  localStorage.removeItem('KEY');
  refs.getForm.reset();
}
