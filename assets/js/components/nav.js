/* ==========================================================================
   #NAV
   ========================================================================== */

const nav = () => {

  let navLinks = document.querySelectorAll('.js-nav__link');

  [].forEach.call(navLinks, link => {

    link.addEventListener('click', e => {
      let navLinkActive = document.querySelector('.js-nav__link.is-active');
      navLinkActive.classList.remove('is-active');
      link.classList.add('is-active');
    })

  })

}

export default nav;

