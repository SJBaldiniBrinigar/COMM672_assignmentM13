/* Back To Top Scroll Funciton */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    })
})

/*Accordion Function*/
$(document).ready(function() {
    $('.accordion-header').click(function() {
        if ($(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideUp();
        } else {
            $('.accordion-content').slideUp();
            $(this).next('.accordion-content').slideDown();
        }
    });
})

/* Modal Function */
$(document).ready(function() {
    //Open Modal
    $('.open-modal-btn').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    //Close Modal
    $('.close').click(function() {
        $(this).closest('.modal').hide();
    })
})