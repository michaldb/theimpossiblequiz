$(document).ready(function () {
    $("#btn-info").click(function () {
        $("#uitleg-jquery").slideToggle("slow");
    });

    //jQuery plugin
    $("#flip-container").flip();
    $("#flip-container").off(".flip");

    $("#secret-start").click(function () {
        $("#flip-container").flip(true, function () {
            $(".answer-list").animate({
                opacity: '1',
                height: '330px',
                width: '150px'
            });
        });
    });
    
    $("#flip-home").click(function () {
        $("#flip-container").flip(false, function () {
            $(".answer-list").animate({
                opacity: '0',
                height: '0'
            });
        });
    });
});