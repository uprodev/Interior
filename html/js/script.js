jQuery(document).ready(function ($) {

  //slider
  var swiperImg1 = new Swiper(".slider-img-1", {
    navigation: {
      nextEl: ".next-1",
      prevEl: ".prev-1",
    },
  });

  //slider
  var swiperImg2 = new Swiper(".slider-img-2", {
    navigation: {
      nextEl: ".next-2",
      prevEl: ".prev-2",
    },
  });

  //slider
  var swiperImg3 = new Swiper(".slider-img-3", {
    navigation: {
      nextEl: ".next-3",
      prevEl: ".prev-3",
    },
  });

  //slider
  var swiperImg4 = new Swiper(".slider-img-4", {
    navigation: {
      nextEl: ".next-4",
      prevEl: ".prev-4",
    },
  });

  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('html').addClass('is-menu');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu');
  });

  //slider
  var swiperCabinetry1 = new Swiper(".cabinetry-slider-1", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  //slider
  var swiperCabinetry2 = new Swiper(".cabinetry-slider-2", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  //slider
  var swiperCabinetry3 = new Swiper(".cabinetry-slider-3", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  //slider
  var swiperInfo = new Swiper(".info-slider", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });


  //scroll

  $(document).on('click', '.scroll a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});