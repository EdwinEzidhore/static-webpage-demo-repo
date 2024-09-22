new Swiper('.card-wrapper', {
     

    loop: true,
     spaceBetween: 50,
     centerSlide:true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamiceBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        },
        
    },


  });