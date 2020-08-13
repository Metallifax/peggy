$(document).ready(function () {
    $('.jumbotron').hide()
        .fadeIn('slow');
    $('.row').hide()
        .fadeIn('slow');
    $('#navigation').hide().fadeIn('slow');

    $('#hide-card').click(() => {
        $('#warning-card').slideUp('fast');
    });
});