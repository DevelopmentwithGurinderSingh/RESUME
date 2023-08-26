const navbarLinks = document.querySelectorAll('.navbar a');
const carousel = document.querySelector('.carousel');
const carouselSlides = document.querySelectorAll('.carousel-slide');

navbarLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const slideWidth = carouselSlides[0].offsetWidth;
    carousel.style.transform = `translateX(-${slideWidth * index}px)`;

    // Remove active class from all navbar links
    navbarLinks.forEach(navLink => navLink.classList.remove('active'));

    // Add active class to the clicked navbar link
    link.classList.add('active');
  });
});