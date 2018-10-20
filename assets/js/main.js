// Components
import inputs from './components/input';
import cards from './components/cards';

// Utilities
import formValidation from './utilities/formValidation';

document.addEventListener("DOMContentLoaded", () => {
    // Components
    inputs();
    cards();

    // Utilities
    // Form validation
    formValidation();
});
