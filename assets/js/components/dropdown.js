/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const dropdown = () => {

  // Show dropdown
  showDropdown();
  // @Show dropdown

  // Change button text
  changeButtonText();
  // @Change button text

}
export default dropdown;


const showDropdown = () => {

  let dropdownButtons = document.querySelectorAll('.js-toogle-dropdown');

  [].forEach.call(dropdownButtons, (button) => {

    button.addEventListener('click', e => {

      e.stopPropagation();

      let button = e.target;
      let dropdownParent = button.closest('.c-dropdown');

      dropdownParent.classList.toggle('is-active');

      closeDropdown()

    })

  });

}

const changeButtonText = () => {

  let dropdownLinks = document.querySelectorAll('.js-dropdown__link');

  [].forEach.call(dropdownLinks, (link) => {

    link.addEventListener('click', e => {

      e.stopPropagation();

      let link = e.target;
      let linkText = link.textContent;
      let dropdown = link.closest('.c-dropdown');
      let buttonParent = dropdown.querySelector('.c-dropdown__button');
      buttonParent.innerHTML = linkText;

    })

  });

}

const closeDropdown = () => {

  let body = document.body;

  body.addEventListener('click', e => {

    let dropDownsOpen = document.querySelectorAll('.c-dropdown.is-active')

    if(dropDownsOpen.length > 0){

      [].forEach.call(dropDownsOpen, dropdown => {

        dropdown.classList.remove('is-active');

      })

    }

  })

}

