// Herosection video Slider
$('.header_slider').owlCarousel({
    loop: true,
    // margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Client Testimonial Section
$('.testimonial_div').owlCarousel({
  loop: true,
  // margin: 0,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
