require(['jquery'], function ($) {
    $(document).ready(function () {
        setTimeout(() => {
            if (jQuery('.product-info-main .product-options-wrapper').length) {
                // Find the first swatch and click it to set it as default
                const firstSwatch = jQuery('.swatch-option.image').first();
                if (firstSwatch.length) {
                    firstSwatch.trigger('click');
                }

                const firstSwatchtext = jQuery('.swatch-option.text').first();
                if (firstSwatchtext.length) {
                    firstSwatchtext.trigger('click');
                }
            }
        }, "1000");
    });
});