let companiesScreen = document.getElementsByClassName('companies'),
    inputContainers = document.getElementsByClassName('form__item'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    checkbox = document.getElementById('checkbox'),
    submit = document.getElementById('submit'),
    regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formValidation = () => {
    // Is companies screen
    if(companiesScreen.length > 0) {
        checkbox.addEventListener('change', () => fieldValidation('checkbox'));
        username.addEventListener('change', () => fieldValidation('username'));
        email.addEventListener('change', () => fieldValidation('email'));

    }else {
        console.log('No companies screen');
    }
}


const fieldValidation = (field) => {

    if(field === 'username') {
        if(username.value.trim() != '') {
            username.closest('.form__item--input').classList.remove('wrong') 
            fieldValidation();
        }else {
            username.closest('.form__item--input').classList.add('wrong') 
            submit.classList.add("disabled");
        }
    }else if(field === 'email') {
        if(regEx.test(email.value) && email.value.trim() != '') {
            email.closest('.form__item--input').classList.remove('wrong') 
            fieldValidation();
        }else {
            email.closest('.form__item--input').classList.add('wrong'); 
            submit.classList.add("disabled");
        }
    }else if(field === 'checkbox') {
        if(checkbox.checked) {
            checkbox.closest('.form__item--checkbox').classList.remove('wrong') 
            fieldValidation();
        }else {
            checkbox.closest('.form__item--checkbox').classList.add('wrong'); 
            submit.classList.add("disabled");
        }
    } else {
        if(username.value.trim() != '' && regEx.test(email.value) && email.value.trim() != '' && checkbox.checked) {
            submit.classList.remove("disabled");
        }
        else {
            console.log('error');
        }
    }
}
export default formValidation;
