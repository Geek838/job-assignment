//show navbar on scroll
$(window).scroll(function () {
    $('nav').toggleClass('fixed-top', $(this).scrollTop() > 800);
});



//reveal content on scroll
ScrollReveal({
    duration: 1000
});
ScrollReveal().reveal('.headline', {
    delay: 400
});
ScrollReveal().reveal('.tagline', {
    delay: 700
});
ScrollReveal().reveal('.punchline', {
    delay: 1000
});