$(document).ready(function () {

    // Get the navbar element
    const navbar = document.getElementById('navbar');

    // Store the previous scroll position
    let lastScrollTop = 0;

    // Scroll event to hide/show navbar based on scroll direction
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

    // Sticky Navbar effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Ensure the navbar menu collapses when clicked again
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        // Toggle the collapse state when the button is clicked
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });

});
