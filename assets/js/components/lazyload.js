/* ==========================================================================
   #LAZYLOAD
   ========================================================================== */

const lazyload = () => {

  let myLazyLoad = new LazyLoad({
    threshold: 0,
    elements_selector: ".js-lazyload",
    // class_loading: 'js-lazyload--loading',
    // class_loaded: 'js-lazyload--loaded',
    // show_while_loading: false,
    // callback_loaded: () => alert(1),
    // load_delay: 3000 //adjust according to use case
  });
  
}

export default lazyload;
