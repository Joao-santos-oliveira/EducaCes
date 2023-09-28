var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var hamburguer = document.querySelector('.hamburguer');
var nav = document.querySelector('.nav');
var container = document.querySelector('.container');
 

hamburguer.addEventListener("click", () =>nav.classList.toggle("active"));

function toggleP(){
  let coontainer = document.getElementById(".container");
  if(container.style.opacity === "0.02"){
    container.style.opacity = "1";
  }
  else{
    container.style.opacity = "0.02"
  }

}


