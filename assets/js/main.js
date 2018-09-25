// Vars
import {numOne, numTwo} from './vars';


// Objects
import dropdown from './objects/dropdown';


$(document).on('ready',function(){
  console.log(`${numOne} This number is imported from another js file`);
  console.log("main.js running :)");
  testRunning();
  dropdown();
});

var testRunning = () => {
  alert("ES6 js running! :)")
}
