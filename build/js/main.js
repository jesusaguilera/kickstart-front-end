!function(){function e(o,t,a){function r(s,c){if(!t[s]){if(!o[s]){var i="function"==typeof require&&require;if(!c&&i)return i(s,!0);if(n)return n(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[s]={exports:{}};o[s][0].call(d.exports,function(e){var t=o[s][1][e];return r(t||e)},d,d.exports,e,o,t,a)}return t[s].exports}for(var n="function"==typeof require&&require,s=0;s<a.length;s++)r(a[s]);return r}return e}()({1:[function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=e("./vars"),n=e("./objects/dropdown"),s=a(n),c=e("./objects/modal"),i=a(c);$(document).on("ready",function(){console.log(r.numOne+" This number is imported from another js file"),console.log("main.js running :)"),l(),(0,s["default"])(),(0,i["default"])()});var l=function(){alert("ES6 js running! :)")}},{"./objects/dropdown":2,"./objects/modal":3,"./vars":4}],2:[function(e,o,t){"use strict";var a=function(){$(".dropdown-button").on("click",function(e){var o=$(e.target).hasClass("active"),t=$(e.target).parent(),a=$(t).find(".dropdown-content"),r=$(".dropdown-content-header .close",t);r.on("click",function(){$(e.target).removeClass("active"),$(a).removeClass("active")}),o===!0?($(e.target).removeClass("active"),$(a).removeClass("active")):($(e.target).addClass("active"),$(a).addClass("active"),$(".dropdown-content-item-link",t).on("click",function(o){var t=$(o.target).text();$(e.target).text(t),$(e.target).removeClass("active"),$(a).removeClass("active")}))})};t.dropdown=a()},{}],3:[function(e,o,t){"use strict";var a=function(){$(".modal-trigger").on("click",function(e){var o=$(e.target),t=$(e.target).data("modal"),a=$(".modal."+t).hasClass("active");a===!0?($("body").removeClass("modal"),$(".wrapper-modal."+t).removeClass("active")):($("body").addClass("modal"),$(".wrapper-modal."+t).addClass("active")),$(".wrapper-modal").on("click",function(e){var t=$(e.target).closest(".modal-container").length,r=$(e.target);0===t&&($("body").removeClass("modal"),$(o).removeClass("active"),$(r).removeClass("active"),$("body").removeClass("modal"),a=!1)}),$(".modal-close").on("click",function(e){var t=$(e.target).closest(".wrapper-modal"),r=$("body").find(".wrapper-modal.active").length,n=$("body").find(".wrapper-menu.active").length;$(o).removeClass("active"),$(t).removeClass("active"),$(".modal-backdrop").remove(),a=!1,0===r&&0===n?$("body").removeClass("modal"):console.log("some active modal")})})};t.modal=a()},{}],4:[function(e,o,t){"use strict";t.numOne=10,t.numTwo=90},{}]},{},[1]);