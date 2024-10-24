let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });

  
    navbar.classList.remove('active');
};
