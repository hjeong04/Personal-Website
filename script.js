$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");    
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
        $('html').css("scrollBehavior", "smooth");
    })
    
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.btn-work').click(function(){
        $('.workText').removeClass("disabled");
        $('.volunteerText').removeClass("enabled");
        $('.btn-work').removeClass("disabled");
        $('.btn-volunteer').removeClass("enabled");
    });

    $('.btn-volunteer').click(function(){
        $('.workText').addClass("disabled");
        $('.volunteerText').addClass("enabled");
        $('.btn-work').addClass("disabled");
        $('.btn-volunteer').addClass("enabled");
    })


    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    })

});
