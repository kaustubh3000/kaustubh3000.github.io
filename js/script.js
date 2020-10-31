$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $(".navbar-toggler").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            $(".navbar-collapse").collapse('hide');
            $('#navbar-button').children('span').removeClass('fa fa-times fa-lg');
            $('#navbar-button').children('span').addClass('navbar-toggler-icon');
        }
    });

    // In Firefox and Safari, the click event doesn't retain the focus
    // on the clicked button. Therefore, the blur event will not fire on
    // user clicking somewhere else in the page and the blur event handler
    // which is set up above will not be called.
    // Solution: force focus on the element that the click event fired on
    $(".navbar-toggler").click(function (event) {
        $(event.target).focus();
    });
});


$(document).ready(function (){
    $('#navbar-button').click(function (){
        if ($('#navbar-button').children('span').hasClass('navbar-toggler-icon')){
            $('#navbar-button').children('span').removeClass('navbar-toggler-icon');
            $('#navbar-button').children('span').addClass('fa fa-times fa-lg');
        }
        else if ($('#navbar-button').children('span').hasClass('fa fa-times fa-lg')){
            $('#navbar-button').children('span').removeClass('fa fa-times fa-lg');
            $('#navbar-button').children('span').addClass('navbar-toggler-icon');
        }
    });
});
