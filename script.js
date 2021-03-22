// HEADER SECTION
$(window).on('load', function (){
    $('.header-text').addClass('header-landing');
});

$(window).on('load', function (){
    $('.header-caption').addClass('header-landing');
});

$(window).on('load', function (){
    $('.card').addClass('header-landing');
});

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    // console.log(wScroll);

    // YOUR DREAMS SECTION
    if (wScroll > $('.main-content').offset().top - 470) {
        $('.main-content .img-content').each(function (i) {
            setTimeout(function () {
                $('.main-content .img-content').eq(i).addClass('landing');
            }, 500 * (i+1) );
        });
    } else {
        $('.main-content .img-content').removeClass('landing');
    }

    // OUR GOALS SECTION
    //  if (wScroll > $('.img-goals').offset().top - 1500 ) {
    //     $('.img-goals').addClass('img-landing');
    // } else {
    //     $('.img-goals').removeClass('img-landing');
    // }
})