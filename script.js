/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Playfair+Display:wght@700&display=swap');

/* === Változók === */
:root {
    --dark-bg: #1a1a1a;
    --gold-accent: #b08d57;
    --light-text: #f0f0f0;
    --secondary-text: #cccccc;
    --error-color: #e74c3c;
    --dot-color: #555;
    --border-color-dark: #333;
    --light-bg: #f7f7f7;
    --dark-text-light-theme: #2c3e50;
    --border-color-light: #ddd;
}

/* === ÁLTALÁNOS STÍLUSOK === */
body { font-family: 'Montserrat', sans-serif; margin: 0; padding: 0; line-height: 1.6; }
h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 700; }

/* === LOGIN OLDAL STÍLUSOK === */
body.login-page { background-color: var(--dark-bg); color: var(--light-text); display: flex; justify-content: center; align-items: center; text-align: center; height: 100vh; }
.login-container { width: 100%; padding: 20px; }
.login-box { max-width: 400px; margin: 0 auto; padding: 40px; background-color: rgba(0,0,0,0.2); border: 1px solid var(--border-color-dark); border-radius: 8px; transition: opacity 0.5s ease; }
.login-title { font-size: 2.5rem; color: var(--gold-accent); margin: 0 0 10px 0; }
.login-subtitle { font-size: 1rem; font-weight: 300; margin-bottom: 25px; }
.attempts-counter { margin-bottom: 25px; display: flex; justify-content: center; gap: 15px; }
.attempts-counter .dot { display: block; width: 12px; height: 12px; background-color: var(--gold-accent); border-radius: 50%; transition: background-color 0.5s ease; }
.attempts-counter .dot.used { background-color: var(--dot-color); }
.password-field { width: 100%; padding: 12px; margin-bottom: 20px; border: 1px solid #555; border-radius: 4px; box-sizing: border-box; font-family: 'Montserrat', sans-serif; font-size: 1rem; background-color: #2b2b2b; color: var(--light-text); text-align: center; }
.password-field::placeholder { color: #888; }
.submit-button { background-color: var(--gold-accent); color: var(--dark-bg); padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; font-family: 'Montserrat', sans-serif; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; transition: background-color 0.3s ease; width: 100%; font-size: 1rem; }
.submit-button:hover { background-color: #c9a473; }
.error-message { color: var(--error-color); margin-top: 15px; height: 20px; font-weight: bold; }
.lockout-title { font-family: 'Playfair Display', serif; font-size: 3rem; color: var(--light-text); text-transform: uppercase; }

/* === KATALÓGUS ÉS LEVEL UP OLDAL KÖZÖS ELEMEK === */
.catalog-page, .levelup-page { background-color: var(--white); color: #333; }
.catalog-page main, .levelup-page main { padding-top: 85px; }
.catalog-page header, .levelup-page header { padding: 0.75rem 2rem; position: fixed; width: 100%; top: 0; z-index: 1000; display: flex; justify-content: space-between; align-items: center; transition: background-color 0.3s ease; }
.catalog-page header nav ul, .levelup-page header nav ul { list-style-type: none; padding: 0; margin: 0; }
.catalog-page header nav ul li, .levelup-page header nav ul li { display: inline-block; margin: 0 10px; }
.catalog-page header nav ul li a, .levelup-page header nav ul li a { text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem; padding: 10px 0; transition: color 0.3s ease; position: relative; }
.catalog-page header nav ul li a::after, .levelup-page header nav ul li a::after { content: ''; display: block; width: 0; height: 2px; transition: width .3s; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); }
.catalog-page header nav ul li a:hover::after, .levelup-page header nav ul li a:hover::after { width: 100%; }
.hamburger-icon { display: none; cursor: pointer; }
.hamburger-icon div { width: 25px; height: 3px; margin: 5px 0; transition: 0.4s; }

/* === LEVEL UP OLDAL (FŐOLDAL) STÍLUSAI === */
.levelup-page header { background-color: #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.08); }
.levelup-page .site-title a { color: var(--dark-text-light-theme); }
.levelup-page header nav ul li a { color: var(--dark-text-light-theme); border-bottom: 2px solid transparent; }
.levelup-page header nav ul li a:hover { color: #b08d57; }
.levelup-page header nav ul li a:hover::after { background: #b08d57; }
.levelup-page .hamburger-icon div { background-color: var(--dark-text-light-theme); }
.levelup-page section { padding: 80px 20px; border-bottom: 1px solid var(--border-color-light); }
.levelup-page #hero { background-image: url('https://i.imgur.com/KY1w88a.jpeg'); background-size: cover; background-position: center; color: white; min-height: 90vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); text-align: center; border-bottom: none; }
.levelup-page #hero h1, .levelup-page #hero p { color: white; }
.levelup-page #hero h1 { font-size: 3.5rem; margin-bottom: 0.75rem; }
.levelup-page #hero p { font-size: 1.3rem; font-family: 'Montserrat', sans-serif; }
.levelup-page #rolam { background-color: #1a1a1a; color: #f0f0f0; text-align: left; }
.levelup-page #rolam h2 { color: #b08d57; text-align: center; margin-bottom: 40px; }
.levelup-page #rolam p { max-width: 800px; margin: 0 auto 20px; line-height: 1.7; }
.levelup-page #szolgaltatasok { background-color: var(--light-bg); }
.levelup-page #szolgaltatasok h2 { color: var(--dark-text-light-theme); text-align: center; margin-bottom: 30px; }
.levelup-page #szolgaltatasok > p { max-width: 700px; margin: 0 auto 30px; text-align: center; color: #333; }
.levelup-page .accordion-list { list-style-type: none; padding-left: 0; margin-top: 30px; max-width: 800px; margin-left: auto; margin-right: auto; }
.levelup-page .accordion-item { border: 1px solid var(--border-color-light); border-bottom: none; background-color: #fff; }
.levelup-page .accordion-item:last-child { border-bottom: 1px solid var(--border-color-light); }
.levelup-page .accordion-trigger { background-color: transparent; color: var(--dark-text-light-theme); cursor: pointer; padding: 18px 20px; width: 100%; border: none; text-align: left; outline: none; font-size: 1.1rem; font-family: 'Playfair Display', serif; font-weight: bold; transition: background-color 0.3s ease; display: flex; justify-content: space-between; align-items: center; }
.levelup-page .accordion-trigger:hover { background-color: #f0f0f0; }
.levelup-page .accordion-trigger .accordion-icon { font-size: 1.5rem; font-weight: normal; transition: transform 0.3s ease; color: #b08d57; }
.levelup-page .accordion-trigger.active .accordion-icon { transform: rotate(45deg); }
.levelup-page .accordion-content { padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out, padding 0.3s ease-out; background-color: #fff; font-size: 0.95rem; line-height: 1.7; color: #333; }
.levelup-page .accordion-content.open { padding: 20px; }
.levelup-page .service-icon { margin-right: 12px; color: #b08d57; font-size: 1em; width: 20px; }
.levelup-page .accordion-trigger span:first-child { display: flex; align-items: center; }
.levelup-page #collection-link { padding: 80px 20px; text-align: center; background-color: var(--light-bg); }
.levelup-page #collection-link h2 { color: var(--dark-text-light-theme); }
.levelup-page .cta-button { display: inline-block; background-color: #2c3e50; color: white; padding: 15px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; border-radius: 4px; transition: background-color 0.3s; }
.levelup-page .cta-button:hover { background-color: #b08d57; }
.levelup-page #kapcsolat { background-color: #1a1a1a; color: #f0f0f0; text-align: left; }
.levelup-page #kapcsolat h2, .levelup-page #kapcsolat h3 { color: #b08d57; }
.levelup-page #kapcsolat > p { text-align: center; max-width: 700px; margin: 0 auto 40px; }
.levelup-page .contact-details { display: flex; flex-wrap: wrap; gap: 40px; max-width: 960px; margin: 0 auto; }
.levelup-page .contact-info, .levelup-page .contact-form-placeholder { flex: 1; min-width: 300px; }
.levelup-page .contact-info h3, .levelup-page .contact-form-placeholder h3 { border-bottom: 1px solid #555; padding-bottom: 10px; }
.levelup-page .icon-contact { margin-right: 10px; color: #b08d57; font-size: 1.1em; width: 20px; text-align: center; }
.levelup-page .contact-info a { color: #b08d57; text-decoration: none; }
.levelup-page .contact-info a:hover { color: #d4af7a; }
.levelup-page .contact-form-placeholder input, .levelup-page .contact-form-placeholder textarea { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid var(--border-color-light); border-radius: 4px; box-sizing: border-box; font-family: 'Montserrat', sans-serif; font-size: 0.9rem; }
.levelup-page .contact-form-placeholder button { background-color: #2c3e50; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; font-family: 'Montserrat', sans-serif; font-weight: bold; text-transform: uppercase; }
.levelup-page .contact-form-placeholder button:hover { background-color: #b08d57; }
.levelup-page footer { background-color: #1a1a1a; color: #f0f0f0; text-align: center; padding: 2rem; font-size: 0.9rem; border-top: 3px solid #b08d57; }

/* === KATALÓGUS OLDAL STÍLUSAI === */
body.catalog-page { background-color: var(--dark-bg); }
.catalog-page h1, .catalog-page h2, .catalog-page h3, .catalog-page p, .catalog-page a, .catalog-page li { color: var(--light-text); }
.catalog-page header { background-color: rgba(26, 26, 26, 0.85); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-color-dark); }
.catalog-page .site-title a:hover { color: var(--gold-accent); }
.catalog-page header nav ul li a:hover { color: var(--gold-accent); }
.catalog-page header nav ul li a:hover::after { background: var(--gold-accent); }
.catalog-page .hamburger-icon div { background-color: var(--light-text); }
.catalog-page section { border-bottom: 1px solid var(--border-color-dark); padding: 100px 40px; }
.catalog-page #welcome { text-align: center; max-width: 700px; margin: 0 auto; }
.catalog-page #welcome h1 { font-size: 3rem; color: var(--gold-accent); margin-bottom: 20px; }
.catalog-page #welcome p { font-size: 1.1rem; color: var(--secondary-text); }
.catalog-page .collection-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
@media (min-width: 1400px) { .catalog-page .collection-grid { grid-template-columns: repeat(3, 1fr); } }
.catalog-page .product-card { background-color: #222; overflow: hidden; position: relative; cursor: pointer; }
.catalog-page .product-card img { width: 100%; height: 400px; object-fit: cover; display: block; transition: transform 0.4s ease; }
.catalog-page .product-card:hover img { transform: scale(1.05); }
.catalog-page .product-info { position: absolute; bottom: 0; left: 0; right: 0; color: white; padding: 60px 20px 20px; transition: background 0.5s ease; background: linear-gradient(to top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.7) 100%); opacity: 0; }
.catalog-page .product-card:hover .product-info { opacity: 1; }
.catalog-page .product-info h3 { margin: 0 0 5px 0; font-size: 1.5rem; text-shadow: 1px 1px 3px rgba(0,0,0,0.7); }
.catalog-page .product-code { margin: 0; font-size: 0.8rem; text-transform: uppercase; color: var(--secondary-text); text-shadow: 1px 1px 3px rgba(0,0,0,0.7); }
.catalog-page #curator { background-color: var(--dark-bg); }
.catalog-page .curator-content { display: flex; align-items: center; gap: 40px; max-width: 960px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }
.catalog-page .curator-photo { width: 250px; height: 250px; border-radius: 50%; object-fit: cover; border: 3px solid var(--gold-accent); }
.catalog-page .curator-text { flex: 1; min-width: 300px; text-align: left; }
.catalog-page #inquiry { text-align: center; background-color: #222; }
.catalog-page #inquiry p { max-width: 600px; margin: 0 auto 30px; color: var(--secondary-text); }
.catalog-page .inquiry-button { display: inline-block; background-color: var(--gold-accent); color: var(--dark-bg); padding: 15px 30px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px; transition: background-color 0.3s ease; }
.catalog-page .inquiry-button:hover { background-color: #c9a473; }
.catalog-page footer { background-color: var(--dark-bg); color: var(--secondary-text); text-align: center; padding: 2rem; font-size: 0.9rem; border-top: 1px solid var(--border-color-dark); }

/* >> ÚJ STÍLUSOK A LIGHTBOXHOZ (NAGYÍTOTT KÉP) << */
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.9); z-index: 2000; display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: opacity 0.4s ease, visibility 0s 0.4s; }
.lightbox-overlay.visible { opacity: 1; visibility: visible; transition-delay: 0s; }
.lightbox-content { max-width: 90vw; max-height: 85vh; transform: scale(0.8); transition: transform 0.4s ease; }
.lightbox-overlay.visible .lightbox-content { transform: scale(1); }
.lightbox-close { position: absolute; top: 20px; right: 40px; color: #fff; font-size: 50px; font-weight: bold; cursor: pointer; transition: transform 0.2s ease; line-height: 1; }
.lightbox-close:hover { transform: scale(1.1); color: #ccc; }

/* === RESZPONZÍV STÍLUSOK === */
@media (max-width: 768px) {
    body h2 { font-size: 2rem; }
    body section { padding: 60px 20px; }
    header { padding: 0.75rem 1rem; }
    main { padding-top: 72px; }
    .site-title a { font-size: 1.3rem; }
    header nav ul { display: none; position: absolute; top: 100%; left: 0; right: 0; width: 100%; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 10px 0; z-index: 999; }
    .levelup-page header nav ul { background-color: #ffffff; }
    .catalog-page header nav ul { background-color: var(--dark-bg); }
    header nav ul.mobile-menu-open { display: block; }
    header nav ul li { display: block; text-align: center; margin: 0; }
    header nav ul li a { display: block; padding: 15px; }
    .levelup-page header nav ul li a { border-bottom: 1px solid var(--border-color-light); }
    .catalog-page header nav ul li a { border-bottom: 1px solid var(--border-color-dark); }
    header nav ul li:last-child a { border-bottom: none; }
    .hamburger-icon { display: block; }
    .hamburger-icon.active div:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
    .hamburger-icon.active div:nth-child(2) { opacity: 0; }
    .hamburger-icon.active div:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }
    .levelup-page .contact-details, .catalog-page .curator-content { flex-direction: column; }
    .levelup-page #szolgaltatasok .accordion-list { padding: 0; }
}
