const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'), 
  close = document.querySelector('.menu__close');  

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

 const counters = document.querySelectorAll('.skills__ranking-elem-procent'),
    lines = document.querySelectorAll('.skills__ranking-elem-skale span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});

(function($) {
$(function() {
$('.overlay__modal__close').on('click', function() {
  $('.overlay, #thanks').fadeOut('slow');
});
});
})(jQuery);

function validateForms(form) {
  $(form).validate({
  rules: {
    name: {
      required: true, 
      minlength: 2
    }, 
    email: {
      required: true, 
      email: true
    },
    text: {
      required: false, 
    },
    privacypolicy: {
      required: true
    }
  },
  messages: {
    name: "Please, enter your name",
    email: "Please, enter your email", 
    privacypolicy: "Please, read the privacy policy"
  }
});
}

  validateForms ('#contactform');

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }
    
    $.ajax({
      type: "POST",
      url: "mailer/smart.php", 
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
});