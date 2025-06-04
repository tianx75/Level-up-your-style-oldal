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
            const content = this.nextElementSibling; // A gomb után következő elem (az accordion-content div)
            const isOpen = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', !isOpen);
            this.classList.toggle('active'); // Az ikon (+) forgatásához/változtatásához CSS-sel

            if (!isOpen) {
                // Nyitás
                content.hidden = false;
                // Kis késleltetés a max-height beállítása előtt, hogy a 'hidden' attribútum eltávolítása érvényesüljön
                requestAnimationFrame(() => {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('open');
                });
            } else {
                // Csukás
                content.style.maxHeight = null;
                content.classList.remove('open');
                // A 'hidden' attribútumot akkor adjuk vissza, ha az animáció befejeződött,
                // hogy ne legyen ugrás. A CSS transition időtartamához igazítva.
                // A max-height = 0 és overflow: hidden már