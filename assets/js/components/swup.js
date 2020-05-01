/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const swup = () => {

  // OPTIONS
  const options = {
    animationSelector: '[class*="o-page-transition-"]',
    // linkSelector: 'a[href^="' +  window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    containers: [".js-main"],
  };
  let swup = new Swup(options);

  // clean 
  // swup.on('willReplaceContent', ()=> console.log("willReplaceContent"));

  // this event runs for every page view after initial load
  // swup.on('contentReplaced', ()=> console.log("contentReplaced"));

}

export default swup;
