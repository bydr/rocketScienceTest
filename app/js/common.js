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


    var chatWAdmin = $('.chat-with-admin');
    var chatWClient = $('.chat-with-client');


    $('.chat-with-admin .dr-btn__box').on('click', sendMessage('admin'));
    $('.chat-with-client .dr-btn__box').on('click', sendMessage('client'));

    function sendMessage(role) {
        let msg = $(this).closest('.chat-footer').find('.dr-input').val();
        var chatAvatar = "", chatClass = "";
        console.log(1)

        switch (role) {
            case 'admin':
                chatAvatar = "img/_src/Oval_2.png";
                chatClass = 'admin';
                break;
            case 'client':
                chatAvatar = "img/_src/Oval_2.1.png";
                chatClass = 'client';
                break;
        }

        if (msg) {
            $(this)
                .closest('.chat')
                .find('.custom-scroll_inner')
                .append(`
    <div class="chat-message ${chatClass}">
\t\t\t\t\t\t\t\t\t\t<div class="user">
\t\t\t\t\t\t\t\t\t\t\t<div class="user-avatar__wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="user-avatar" style="background-image:url(${chatAvatar});"></div>
\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="chat-message__content">
\t\t\t\t\t\t\t\t\t\t\t<p class="chat-message__text">
\t\t\t\t\t\t\t\t\t\t\t\t${msg}
\t\t\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t\t\t<p class="chat-message__date">
\t\t\t\t\t\t\t\t\t\t\t\tВчера в 17:45
\t\t\t\t\t\t\t\t\t\t\t</p>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>`);
        }
    }
});
