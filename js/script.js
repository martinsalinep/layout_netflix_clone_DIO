$('.loop').owlCarousel({
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
      600:{
          items:4
      }
  }
});