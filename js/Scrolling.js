$(document).ready(function () {
    const navbar = $('#navbar'); // Select the navbar
    const topbar = $('#top-bar'); // Select the top bar
    let lastScrollTop = 0;
    const delta = 5; // Minimum scroll distance to trigger the fade effect
    let navbarVisible = true; // Track visibility of navbar and top bar

    $(window).scroll(function () {
        let currentScroll = $(this).scrollTop();

        // Only run the animation if the scroll distance is greater than delta
        if (Math.abs(currentScroll - lastScrollTop) > delta) {
            if (currentScroll > lastScrollTop && navbarVisible) {
                // Scrolling down: hide navbar and top bar
                navbar.css('opacity', '0'); // Fade out
                topbar.css('opacity', '0'); // Fade out
                navbarVisible = false; // Update visibility status
            } else if (currentScroll < lastScrollTop && !navbarVisible) {
                // Scrolling up: show navbar and top bar
                navbar.css('opacity', '1'); // Fade in
                topbar.css('opacity', '1'); // Fade in
                navbarVisible = true; // Update visibility status
            }
        }

        // Update the last scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});