let form = document.querySelectorAll('.js-form');
let inputContainers = document.querySelectorAll('.js-form__item');
let username = document.querySelector('.js-username');
let email = document.getElementById('js-email');
let checkbox = document.querySelector('.js-checkbox');
let regExEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const formValidation = () => {

  checkbox.addEventListener('change', () => fieldValidation('checkbox'));
  username.addEventListener('change', () => fieldValidation('username'));
  email.addEventListener('change', () => fieldValidation('email'));

};


const fieldValidation = (field) => {

    if(field === 'username') {

        if(username.value.trim() != '') {
            username.closest('.js-form__item').classList.remove('wrong');
            fieldValidation();
        }else {
            username.closest('.js-form__item').classList.add('wrong');
            submit.classList.add("disabled");
        }

    }else if(field === 'email') {

        if(regExEmail.test(email.value) && email.value.trim() != '') {
            email.closest('.js-form__item').classList.remove('wrong');
            fieldValidation();
        }else {
            email.closest('.js-form__item').classList.add('wrong'); 
            submit.classList.add("disabled");
        }

    }else if(field === 'checkbox') {

        if(checkbox.checked) {
            checkbox.closest('.js-form__item').classList.remove('wrong');
            fieldValidation();
        }else {
            checkbox.closest('.js-form__item').classList.add('wrong'); 
            submit.classList.add("disabled");
        }

    } else {

        if(username.value.trim() != '' && regEx.test(email.value) && email.value.trim() != '' && checkbox.checked) {
            submit.classList.remove("disabled");
        }
        else {
            console.log('Error!');
        }

    }
};

export default formValidation;
