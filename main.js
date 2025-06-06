document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menü kezelése
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navUl = document.querySelector('header nav ul');

    if (hamburgerIcon && navUl) {
        hamburgerIcon.addEventListener('click', function() {
            navUl.classList.toggle('mobile-menu-open');
            this.classList.toggle('active'); 
        });

        // Menü bezárása linkre kattintáskor (one-page oldalaknál hasznos)
        navUl.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (navUl.classList.contains('mobile-menu-open')) {
                    navUl.classList.remove('mobile-menu-open');
                    hamburgerIcon.classList.remove('active');
                }
            });
        });
    }
});
