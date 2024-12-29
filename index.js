// Get references to the navbar and hamburger icon
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

// Add a scroll event listener to change the navbar style when scrolling
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle the navigation menu when the hamburger icon is clicked
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('active');  // Toggle the 'active' class on nav-links
});

//Function to highlight the active link based on the section currently in view

window.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');
  let links = document.querySelectorAll('.nav-item');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      links.forEach(link => link.classList.remove('active'));
      links[index].classList.add('active');
    }
  });
});
