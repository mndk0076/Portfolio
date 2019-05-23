window.onload = function (){
    var $el = $("#header");
    let $nav = $("#nav");
    var bottom = $el.position().top + $el.outerHeight(true) -57;
    $(window).scroll(function() {
        if($(window).scrollTop() >= bottom) { 
            $("#nav").slideDown(1000); 
            $("#nav").css("display", "block"); 
            $("#nav").slideDown(1000);
        }else{
            $('#nav').hide(); 
        }
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 56
            }, 1000);
        }
    });    
   
    $(function() {
        $('#contact-form').on('submit', function(e) {
            var data = $("#contact-form :input").serialize();
            $.ajax({
                type: "POST",
                url: "../php/email.php",
                data: data,
                success: function(data){
                    alertify.success("Successfully Sent!");
                    $("#contact-form")[0].reset();
                },
                error: function (request, status, error) {
                    alertify.error("Something Went Wrong!");
                }
            });
            e.preventDefault();
        });
    });
}