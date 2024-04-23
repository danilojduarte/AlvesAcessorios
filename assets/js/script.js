


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// <!-- NOVIDADES -->
// <section class="novidades" id="novidades">
//     <div class="card__container swiper">
//         <div class="card__content">
//             <div class="swiper-wrapper">
//                 <!-- CARD01 -->
//                 <article class="card__article swiper-slide">
//                     <div class="card__img">
//                         <img src="assets/img/jbl_bluepng_1-removebg-preview.png" alt="">
//                         <div class="card__shadow">
//                         </div>

//                         <div class="card__data">
//                             <h3 class="card__title">Fone de Ouvido</h3>
//                             <p class="card__description">
//                                 Fone de ouvido bluetooth.
//                             </p>
//                             <h5 class="price">R$ 70,00</h5>
//                             <a href="#" class="card__button">Saiba Mais</a>
//                         </div>

//                     </div>
//                 </article>

//                 <!-- CARD02 -->
//                 <article class="card__article swiper-slide">
//                     <div class="card__img">
//                         <img src="assets/img/jbl_bluepng_1-removebg-preview.png" alt="">
//                         <div class="card__shadow">
//                         </div>

//                         <div class="card__data">
//                             <h3 class="card__title">Nome Produto</h3>
//                             <p class="card__description">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                             </p>
//                             <h5 class="price">R$ 70,00</h5>
//                             <a href="#" class="card__button">Saiba Mais</a>
//                         </div>

//                     </div>
//                 </article>

//                 <!-- CARD03 -->
//                 <article class="card__article swiper-slide">
//                     <div class="card__img">
//                         <img src="assets/img/jbl_bluepng_1-removebg-preview.png" alt="">
//                         <div class="card__shadow">
//                         </div>

//                         <div class="card__data">
//                             <h3 class="card__title">Nome Produto</h3>
//                             <p class="card__description">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                             </p>
//                             <h5 class="price">R$ 70,00</h5>
//                             <a href="#" class="card__button">Saiba Mais</a>
//                         </div>

//                     </div>
//                 </article>

//                 <!-- CARD04 -->
//                 <article class="card__article swiper-slide">
//                     <div class="card__img">
//                         <img src="assets/img/jbl_bluepng_1-removebg-preview.png" alt="">
//                         <div class="card__shadow">
//                         </div>

//                         <div class="card__data">
//                             <h3 class="card__title">Nome Produto</h3>
//                             <p class="card__description">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                             </p>
//                             <h5 class="price">R$ 70,00</h5>
//                             <a href="#" class="card__button">Saiba Mais</a>
//                         </div>

//                     </div>
//                 </article>

//                 <!-- CARD05 -->
//                 <article class="card__article swiper-slide">
//                     <div class="card__img">
//                         <img src="assets/img/jbl_bluepng_1-removebg-preview.png" alt="">
//                         <div class="card__shadow">
//                         </div>

//                         <div class="card__data">
//                             <h3 class="card__title">Nome Produto</h3>
//                             <p class="card__description">
//                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                             </p>
//                             <h5 class="price">R$ 70,00</h5>
//                             <a href="#" class="card__button">Saiba Mais</a>
//                         </div>

//                     </div>
//                 </article>
//             </div>
//         </div>

//         <!-- Navigation buttons -->
//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>

//     </div>
// </section>
