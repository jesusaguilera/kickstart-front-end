// From src to bg images
function from_src_to_bg(wrapper, imageWrapper, image) {
  const cardImageLength = $(wrapper).find('.card-image').length;
  const $cardImageWrapper = $(wrapper).find(imageWrapper);
  const $cardImage = $(wrapper).find(image);
  var cardImageSrc,
      i = 0;
  while (  i < cardImageLength ) {
    cardImageSrc = $cardImage[i].src;
    $cardImageWrapper.css( 'background-image', `url('${cardImageSrc}')` );
    i ++;
  }
}
// @From src to bg images


// Dropdowns 
function dropdowns() {

  // @Listing with links
  $('.dropdown-button').on('click', (button)=> {
    var isActive = $(button.target).hasClass('active'),
        $parent = $(button.target).parent(),
        $dropdownContent = $($parent).find('.dropdown-content'),
        $closeButton = $('.dropdown-content-header .close', $parent);

    $closeButton.on('click', ()=>{
      $(button.target).removeClass('active');    
      $($dropdownContent).removeClass('active');
    })

    if(isActive === true) {
      $(button.target).removeClass('active');    
      $($dropdownContent).removeClass('active');
    }else {
      $(button.target).addClass('active');
      $($dropdownContent).addClass('active');

      $('.dropdown-content-item-link', $parent).on('click', (link)=>{
        var linkText = $(link.target).text();
        $(button.target).text(linkText);
        $(button.target).removeClass('active');
        $($dropdownContent).removeClass('active');
      });
    }
  });
  // @Listing with links

  // Datepicker dropdown
  $('.dropdown #datepicker').on('click', (event)=> {
    var $button = $(event.target).siblings('.dropdown-button'),
        isActive = $button.hasClass('active');

    if(isActive){
      $("#datepicker").datepicker( "hide" );
      $button.removeClass('active');
    }else {
      $button.addClass('active');
      $("#datepicker").datepicker( "show" );
    }
  });
  // @Datepicker dropdown
}
// @Dropdowns 


// Modal
function modals() {
  $('.modal-trigger').on('click', (event)=>{
    var $buttonTrigger = $(event.target);
    var modalData = $(event.target).data('modal');
    var isActive = $(`.modal.${modalData}`).hasClass('active');

    if(isActive === true) {
      $('body').removeClass('modal');
      $(`.modal-wrapper.${modalData}`).removeClass('active');
    }else {
      $('body').addClass('modal');
      $(`.modal-wrapper.${modalData}`).addClass('active');
    }

    // Close modal
    // close by clicking on wrapper
    $('.modal-wrapper').on('click', (event)=> {
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
      var $parent = $(event.target).closest('.modal-wrapper');
      $($buttonTrigger).removeClass('active');
      $($parent).removeClass('active');
      $('.modal-backdrop').remove();
      isActive = false;
      var isActiveModal = $('body').find(".modal-wrapper.active").length;
      var isActiveMenu = $('body').find(".wrapper-menu.active").length;
      if(isActiveModal === 0 && isActiveMenu === 0 ) {
        $('body').removeClass('modal');
      }else {
        console.log('some modal active')
      }
    });
    // @Close modal
  });
}
// @Modal


// Datepicker spanish
function datepickerSpanish() {
  $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['es']);

  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
    showButtonPanel: false,
    inline: true,
    onClose: () =>{
      var $sibling = $('#datepicker').siblings();
      var isDropdown = $sibling.hasClass('dropdown-button');
      if(isDropdown) {
        $sibling.text($('#datepicker').val())
        $sibling.removeClass('active');
      }
    }
  });
}
// @Datepicker spanish
