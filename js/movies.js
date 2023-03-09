const movies = document.querySelector(".movies");
const closeModal = document.querySelector(".modal__close");

let moviesArray;
let moviesInterval;
let modalContent;

const moviesApi = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false"
  );
  const promise = await response.json();
  moviesArray = promise.results;
  moviesInterval = moviesArray; 
};

const moviesCarousel = (element) => {
  const movie = document.createElement("div");
  movie.classList.add("movie");
  movie.id = element.id;
  movie.style.backgroundImage = `url('${element.poster_path}')`;

  const info = document.createElement("div");
  info.classList.add("movie__info");

  const title = document.createElement("span");
  title.classList.add("movie__title");
  title.textContent = element.title;

  const stars = document.createElement("img");
  stars.src = "./assets/estrela.svg";
  stars.style.marginRight = "2px";

  const rating = document.createElement("span");
  rating.classList.add("movie__rating");
  rating.style.display = "flex";
  rating.style.alignItems = "center";

  rating.append(stars, element.vote_average);
  info.append(title, rating);
  movie.append(info);
  movies.append(movie);

  movie.addEventListener("click", () => {
    modalContent = movie.id;
    activeModal();
  });

  closeModal.addEventListener("click", () => {
    modalContent = "";
    disabledModal();
  });

  divModal.addEventListener('click', () => {
    modalContent = "";
    disabledModal();
  })
};

const constructorCarousel = (initial, final) => {
  const array = moviesInterval.slice(initial, final);
  movies.innerHTML = "";

  array.forEach((element) => {
    moviesCarousel(element);
  });
};

const moveCarousel = async () => {
  await moviesApi();
  localStorage.removeItem('arrayLength');
  input.value = "";
  constructorCarousel(0, 5);
};

moveCarousel();