$(function() {

	// Custom JS
    $('.reviews-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: true,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $(document).ready(function(){
        resizeTools();
    });

    $(window).resize(function() {
        resizeTools();
    });

    function resizeTools(){
        $('.customscroll')
            .addClass('active-customscroll')
            .customScroll({
                prefix: 'custom-scroll_',

                /* vertical */
                barMinHeight: 10,
                offsetTop: 0,
                offsetBottom: 0,
                /* will be added to offsetBottom in case of horizontal scroll */
                trackWidth: 3,

                /* horizontal */
                barMinWidth: 10,
                offsetLeft: 0,
                offsetRight: 0,
                /* will be added to offsetRight in case of vertical scroll */
                trackHeight: 10,

                /* each bar will have custom-scroll_bar-x or y class */
                barHtml: '<div />',

                /* both vertical or horizontal bar can be disabled */
                vertical: true,
                horizontal: false
            });
    }
});
