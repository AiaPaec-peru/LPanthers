document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("nav-menu_visible");
  });
  
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  
  navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu_visible");
  });
  

 

  document.addEventListener('DOMContentLoaded', function() {
    var img = document.querySelector('.img img');
    img.addEventListener('click', function() {
        img.classList.toggle('stop-animation');
    });
});

// carrusel productos

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    currentIndex = index;
    const translateValue = -currentIndex * 100;
    document.querySelector(".carousel-container").style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Llama a la función showSlide para mostrar la primera imagen
showSlide(currentIndex);
