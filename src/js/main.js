import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'flowbite';
import '@fortawesome/fontawesome-free';

//owl carousel config
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },  
        600: { items: 1 },  
        1000: { items: 1}  
      }
    });
  });