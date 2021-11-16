function hideCookies() {
    var hideCookie = Cookies.get('hideCookie');

    if (hideCookie !== undefined) {
        $('.cookie-info').css('display','none');
        $('.title h1').html('<span>Cookie</span> info panel (is hidden)');
    } else {
        $('.cookie-info').css('display','block');
    }
}


$(document).ready(function () {
    $('.cookie-accept').bind('click', function() {
        Cookies.set('hideCookie', 'true', { expires: 365 });
        $('.cookie-info').fadeOut('slow');
    });

});

$(window).load(function () {
    hideCookies();
});
