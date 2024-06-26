let bars = document.querySelector(".bars");
let navBottom = document.querySelector(".nav-bottom");

bars.addEventListener("click", () => {
  navBottom.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});