const vars = require('./vars');

var varOne = vars;

$(document).on('ready',function(){
  console.log(varOne.numOne + " This number is imported from another js file");
  console.log("main.js running :)");
});
