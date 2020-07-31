// GOOGLE ANALYTICS
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-173249065-1');

// SMOOTH SCROLL EFFECT
$(function () {
  $.scrollIt({
    easing: 'linear',
    scrollTime: 500,
    activeClass: 'active',
    onPageChange: null,
  });
});

// MOBILE NAVIGATION
$(function () {
  $('#toggler').click(function () {
    if ($(this).is(':checked')) {
      $('.mobile__nav').animate({ right: '0' }, 400);
    } else {
      $('.mobile__nav').animate({ right: '-50%' }, 400);
    }
  });
});

// FORM SUBMISSION
$(function(){
    $(document).on('click', '[name="submit"]', function(){
        $.ajax({
            url: '/contact.php',
            type: 'post',
            data: $('[method="POST"]').serialize(),
            success: function(){
                $(".form__alert").fadeIn();
                setTimeout(function(){
                    $(".form__alert").fadeOut();    
                }, 5000);
                $('[name="submit"]').attr('disabled','disabled');
            },
            error: function(){
                $('[name="name"]').focus();
            }
        })
        return false;
    })
});

// COPYRIGHT YEAR
$(function () {
  document.getElementById('current__year').innerHTML = new Date().getFullYear();
});