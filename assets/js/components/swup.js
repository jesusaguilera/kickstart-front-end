/* ==========================================================================
   #SWUP
   ========================================================================== */
import scrollMagic from './scrollMagic';

const swup = () => {

  // OPTIONS
  const options = {
    animationSelector: '[class*="o-page-transition-"]',
    // linkSelector: 'a[href^="' +  window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    containers: [".js-main"],
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
