// Components
import swup from './components/swup';
import inputs from './components/input';
import select from './components/select';
import dropdown from './components/dropdown';
import modals from './components/modal';
import nav from './components/nav';
import scrollMagic from './components/scrollMagic';
// import lazyload from './components/lazyload';

// Utilities
import formValidation from './utilities/formValidation';
import changeTheme from './utilities/changeTheme';

window.onload = () => {

  // Components
  swup();
  nav();
  inputs();
  select();
  dropdown();
  modals();
  scrollMagic();
  // lazyload();
  //@Components
  
  // Utilities
  // formValidation();
  changeTheme();
  // @Utilities
  
}




