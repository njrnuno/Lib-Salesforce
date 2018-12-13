//botao subir
$(document).ready(function(){
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//menu mobile
$(document).ready(function($) {
    $("#menumobile").click(function(event) {
        $(".bg-menu-lateral").toggleClass('bg-menu-lateral-ativo');
    });

    $('.codigo a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

});

//teste
// var conteudo = document.getElementById('introducao');

// $(document).ready(function($) {
//     $(conteudo).fadeOut('slow', function() {
//         $(this).animate ({
//             fadeIn ('slow')
//         }, 800);
//         return false;
//     });
// });



