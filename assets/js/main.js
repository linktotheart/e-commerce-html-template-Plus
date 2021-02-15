$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("sticky");
        }
        else {
            $("header").removeClass("sticky");
        }
    });

    //////// search toggle bar 
    $('.search-toggler, .close-btn').click(function(){
        $('.search-container').toggleClass('active');
    })

    /// nav bar toggler icons 
    $('.navbar-toggler').click(function(){
        $('.mobile-menu').toggleClass('active');
        $(this).toggleClass('collapsed');
    })

    /////////login form 
    $('.sign-up-toggle').click(function(){
        $('#sign-up').show().siblings().hide();
    })
    $('.login-toggle').click(function(){
        $('#log-in').show().siblings().hide();
    })
    $('.forget-toggle').click(function(){
        $('#forget-password').show().siblings().hide();
    })
})

// owl carousel HOME PRODUCT SLIDER 
$('#product-slider').owlCarousel({
    loop:true,
    items: 1,
    margin:0,
    nav:false,
    dots: true,
    center: true,
    thumbs: true,
    thumbsPrerendered: true,
    responsive:{
        0:{
            dots: true
        },
        769:{
            dots: false
        },
        992:{
            items:1,
            dots: false
        }
    }
});

$(function() {
    $('a[href*=\\#]:not([href=\\#]):not(.nav-link)').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - 55)
            }, 500);
            return false;
        }
    });
});

$(document).ready(function(){
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        },
        duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                opacity = 1 - now;
                current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        },
        duration: 500
        });
    });
    
    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
        .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
});



$(".btn-submit").click(function() {

    //Fetch form to apply custom Bootstrap validation
    var form = $(".form-check")
    // console.log($('#fileInput')[0].files[0]);
    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.addClass('was-validated')
});

