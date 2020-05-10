let inputContainers = document.querySelector('.js-form-item');
let input = document.querySelector('.js-form__input');
let email = document.querySelector('.js-form__email');
let checkbox = document.querySelector('.js-form__checkbox');
let submit = document.querySelector('.js-form__submit');
let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formValidation = () => {

  input.addEventListener('change', () => fieldValidation('input', input, email, regExEmail, checkbox, submit));
  email.addEventListener('change', () => fieldValidation('email', input, email, regExEmail, checkbox, submit));
  checkbox.addEventListener('change', () => fieldValidation('checkbox', input, email, regExEmail, checkbox, submit));

};
export default formValidation;

const fieldValidation = (field, input, email, regExEmail, checkbox, submit) => {

  if(field === 'input') {

    if(input.value.trim() != '') {
      input.closest('.js-form-item').classList.remove('o-form--wrong');
      if(regExEmail.test(email.value) && email.value.trim() != '' && checkbox.checked) {
        submit.classList.remove("o-form__submit--disabled");
      }
    }else {
      input.closest('.js-form-item').classList.add('o-form--wrong');
      submit.classList.add("o-form__submit--disabled");
    }

  }else if(field === 'email') {

    if(regExEmail.test(email.value) && email.value.trim() != '') {
      email.closest('.js-form-item').classList.remove('o-form--wrong');
      if(input.value.trim() != '' && checkbox.checked) {
        submit.classList.remove("o-form__submit--disabled");
      }
    }else {
      email.closest('.js-form-item').classList.add('o-form--wrong'); 
      submit.classList.add("o-form__submit--disabled");
    }

  }else if(field === 'checkbox') {

    if(checkbox.checked) {
      checkbox.closest('.js-form-item').classList.remove('o-form--wrong');
      if(input.value.trim() != '' && regExEmail.test(email.value) && email.value.trim() != '') {
        submit.classList.remove("o-form__submit--disabled");
      }
    }else {
      checkbox.closest('.js-form-item').classList.add('o-form--wrong'); 
      submit.classList.add("o-form__submit--disabled");
    }

  } else {

    console.log('fin');


  }

};

