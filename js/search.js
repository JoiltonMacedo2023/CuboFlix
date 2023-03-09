const input = document.querySelector(".input");
let arrayLength = localStorage.getItem('arrayLength');

const searchApi = async () => {
  const response = await fetch(
    `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${input.value}`
  );
  const promise = await response.json();
  moviesArray = promise.results;
  moviesInterval = moviesArray;
  localStorage.setItem('arrayLength', moviesInterval.length); 
};

const startSearch = async () => {
  await searchApi();
  constructorCarousel(0, 5);
};

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    if (input.value !== "") {
      startSearch();
      input.value = "";
    } else {
      moveCarousel();
      localStorage.removeItem('arrayLength');
    }
  }
});

input.addEventListener("click", () => {
  localStorage.removeItem('arrayLength');
});

body.addEventListener("click", () => {
  input.value = "";
});