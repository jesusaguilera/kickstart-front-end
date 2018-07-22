// Check scrolling direction
function scrollingDirection(lastScrollTop) {
  var headerHeight = $('.header').outerHeight();
  $(window).scroll(function(event){
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop && lastScrollTop > headerHeight){
      // downscroll code
      $('body').addClass('scrolling-down');
      $('.header').addClass('hide');
      $('.post-header').addClass('fixed');
    } else {
      // upscroll code
      $('body').removeClass('scrolling-down');
      $('.header').removeClass('hide');
      $('.post-header').removeClass('fixed');
    }
    lastScrollTop = currentScrollTop;
  });
}
// @Check scrolling direction


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
  $('.dropdown-button').on('click', (event)=> {
    var isActive = $(event.target).hasClass('active');
    var $parent = $(event.target).parent();
    var $dropdownList = $($parent).find('.dropdown-list');
    if(isActive === true) {
      $(event.target).removeClass('active');    
      $($dropdownList).slideUp({duration: 300, easeing:'easeOutQuart'});
    }else {
      $(event.target).addClass('active');
      $($dropdownList).slideDown({duration: 300, easeing:'easeOutQuart'});
    }
  });
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

    $('.modal-close').on('click', (event)=> {
      var $parent = $(event.target).closest('.modal-wrapper');
      $($buttonTrigger).removeClass('active');
      $($parent).removeClass('active');
    });
  });

}
// @Modal
;

$(document).on('ready',function(){
  scrollingDirection();
  console.log(varOne + " This number is imported from another js file");
  console.log("main.js running :)");
});



// Sticky element
// params: initFixContainer, rightPostParent, finishFixContainer, elementFixed, initMargin, finishMargin
fixingElem('.wrapper.main-section', '.wrapper.info .container', '.wrapper.info', '.wrapper-float-content', '24px', '104px');
// @Sticky element
