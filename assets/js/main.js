 
  $(document).ready(function(){
    $('#accordion .head').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.arrow').toggleClass('arrow-animate');
        $(this).parent().find('.content').slideToggle(280);

        if ($('#accordion .head.active').length > 1) {
            $('#accordion .head').not(this).removeClass('active')
            $('#accordion .head').not(this).parent().find('.arrow').removeClass('arrow-animate');
            $('#accordion .head').not(this).parent().find('.content').slideUp(280);
        }
        
    });
  });

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        arrows: false,
        autoplay: true
    } ).mount();
} );

