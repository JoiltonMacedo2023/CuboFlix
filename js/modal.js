let modal;
const divModal = document.querySelector(".modal");
const titleModal = document.querySelector(".modal__title");
const imgModal = document.querySelector(".modal__img");
const descriptionModal = document.querySelector(".modal__description");
const genresModal = document.querySelector(".modal__genres");
const averageModal = document.querySelector(".modal__average");

const modalApi = async () => {
  const response = await fetch(
    `https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${modalContent}?language=pt-BR`
  );
  const promise = await response.json();
  modal = promise;
};

const dataModal = (element) => {
  titleModal.textContent = element.title;
  imgModal.src = element.backdrop_path;
  descriptionModal.textContent = element.overview;
  averageModal.textContent = element.vote_average.toFixed(1);

  const genresArray = element.genres;
  genresArray.forEach((item) => {
    const genreModal = document.createElement("span");
    genreModal.classList.add("modal__genre");
    genreModal.textContent = item.name;
    genresModal.append(genreModal);
  });
};

const activeModal = async () => {
  await modalApi();
  dataModal(modal);
  divModal.classList.remove("hidden");
};

const disabledModal = () => {
  genresModal.innerHTML = "";
  divModal.classList.add("hidden");
};
