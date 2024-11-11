require(['jquery', 'owlcarousel'], function($){
    $(document).ready(function() {
        var $div = $('.products-gallery-images');
        var owl;
        $div.on('scroll', function () {
            var scrollHeight = $div[0].scrollHeight;
            var scrollTop = $div.scrollTop();
            var divHeight = $div.outerHeight();

            if (scrollTop + divHeight >= scrollHeight) {
                $('body.catalog-product-view').css({'overflow': 'auto'});
                $div.off('scroll');
            }
        });

        $('.block-search .label').click(function () {
            $('#search_mini_form').addClass('active');
        })

        var isMobile = window.matchMedia('(max-width: 768px)');
        
        if (isMobile.matches) {           
            owl =  $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                items:1
            });
        }

        isMobile.addListener(function(e) {
            if (e.matches) {
                owl =  $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:false,
                    items:1
                });
            } else {
                if ($('.owl-carousel').hasClass('owl-loaded')) {
                    // Destroy the carousel if it's initialized
                    owl.trigger('destroy.owl.carousel');
                }
            }
        });
    });
});