/* ==========================================================================
   #SWUP
   ========================================================================== */
import scrollMagic from './scrollMagic';

const swup = () => {

  // OPTIONS
  const options = {
    animationSelector: '[class*="js-swup"]',
    // linkSelector: 'a[href^="' +  window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    containers: [".js-swup"],
    // plugins: [new SwupScriptsPlugin()],
  };

  let swup = new Swup(options);
  swup.on('contentReplaced', scrollMagic);
  // swup.on('willReplaceContent', ()=>{}   );

  // clean 
  // swup.on('willReplaceContent', ()=> console.log("willReplaceContent"));

  // this event runs for every page view after initial load
  // swup.on('contentReplaced', ()=> console.log("contentReplaced"));

}

export default swup;
