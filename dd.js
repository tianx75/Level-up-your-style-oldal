document.addEventListener('DOMContentLoaded', function() {
    
    // ----- LOGIN OLDAL LOGIKÁJA -----
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) { // Csak akkor fut le, ha létezik a jelszó űrlap az oldalon
        const passwordInput = document.getElementById('passwordInput');
        const errorMessage = document.getElementById('errorMessage');
        const loginBox = document.getElementById('loginBox');
        const lockoutMessageContainer = document.getElementById('lockoutMessageContainer');
        const dots = document.querySelectorAll('#attemptsCounter .dot');

        const correctPassword = "stilus"; 
        let attemptsLeft = 3;

        passwordForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            if (attemptsLeft <= 0) return;

            const enteredPassword = passwordInput.value;

            if (enteredPassword === correctPassword) {
                // Helyes jelszó! Átirányítás a katalógus oldalra.
                window.location.href = "../main.html"; 
            } else {
                attemptsLeft--; 

                if (dots[2 - attemptsLeft]) {
                     dots[2 - attemptsLeft].classList.add('used');
                }

                if (attemptsLeft > 0) {
                    errorMessage.textContent = `Hibás kód. Még ${attemptsLeft} próbálkozás maradt.`;
                    passwordInput.value = ""; 
                } else {
                    errorMessage.textContent = "";
                    loginBox.style.opacity = '0';
                    setTimeout(() => {
                        loginBox.hidden = true;
                        lockoutMessageContainer.hidden = false;
                    }, 500); 
                }
            }
        });

        passwordInput.addEventListener('input', function() {
            errorMessage.textContent = "";
        });
    }

    // ----- KATALÓGUS OLDAL LOGIKÁJA (HAMBURGER MENÜ) -----
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    if (hamburgerIcon) { // Csak akkor fut le, ha létezik a hamburger ikon az oldalon
        const navUl = document.querySelector('header nav ul');

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
});