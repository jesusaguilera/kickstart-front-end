const inputs = () => {

  let inputs = document.querySelectorAll('.js-form__input');

  [].forEach.call(inputs, (input) => {

    let inputParent = input.closest('.js-form-item');
    let label = inputParent.querySelector('.js-form__label');

    input.addEventListener('blur', (event) => {

      event.target.value === '' 
        ? 
        label.classList.remove('o-form__label--top') 
        : 
        label.classList.add('o-form__label--top')

    })

  });
}
export default inputs;
