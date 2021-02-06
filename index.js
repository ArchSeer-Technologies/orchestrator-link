$(function(){
  
    $('.form-control').each(function(){
      changeState($(this));
    });
    
    $('.form-control').on('focusout', function(){
      changeState($(this)); 
    });
    
    function changeState($formControl){
        if($formControl.val().length > 0){
        $formControl.addClass('has-value');
      }
      else{
        $formControl.removeClass('has-value');
      }  
    }
});

$(function(){
    $('i').on('click', function(){
        $(this).toggleClass('fa-eye-slash');
         const passwordInput = $(this).prev().prev()
        const t = passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type",t);
    });
});