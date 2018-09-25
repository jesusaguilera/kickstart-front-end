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

exports.dropdown = dropdown();



/* Template

<div className="wrapper-dropdown">
 <div className="dropdown">
  <button type="button" className="dropdown-button">Selecciona una cantidad</button>
  <ul className="dropdown-content">
    <li className='dropdown-content-item hide-lg-and-up'><p className='title medium dropdown-content-item-link'>Selecciona una cantidad</p></li>
    <li className="dropdown-content-item"><a className="dropdown-content-item-link">0</a></li>   
    <li className="dropdown-content-item"><a className="dropdown-content-item-link">1</a></li>   
    <li className="dropdown-content-item"><a className="dropdown-content-item-link">2</a></li>   
  </ul>
 </div>
</div>

@Template */
