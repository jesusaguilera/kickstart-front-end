/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const dropdown = () => {

  // Show dropdown
  showDropdown();
  // @Show dropdown

}
export default dropdown;


const showDropdown = () => {

  let dropdownButtons = document.querySelectorAll('.js-toogle-dropdown');

  [].forEach.call(dropdownButtons, button => {

    button.addEventListener('click', e => {

      let button = e.target;
      let dropdownParent = button.closest('.c-dropdown');

      dropdownParent.classList.add('is-active');


      let dropdownLinks = document.querySelectorAll('.c-dropdown__link');

      [].forEach.call(dropdownLinks, dropdownLink => {

        dropdownLink.addEventListener('click', e => {

          dropdownParent.classList.remove('is-active');

        })

      })

    })

  });

}

