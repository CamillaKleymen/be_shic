$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev btn btn-light rounded-circle p-2 position-absolute top-50 start-0 translate-middle-y"><i class="bi bi-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next btn btn-light rounded-circle p-2 position-absolute top-50 end-0 translate-middle-y"><i class="bi bi-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


$(document).ready(function(){
    $('.welcome-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 1,
      // prevArrow:
      //   '<button type="button" class="slick-prev btn btn-light rounded-circle p-2 position-absolute top-50 start-0 translate-middle-y"><i class="bi bi-chevron-left"></i></button>',
      // nextArrow:
      //   '<button type="button" class="slick-next btn btn-light rounded-circle p-2 position-absolute top-50 end-0 translate-middle-y"><i class="bi bi-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  



  $(document).ready(function(){
    $('.cert-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 5,
      slidesToScroll: 1,
      // prevArrow:
      //   `<button class="btn btn-light rounded-circle me-2" style="width: 48px; height: 48px;">
      //       <i class="bi bi-arrow-left"></i>
      //   </button>`,
      // nextArrow:
      //   `<button class="btn btn-dark rounded-circle" style="width: 48px; height: 48px;">
      //       <i class="bi bi-arrow-right"></i>
      //   </button>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
    


 
  $(document).ready(function(){
    $('.cert-slider_mb').slick({
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      // prevArrow:
      //   `<button class="btn btn-light rounded-circle me-2" style="width: 48px; height: 48px;">
      //       <i class="bi bi-arrow-left"></i>
      //   </button>`,
      // nextArrow:
      //   `<button class="btn btn-dark rounded-circle" style="width: 48px; height: 48px;">
      //       <i class="bi bi-arrow-right"></i>
      //   </button>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }); 


  $(document).ready(function () {
    $(".extra-slider").slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 5000,
      cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });



// function changeImage(element) {
//   document.getElementById("mainImage").src = element.src;
//   document.querySelectorAll(".thumb").forEach(img => img.classList.remove("border-primary", "border-3"));
//   element.classList.add("border-primary", "border-3");
// }