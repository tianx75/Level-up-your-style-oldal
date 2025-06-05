document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü kezelése
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navUl = document.querySelector('header nav ul');

    if (hamburgerIcon && navUl) {
        hamburgerIcon.addEventListener('click', function() {
            navUl.classList.toggle('mobile-menu-open');
            this.classList.toggle('active'); 
        });

        navUl.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (navUl.classList.contains('mobile-menu-open')) {
                    navUl.classList.remove('mobile-menu-open');
                    hamburgerIcon.classList.remove('active');
                }
            });
        });
    }

    // Harmonika (Accordion) kezelése a Szolgáltatásoknál
    const accordionTriggers = document.querySelectorAll('#szolgaltatasok .accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const content = this.nextElementSibling; 
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', !isOpen);
            this.classList.toggle('active'); 

            if (!isOpen) {
                content.hidden = false;
                requestAnimationFrame(() => {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('open');
                });
            } else {
                content.style.maxHeight = null;
                content.classList.remove('open');
                content.addEventListener('transitionend', function handler() {
                    if (content.style.maxHeight === '0px' || content.style.maxHeight === null) {
                        content.hidden = true;
                    }
                    content.removeEventListener('transitionend', handler);
                });
            }
        });
    });
});
