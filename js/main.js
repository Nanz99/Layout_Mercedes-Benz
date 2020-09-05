$(document).ready(function () {
    var numToShow = 14;
    var list_1 = $(".channel__items");
    var button_1 = $("#loadMore");
    var list_2 = $(".popular__items");
    var button_2 = $("#loadMore-2");
    var list_3 = $(".video__items");
    var button_3 = $("#loadMore-3");

    var numInlist_1 = list_1.length;
    list_1.hide();
    if (numInlist_1 > numToShow) {
        button_1.show();
    }
    list_1.slice(0, numToShow + 4).show();

    button_1.click(function () {
        var showing = list_1.filter(':visible').length;
        list_1.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list_1.filter(':visible').length;
        if (nowShowing >= numInlist_1) {
            button_1.hide();
        }
    });


    var numInlist_2 = list_2.length;
    list_2.hide();
    if (numInlist_2 > numToShow) {
        button_2.show();
    }
    list_2.slice(0, numToShow + 4).show();

    button_2.click(function () {
        var showing = list_2.filter(':visible').length;
        list_2.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list_2.filter(':visible').length;
        if (nowShowing >= numInlist_2) {
            button_2.hide();
        }
    });

    var numInlist_3 = list_3.length;
    list_3.hide();
    if (numInlist_3 > numToShow) {
        button_3.show();
    }
    list_3.slice(0, numToShow + 4).show();

    button_3.click(function () {
        var showing = list_3.filter(':visible').length;
        list_3.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list_3.filter(':visible').length;
        if (nowShowing >= numInlist_3) {
            button_3.hide();
        }
    });
    // back to top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').fadeIn(600);
        } else {
            $('.scroll-top').fadeOut(600);
        }
    });
    $('.scroll-top').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});