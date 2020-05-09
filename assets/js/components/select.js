/* ==========================================================================
   #SELECT
   ========================================================================== */

const select = () => {

  // Show select
  showSelect();
  // @Show select

  // Change button text
  changeButtonText();
  // @Change button text

}
export default select;


const showSelect = () => {

  let selectButtons = document.querySelectorAll('.js-toogle-select');

  [].forEach.call(selectButtons, button => {

    button.addEventListener('click', e => {

      e.stopPropagation();

      let button = e.target;
      let selectParent = button.closest('.c-select');

      selectParent.classList.toggle('is-active');

      bodyCloseSelect()

    })

  });

}

const changeButtonText = () => {

  let selectLinks = document.querySelectorAll('.js-select__link');

  [].forEach.call(selectLinks, link => {

    link.addEventListener('click', e => {

      e.stopPropagation();

      let link = e.target;
      let linkText = link.textContent;
      let select = link.closest('.c-select');
      let buttonParent = select.querySelector('.c-select__button');
      buttonParent.innerHTML = linkText;

    })

  });

}

const bodyCloseSelect = () => {

  let body = document.body;

  body.addEventListener('click', e => {

    let selectsOpen = document.querySelectorAll('.c-select.is-active')

    if(selectsOpen.length > 0){

      [].forEach.call(selectsOpen, select => {
        select.classList.remove('is-active');
      })

    }

  })

}

