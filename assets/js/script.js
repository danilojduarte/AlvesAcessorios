let swiperCards = new Swiper('.card__content', {
   loop: true,
   spaceBetween: 32,
   grabCursor: true,  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});