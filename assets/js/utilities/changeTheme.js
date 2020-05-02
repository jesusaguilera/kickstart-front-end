const changeTheme = () => {

  let triggersTheme = document.querySelectorAll('.js-change-theme');

  if(!!triggersTheme) {

    [].forEach.call(triggersTheme, trigger => {

      trigger.addEventListener('click', e => {

        let trigger = e.target;
        let theme = trigger.getAttribute('data-theme');
        let body = document.body;
        let regEx = /^t-/i;

        body.matches('.t-dark') 
          ?
          trigger.innerHTML = 'Dark Theme'
          :
          trigger.innerHTML = 'Light Theme'

        body.classList.toggle(theme);

      })

    })

  }

}

export default changeTheme;

