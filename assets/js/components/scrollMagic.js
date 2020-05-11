/* ==========================================================================
   #SCROLLMAGIC
   ========================================================================== */

const scrollMagic = () => {

  let controller = new ScrollMagic.Controller();
  let allWrappers = document.querySelectorAll('.js-scrollmagic');

  [].forEach.call(allWrappers, wrapper => {

    // create a scene with custom options and assign a handler to it.
    let scene = new ScrollMagic.Scene({
      triggerElement: wrapper,
      triggerHook: "0.4",
      reverse: true,
      // duration: 100,
      // offset: 200,
    })
      .addIndicators()
      .setClassToggle(wrapper, 'is-visible')
      .addTo(controller);
  });

}

export default scrollMagic;
