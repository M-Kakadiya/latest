  $('.marquee_flex').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    swipe: false,
    slidesToShow: 2,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true
  });
  $(".featured-collection .product-grid").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2, // Ensure only 1 slide is shown
          slidesToScroll: 1, // Ensure only 1 slide is scrolled
        },
      },
        {
        breakpoint: 559,
        settings: {
          slidesToShow: 1, // Ensure only 1 slide is shown
          slidesToScroll: 1, // Ensure only 1 slide is scrolled
        },
      },
    ],
  });
	$(".prev-btn").click(function () {
		$(".featured-collection .product-grid").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".featured-collection .product-grid").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".featured-collection .product-grid").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});


  $(".product-collection .product-grid").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Ensure only 1 slide is shown
          slidesToScroll: 1, // Ensure only 1 slide is scrolled
        },
      },
    ],
  });
	$(".prev-btn").click(function () {
		$(".product-collection .product-grid").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".product-collection .product-grid").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
	$(".product-collection .product-grid").on("afterChange", function () {
		if ($(".slick-prev").hasClass("slick-disabled")) {
			$(".prev-btn").addClass("slick-disabled");
		} else {
			$(".prev-btn").removeClass("slick-disabled");
		}
		if ($(".slick-next").hasClass("slick-disabled")) {
			$(".next-btn").addClass("slick-disabled");
		} else {
			$(".next-btn").removeClass("slick-disabled");
		}
	});



  $(".customizes_product_flex_slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow:
      '<button class="slide-arrow next-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" transform="matrix(-1 0 0 1 40 0)" fill="#F5F5F5"/><rect x="-0.5" y="0.5" width="39" height="39" rx="3.5" transform="matrix(-1 0 0 1 39 0)" stroke="#1B1F23" stroke-opacity="0.1"/><path d="M21.0982 15.1823L25.8125 19.5573C25.9375 19.6788 26 19.8264 26 20C26 20.1736 25.9375 20.3212 25.8125 20.4427L21.0982 24.8177C20.7768 25.0608 20.4732 25.0608 20.1875 24.8177C19.9375 24.5052 19.9375 24.2101 20.1875 23.9323L23.75 20.625H14.6429C14.25 20.5903 14.0357 20.3819 14 20C14.0357 19.6181 14.25 19.4097 14.6429 19.375H23.75L20.1875 16.0677C19.9375 15.7899 19.9375 15.4948 20.1875 15.1823C20.4732 14.9392 20.7768 14.9392 21.0982 15.1823Z" fill="#1B1F23"/></svg></button>',
    prevArrow:
      '<button class="slide-arrow prev-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="4" fill="#F5F5F5"/><rect x="0.5" y="0.5" width="39" height="39" rx="3.5" stroke="#1B1F23" stroke-opacity="0.1"/><path d="M18.9018 15.1823L14.1875 19.5573C14.0625 19.6788 14 19.8264 14 20C14 20.1736 14.0625 20.3212 14.1875 20.4427L18.9018 24.8177C19.2232 25.0608 19.5268 25.0608 19.8125 24.8177C20.0625 24.5052 20.0625 24.2101 19.8125 23.9323L16.25 20.625H25.3571C25.75 20.5903 25.9643 20.3819 26 20C25.9643 19.6181 25.75 19.4097 25.3571 19.375H16.25L19.8125 16.0677C20.0625 15.7899 20.0625 15.4948 19.8125 15.1823C19.5268 14.9392 19.2232 14.9392 18.9018 15.1823Z" fill="#1B1F23"/></svg></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Ensure only 1 slide is shown
          slidesToScroll: 1, // Ensure only 1 slide is scrolled
        },
      },
    ],
  });

 if ($(window).width() < 1441){
     $('.logo_flex').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    swipe: false,
    slidesToShow: 2,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true
  });
 }