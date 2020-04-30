/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const modal = () => {


  let triggerButtons = document.querySelectorAll('.c-modal__trigger');

  [].forEach.call(triggerButtons, triggerButton => {

    triggerButton.addEventListener('click', e => {

      let triggerButton = e.target;
      let triggerButtonData = triggerButton.getAttribute('data-modal');
      let modal = document.querySelector(`.c-modal.${triggerButtonData}`);
      let closeButton = modal.querySelector('.js-modal__close');
      let body = document.body;

      modal.classList.toggle('is-visible');
      body.classList.add('has-modal');

      closeButton.addEventListener('click', e => {
      
        modal.classList.remove('is-visible');
        body.classList.remove('has-modal');
      
      })

    })

  })



  /*
   * $('.c-modal__trigger').on('click', (event)=>{
   * 
   *   var $buttonTrigger = $(event.target);
   *   var modalData = $(event.target).data('modal');
   *   var isActive = $(`.modal.${modalData}`).hasClass('active');
   * 
   *   if(isActive === true) {
   *     $('body').removeClass('modal');
   *     $(`.c-modal.${modalData}`).removeClass('active');
   *   }else {
   *     $('body').addClass('modal');
   *     $(`.c-modal.${modalData}`).addClass('active');
   *   }
   * 
   * 
   *   // Close modal by clicking on wrapper
   *   $('.c-modal').on('click', (event)=> {
   *     var clickOutsideModalContainer = $(event.target).closest(".c-modal__container").length;
   *     var $parent = $(event.target);
   * 
   *     if ( clickOutsideModalContainer === 0) {
   *       $("body").removeClass("modal");
   *       $($buttonTrigger).removeClass('active');
   *       $($parent).removeClass('active');
   *       $('body').removeClass('modal');
   *       isActive = false;
   *     }
   *   })                                            
   * 
   * 
   *   // close by clicking on close button
   *   $('.modal-close').on('click', (event)=> {
   *     var $parent = $(event.target).closest('.wrapper-modal'),
   *         isActiveModal = $('body').find(".wrapper-modal.active").length,
   *         isActiveMenu = $('body').find(".wrapper-menu.active").length;
   * 
   *     $($buttonTrigger).removeClass('active');
   *     $($parent).removeClass('active');
   *     $('.modal-backdrop').remove();
   *     isActive = false;
   * 
   *     if(isActiveModal === 0 && isActiveMenu === 0 ) {
   *       $('body').removeClass('modal');
   *     }else {
   *       console.log('some active modal')
   *     }
   *   });
   *   
   * });
   */
}

export default modal;
