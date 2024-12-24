// Wait for the document to load
$(document).ready(function () {

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the WOW.js (animate on scroll)
    new WOW().init();

// Get the navbar element
const navbar = document.getElementById('navbar');

// Store the previous scroll position
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll direction is down or up
    if (currentScroll > lastScrollTop) {
        // Scrolling down: fade out the navbar
        navbar.style.opacity = 0;
        navbar.style.top = '-10px'; // Move navbar out of view
    } else {
        // Scrolling up: fade in the navbar
        navbar.style.opacity = 1;
        navbar.style.top = '50px'; // Bring navbar back to view
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel (using Owl Carousel)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

});
