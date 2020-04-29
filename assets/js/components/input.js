const inputs = () => {

    let inputs = document.getElementsByTagName('input');

    [].forEach.call(inputs, (input) => {

        let $inputParent = input.closest('.form__item');

        input.addEventListener('blur', (event) => {

            event.target.value === '' ? $inputParent.classList.remove('filled') : $inputParent.classList.add('filled');

        })

    });
}
export default inputs;
