$(function() {

    // ------------------------------------------------------- //
    // Preloader 
    // ------------------------------------------------------- //

    $('.preloader-container').addClass('is-hidden');

    // ------------------------------------------------------- //
    // Tooltip
    // ------------------------------------------------------- //
    $('[data-toggle=tooltip]').tooltip();
    
    // ------------------------------------------------------- //
    // Navbar Toggler Button (Hamburger Menu)
    // ------------------------------------------------------- //
    $('.header .navbar-toggler').on('click', function(e) {
        $(this).toggleClass('active');
        // e.preventDefault();
    });

    // ------------------------------------------------------- //
    // Navbar Collapse when Click on link 
    // ------------------------------------------------------- //
    $(document).ready(function() {
        $(".navbar-nav li a:not(.dropdown-toggle)").click(function(e) {
            $(".navbar-collapse").collapse('hide');
            $(".navbar-toggler").removeClass('active');
        });
    });

    // ------------------------------------------------------- //
    // Navbar Sticky
    // ------------------------------------------------------- //
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header").addClass("nav-sticky");
        } else {
            $(".header").removeClass("nav-sticky");
        }
    });




});