var swiper = new Swiper(".swiper-container", {
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: true,
  speed: 1400,
  autoplaySpeed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function () {
  // *jquery 'slick slider'
  $(".carousel__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/arrow-left-slider.svg"></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/arrow-right-slider.svg"></button>',
    responsive: [
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 800,
        },
      },
    ],
  });
});
$(function () {
  $(".top-menu-btn").on("click", function () {
    $(".top-list").slideToggle();
  });
  $(".questions__accordion-item__tridder").click(function () {
    $(this).next(".questions__accordion-item__content").slideToggle();
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 280) {
    $(".top").addClass("sticky");
    $(".wrapper").addClass("sticky");
  } else {
    $(".top").removeClass("sticky");
    $(".wrapper").removeClass("sticky");
  }
});
