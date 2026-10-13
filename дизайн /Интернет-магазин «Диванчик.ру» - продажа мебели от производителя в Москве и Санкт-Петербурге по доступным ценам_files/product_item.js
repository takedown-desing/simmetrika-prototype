if ($('.accessory-block__slider').length) {

    var IsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);  
    var touchStart = 0;
    var touchEnd = 0;
    var IsIos = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);


    $('.accessory-block__slider').on('init', function(event, slick, direction) {
        // if (IsIos) {
            $('.accessory-block__slider .fancy-gallery').on('click', function() {  
                localStorage.setItem('pageP', $(window).scrollTop());              
                $('html').addClass('fancybox-lock-my');    
            });
        // } 
    });
    
    $('.accessory-block__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      // fade: true,
    });

    $(".accessory-block__slider-item:not(.video)").click(function(e){
        e.preventDefault();
        slideIndex = $(this).index();
        $('.accessory-block__slider').slick('slickGoTo', slideIndex);
    });
    
    if (IsIos) {
        $('html').addClass('ios');
    }

    function startHandler(event) {
        touchStart = event.touches[0].pageX;
        touchEnd = touchStart;
    }

    function moveHandler(event) {
        touchEnd = event.touches[0].pageX;
    }

    function endHandler() {
        setTimeout(function(){
            if(screen.width == window.innerWidth) {
                if(touchEnd > touchStart) {
                    $.fancybox.prev();
                }
                if(touchEnd < touchStart) {
                    $.fancybox.next();
                }        
            }
        }, 150);
    }

    $('.fancy-gallery').fancybox({
        openSpeed: 250,
        closeSpeed: 250,
        padding: 0,
        margin: 0,
        fitToView: true,
        autoScale: true,

        helpers: {
            overlay: {
                closeClick: false,
                locked: true,
                title: false
            },
        },

        tpl: {
            next: '<a class="fancybox-nav fancybox-next" href="javascript:;"><span style="background-color: rgb(255, 255, 255);"></span></a>',
            prev: '<a class="fancybox-nav fancybox-prev" href="javascript:;"><span style="background-color: rgb(255, 255, 255);"></span></a>',
            close:'<a class="fancybox-item fancybox-close" href="javascript:;" style="background-color: rgb(255, 255, 255);"></a>'
        },

        beforeClose: function() {
            // if (IsIos) {        
                $('html').removeClass('fancybox-lock-my');
                $(window).scrollTop(localStorage.getItem('pageP'));
                localStorage.setItem('pageP', 0);
                $('.accessory-block__slider').slick('refresh');
            // }
            if(IsMobile) {
                $(document).off("touchstart", startHandler);
                $(document).off("touchend", endHandler);
                $(document).off("touchmove", moveHandler);
            }
        },
        afterShow: function() {
            var $overlay = $('.fancybox-lock .fancybox-overlay');

            if(!$overlay.hasClass('has-custom-controls')) {

                $overlay.css('overflow', 'hidden').addClass('has-custom-controls');
                $overlay.find('.fancybox-wrap .fancybox-nav').appendTo($overlay);
                $overlay.find('.fancybox-wrap .fancybox-close').css('background-color', '#fff').appendTo($overlay);
                $overlay.find('.fancybox-nav span').css('background-color', '#fff');

            }

            if(IsMobile) {
                $(document).on("touchstart", startHandler);
                $(document).on("touchstart", function(event){
                    $(document).on('touchmove', moveHandler);
                });
                $(document).on("touchend", endHandler);
                $(document).on("touchend", function(event){
                    $(document).off('touchmove', moveHandler);
                });
            }

            $(window).on('orientationchange', function(){    
                $overlay.find('.fancybox-wrap, >a').css({
                    opacity: 0,
                    transition: 'none'
                });
                setTimeout($.fancybox.showLoading, 150);
                setTimeout(function() {
                    $.fancybox.hideLoading();
                    $overlay.find('.fancybox-wrap, >a').css({
                        opacity: 1,
                        transition: 'all 0.2s ease-in'
                    });
                }, 1800);  
            });
        },
        afterLoad: function (current) {
            var itemClass = $(this.element).attr('class');
            if (itemClass.indexOf('video') > 0) {
                $('.fancybox-wrap').addClass('fancybox-wrap--video');
            }
        }
    }); 

    $('.accessory-block__slider-nav .accessory-block__slider-item:not(.video)').eq(0).addClass('is-active');
    
    $('.accessory-block__slider-item:not(.video)').on('click', function(event) {
        event.preventDefault();
        $('.accessory-block__slider-item').removeClass('is-active');
        $(this).addClass('is-active');
    });


}

// цитаты
if ($('.c-review__slider').length) {
    $('.c-review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });
}
$(document).ready(function (){
    if($('.change-active[data-value="Y"]').length == 2){
        const url = new URL(location);
        url.searchParams.delete("showNotActiveElements");
        history.pushState({}, "", url);

    }
    $(document).on('click','.change-active',function(){
     
        $.ajax({
            method: "POST",
            url: "/local/templates/divanchik/ajax/changeActive.php",
            data: {
                id: $(this).attr('data-id'),
                currentActive: $(this).attr('data-value'),
                offers: $(this).attr('data-offers')
            }
        })
            .done(function() {


                const url = new URL(location);
                let name = url.searchParams.get("showNotActiveElements");
                if( name == null){
                    url.searchParams.set("showNotActiveElements", "Y");
                    history.pushState({}, "", url);
                }

                window.location.reload()

            });
    });
})