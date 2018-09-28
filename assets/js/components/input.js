const inputs = () => {
  $('input').on('blur', (event)=>{
    var $input = $(event.currentTarget);
    var inputValue = $input.val();
    var $inputParent = $input.closest('.form__item');

    if(inputValue === '') {
      $inputParent.removeClass('filled');
    }else {
      $inputParent.addClass('filled');
    }
  });
}

export default inputs;
