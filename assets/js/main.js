import {numOne, numTwo} from './vars';

$(document).on('ready',function(){
  console.log(`${numTwo} This number is imported from another js file`);
  console.log("main.js running :)");
  testRunning();
});

var testRunning = () => {
  alert("ES6 js running! :)")
}
