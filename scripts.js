// Obtener referencias a elementos del DOM
const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselDots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;

// Función para mostrar el carrusel
function showSlide(slideIndex) {
  // Verificar los límites del índice
  if (slideIndex < 0) {
    slideIndex = carouselSlides.length - 1;
  } else if (slideIndex >= carouselSlides.length) {
    slideIndex = 0;
  }

  // Ocultar todos los slides
  carouselSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Quitar la clase activa de todos los dots
  carouselDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Mostrar el slide actual
  carouselSlides[slideIndex].classList.add("active");
  carouselDots[slideIndex].classList.add("active");

  // Actualizar el índice del slide actual
  currentSlide = slideIndex;
}

// Función para avanzar al siguiente slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Función para retroceder al slide anterior
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Agregar eventos de clic a los dots para mostrar el slide correspondiente
carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Agregar eventos de clic a los botones de siguiente y anterior
document.querySelector(".carousel-next").addEventListener("click", nextSlide);
document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

// Mostrar el slide inicial
showSlide(currentSlide);
