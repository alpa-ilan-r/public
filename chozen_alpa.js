document.addEventListener('DOMContentLoaded', function () {
    console.info('chozen_alpa.js loaded');
}, false);
jQuery( document ).ready(function() {
    console.info('chozen_alpa.js loaded');
});

document.addEventListener('DOMContentLoaded', function () {
    if (document.location.href.includes('/checkout')) {
        var coupon_code_input = document.getElementById('coupon_code');
        coupon_code_input.addEventListener("keydown", (event) => {
            if (event.keyCode === 189 || event.keyCode === 109) {
                event.preventDefault();
            }
        });
        // coupon_code_input.addEventListener('blur', function() {
        //     coupon_code_input.value = coupon_code_input.value.replaceAll("-", "");
        // });
    }
}, false);