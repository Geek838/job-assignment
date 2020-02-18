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

//navbar dropdowns and burger menu 

const dropdown = document.querySelector('.dropdown');
const subMenu = document.querySelector('.sub-menu')
const subMenuChildren = document.querySelectorAll('.sub-menu li')

dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.toggle('active');
})

const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if (nav.style.opacity) {
            nav.style.opacity = '';
        } else {
            nav.style.opacity = '1';
        }
        navLinks.forEach((element, index) => {
            if (element.style.animation) {
                element.style.animation = ''
            } else {
                element.style.animation = ''
                element.style.animation = `navLinksFade 0.5s ease-in forwards ${index/7 + 0.2}s`
                subMenuChildren.forEach((e) => {
                    e.style.animation = '';
                    e.style.opacity = '1';
                    e.style.transformX = '0px';

                })
            }
        });
        burger.classList.toggle('toggle');
    })


}

navSlider();