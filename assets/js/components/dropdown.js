/* ==========================================================================
   #DROPDOWN
   ========================================================================== */

const dropdown = () => {

  // Listing with links
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
}

export default dropdown;
