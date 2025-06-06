document.addEventListener('DOMContentLoaded', function() {
    
    // === LOGIN OLDAL LOGIKÁJA ===
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) { /* ... a login oldal kódja változatlan ... */ }

    // === KATALÓGUS ÉS LEVEL UP OLDAL KÖZÖS LOGIKÁJA (HAMBURGER MENÜ) ===
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    if (hamburgerIcon) { /* ... a hamburger menü kódja változatlan ... */ }
    
    // === "LEVEL UP" OLDAL SPECIFIKUS LOGIKÁJA (HARMONIKA) ===
    const accordionTriggers = document.querySelectorAll('.levelup-page #szolgaltatasok .accordion-trigger');
    if (accordionTriggers.length > 0) { /* ... a harmonika kódja változatlan ... */ }

    // === ÚJ RÉSZ: KATALÓGUS OLDAL LIGHTBOX LOGIKÁJA ===
    const productCards = document.querySelectorAll('.catalog-page .product-card');
    const lightbox = document.getElementById('lightbox');
    if (lightbox && productCards.length > 0) {
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxClose = document.querySelector('.lightbox-close');

        productCards.forEach(card => {
            card.addEventListener('click', function() {
                const imageSrc = card.querySelector('img').src;
                lightboxImage.src = imageSrc;
                lightbox.hidden = false;
                // Kis késleltetés, hogy a CSS transition működjön a display:none után
                setTimeout(() => {
                    lightbox.classList.add('visible');
                }, 10);
            });
        });

        const closeLightbox = function() {
            lightbox.classList.remove('visible');
            // Megvárjuk, amíg az áttűnés befejeződik, utána rejtjük el teljesen
            lightbox.addEventListener('transitionend', function() {
                if (!lightbox.classList.contains('visible')) {
                    lightbox.hidden = true;
                }
            }, { once: true });
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            // Csak akkor záródjon be, ha a háttérre kattintunk, nem a képre
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});
