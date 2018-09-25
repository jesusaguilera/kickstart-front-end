// Vars
import {numOne, numTwo} from './vars';


// Objects
import dropdown from './objects/dropdown';
import modal from './objects/modal';


$(document).on('ready',function(){

  // Testing
  console.log(`${numOne} This number is imported from another js file`);
  console.log("main.js running :)");
  testRunning();


  // Objects
  dropdown();
  modal();

});

var testRunning = () => {
  alert("ES6 js running! :)")
}
