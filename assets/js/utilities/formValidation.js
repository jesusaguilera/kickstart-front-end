let inputContainers = document.querySelector('.js-form-item');
let input = document.querySelector('.js-form__input');
let email = document.querySelector('.js-form__email');
let checkbox = document.querySelector('.js-form__checkbox');
let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let submit = document.querySelector('.js-form__submit');


const formValidation = () => {

  checkbox.addEventListener('change', () => fieldValidation('checkbox'));
  input.addEventListener('change', () => fieldValidation('input'));
  email.addEventListener('change', () => fieldValidation('email'));

};


const fieldValidation = (field) => {

    if(field === 'input') {

        if(input.value.trim() != '') {
            input.closest('.js-form-item').classList.remove('o-form--wrong');
            fieldValidation();
        }else {
            input.closest('.js-form-item').classList.add('o-form--wrong');
            submit.classList.add("o-form__submit--disabled");
        }

    }else if(field === 'email') {

        if(regExEmail.test(email.value) && email.value.trim() != '') {
            email.closest('.js-form-item').classList.remove('o-form--wrong');
            fieldValidation();
        }else {
            email.closest('.js-form-item').classList.add('o-form--wrong'); 
            submit.classList.add("o-form__submit--disabled");
        }

    }else if(field === 'checkbox') {

        if(checkbox.checked) {
            checkbox.closest('.js-form-item').classList.remove('o-form--wrong');
            fieldValidation();
        }else {
            checkbox.closest('.js-form-item').classList.add('o-form--wrong'); 
            submit.classList.add("o-form__submit--disabled");
        }

    } else {

        if(input.value.trim() != '' && regEx.test(email.value) && email.value.trim() != '' && checkbox.checked) {
            submit.classList.remove("o-form__submit--disabled");
        }
        else {
            console.log('Error!');
        }

    }
};

export default formValidation;
