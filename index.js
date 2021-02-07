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

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
console.log(buttons.length)
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
