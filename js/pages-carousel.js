const previousButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");

let initialIndex = 0;
let finalIndex = 5;

nextButton.addEventListener("click", () => {
  let array = localStorage.getItem("arrayLength");
  if (array > 5 || !array) {
    if (finalIndex === 20) {
      initialIndex = -10;
      finalIndex = -5;
      initialIndex += 5;
      finalIndex += 5;

      constructorCarousel(initialIndex, finalIndex);
    }
  }
});

nextButton.addEventListener("click", () => {
  let array = localStorage.getItem("arrayLength");
  if (array > 5 || !array) {
    initialIndex += 5;
    finalIndex += 5;

    constructorCarousel(initialIndex, finalIndex);
  }
});

previousButton.addEventListener("click", () => {
  let array = localStorage.getItem("arrayLength");
  if (array > 5 || !array) {
    if (finalIndex === 5) {
      initialIndex = 25;
      finalIndex = 30;
      initialIndex -= 5;
      finalIndex -= 5;

      constructorCarousel(initialIndex, finalIndex);
    }
  }
});

previousButton.addEventListener("click", () => {
  let array = localStorage.getItem("arrayLength");
  if (array > 5 || !array) {
    initialIndex -= 5;
    finalIndex -= 5;

    constructorCarousel(initialIndex, finalIndex);
  }
});
