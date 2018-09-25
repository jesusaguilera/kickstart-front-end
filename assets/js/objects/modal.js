/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const modal =  () => {

  $('.modal-trigger').on('click', (event)=>{

    var $buttonTrigger = $(event.target);
    var modalData = $(event.target).data('modal');
    var isActive = $(`.modal.${modalData}`).hasClass('active');

    if(isActive === true) {
      $('body').removeClass('modal');
      $(`.wrapper-modal.${modalData}`).removeClass('active');
    }else {
      $('body').addClass('modal');
      $(`.wrapper-modal.${modalData}`).addClass('active');
    }


    // Close modal by clicking on wrapper
    $('.wrapper-modal').on('click', (event)=> {
      var clickOutsideModalContainer = $(event.target).closest(".modal-container").length;
      var $parent = $(event.target);

      if ( clickOutsideModalContainer === 0) {
        $("body").removeClass("modal");
        $($buttonTrigger).removeClass('active');
        $($parent).removeClass('active');
        $('body').removeClass('modal');
        isActive = false;
      }
    })                                            


    // close by clicking on close button
    $('.modal-close').on('click', (event)=> {
      var $parent = $(event.target).closest('.wrapper-modal'),
          isActiveModal = $('body').find(".wrapper-modal.active").length,
          isActiveMenu = $('body').find(".wrapper-menu.active").length;

      $($buttonTrigger).removeClass('active');
      $($parent).removeClass('active');
      $('.modal-backdrop').remove();
      isActive = false;

      if(isActiveModal === 0 && isActiveMenu === 0 ) {
        $('body').removeClass('modal');
      }else {
        console.log('some active modal')
      }
    });
    
  });
}

exports.modal = modal();


/* Template
<button class="modal-trigger" data-modal="modal-buy">Open modal</button>

<div class="wrapper-modal modal-buy">
  <div class="modal-container modal-buy-container">
    <button type="button" class="modal-close"></button>
    <div class="modal-header">Modal header</div>
    <div class="modal-content">Modal content</div>
    <div class="modal-footer">Modal footer</div>
  </div>
</div>
 @Template */