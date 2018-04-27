var vars = require('./vars');

var varOne = vars.numOne;

$(document).on('ready',function(){
  console.log(varOne + " This number is imported from another js file");
  console.log("main.js running :)");
});
