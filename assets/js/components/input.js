const inputs = () => {

  let inputs = document.querySelectorAll('.js-form__input');

  [].forEach.call(inputs, (input) => {

    let inputParent = input.closest('.o-form-item');
    let label = inputParent.querySelector('.o-form__label');

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
