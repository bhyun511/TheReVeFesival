$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['section1','section2','section3','section4','section5','section6','section7','section8','section9','section10','section11','section12','section13'],
        autoScrolling:true,
        scrollhorizontally: true,
        navigation: true,
        navigationPosition: 'right'
    });

    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('showme');
        }
    });
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('showme');
        }
        if( bottom_of_window < bottom_of_object ){
            $(this).removeClass('showme');
        }
    });
});