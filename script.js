// Add this script to your HTML file, just before the closing </body> tag

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default jump behavior

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' // For smooth scrolling
    });
  });
});

// Optional: Add a class to the header on scroll (for shadow effect)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});