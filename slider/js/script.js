console.clear();
// Swiper with centeredSlides: false;
var mySwiper = new Swiper('.swiper2', {
   initialSlide: 0,
   spaceBetween: 100,
   slidesPerView: 3,
   centeredSlides: false,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3
   },
   watchSlidesVisibility: true,
   effect: "coverflow",
   coverflowEffect: {
      rotate: 0,
      depth: 350,
      slideShadows: false
   },
   keyboard: {
      enabled: true
   }
});