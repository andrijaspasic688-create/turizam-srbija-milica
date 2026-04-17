// 1. Obrada kontakt forme sa povratnom porukom
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Sprečava osvežavanje stranice
        
        // Uzimamo vrednosti iz polja (opciono za tvoju vežbu)
        const ime = this.querySelector('input[type="text"]').value;
        const destinacija = this.querySelector('select').value;

        // Prikazujemo interaktivnu poruku korisniku
        alert(`Hvala Vam, ${ime}! Uspešno ste poslali upit za destinaciju: ${destinacija}. Naš agent će Vas kontaktirati.`);
        
        this.reset(); // Briše unos nakon slanja
    });
}

// 2. Dinamički efekat na navigaciji (menja boju kada skroluješ)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#000'; // Skroz crna kad se skroluje
        nav.style.padding = '10px 0';  // Smanjuje se visina (suptilan efekat)
    } else {
        nav.style.background = '#1a1a1a';
        nav.style.padding = '15px 0';
    }
});

// 3. Logika za "Smooth Scroll" (opciono, ali lepo za videti)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});