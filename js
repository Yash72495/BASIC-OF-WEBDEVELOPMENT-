document.addEventListener('DOMContentLoaded', () => {
  const heroBtn = document.getElementById('hero-btn');
  const contactForm = document.querySelector('.contact-form');

  heroBtn.addEventListener('click', () => {
    alert('Thanks for clicking Get Started! We will reach out soon.');
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    contactForm.reset();
  });
});
