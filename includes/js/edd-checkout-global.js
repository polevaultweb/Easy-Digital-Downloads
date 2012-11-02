jQuery(document).ready(function($) {
    // update state/province field on checkout page
    $('select[name=billing_country]').change(function() {
        if( $('select[name=billing_country]').val() == 'US') {
            $('#card_state_other').css('display', 'none');
            $('#card_state_us').css('display', '');
            $('#card_state_ca').css('display', 'none');
        } else if( $('select[name=billing_country]').val() == 'CA') {
            $('#card_state_other').css('display', 'none');
            $('#card_state_us').css('display', 'none');
            $('#card_state_ca').css('display', '');
        } else {
            $('#card_state_other').css('display', '');
            $('#card_state_us').css('display', 'none');
            $('#card_state_ca').css('display', 'none');
        }
    });

    $('body').on('click', '#edd_tax_opt_in', function() {
        if( $(this).attr('checked') )
            $('.edd_cart_tax_row').show();
        else
            $('.edd_cart_tax_row').hide();
    });

});
