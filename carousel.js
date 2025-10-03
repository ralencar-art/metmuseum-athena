document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;
  const cards = document.querySelectorAll(".card");
  const cardsPerView = 3; // 3 cards por vez
  const totalCards = cards.length;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // largura + margem
    track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - cardsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
});
