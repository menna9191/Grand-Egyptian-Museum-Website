// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for booking your visit! We’ll contact you via email.");
});
