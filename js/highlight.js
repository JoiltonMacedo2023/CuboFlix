const video = document.querySelector(".highlight__video");
const title = document.querySelector(".highlight__title");
const rating = document.querySelector(".highlight__rating");
const genres = document.querySelector(".highlight__genres");
const launch = document.querySelector(".highlight__launch");
const description = document.querySelector(".highlight__description");
const videoLink = document.querySelector("a");

let highlight;
let highlightVideo;

const movieHighlightApi = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR"
  );
  const promise = await response.json();
  highlight = promise;
};

const dataHighlight = (element) => {
  video.style.backgroundImage = `url(${element.backdrop_path})`;
  video.style.backgroundSize = "cover";
  video.style.backgroundPosition = "center";

  title.textContent = element.title;

  rating.textContent = element.vote_average.toFixed(1);

  description.textContent = element.overview;

  const filterGenres = [];
  const genresArray = element.genres;
  genresArray.forEach((item) => {
    filterGenres.push(" " + item.name);
  });
  genres.textContent = filterGenres;

  const getDate = new Date(element.release_date.split("-"));
  launch.textContent = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(getDate);
};

const videoHighlightApi = async () => {
  const response = await fetch(
    "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR"
  );
  const promise = await response.json();
  highlightVideo = promise.results;
};

const dataVideo = (element) => {
  videoLink.href = `https://www.youtube.com/watch?v=${element[0].key}`;
};

const activeHighlight = async () => {
  await movieHighlightApi();
  await videoHighlightApi();
  dataHighlight(highlight);
  dataVideo(highlightVideo);
};

activeHighlight();
