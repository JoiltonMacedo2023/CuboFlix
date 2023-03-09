const body = document.querySelector('body');
const container = document.querySelector('.container');
const buttonTheme = document.querySelector('.btn-theme');
const prvButton = document.querySelector(".btn-prev");
const nxtButton = document.querySelector('.btn-next');
let currentTheme = localStorage.getItem('currentTheme') === 'dark' ? 'dark' : 'white';

const changeThemeMode = () => {
    body.style.setProperty('--background-color', currentTheme === 'white' ? 'var(--background-color-white-theme)' : 'var(--background-color-black-theme)');
    container.style.setProperty('--color', currentTheme === 'white' ? 'var(--color-white-theme)' : 'var(--color-black-theme)');
    container.style.setProperty('--input-border-color', currentTheme === 'white' ? 'var(--input-border-color-white-theme)' : 'var(--input-border-color-black-theme)');
    container.style.setProperty('--shadow-color', currentTheme === 'white' ? 'var(--shadow-color-white-theme)' : 'var(--shadow-color-black-theme)');
    container.style.setProperty('--highlight-background', currentTheme === 'white' ? 'var(--highlight-background-white-theme)' : 'var(--highlight-background-black-theme)');
    container.style.setProperty('--highlight-color', currentTheme === 'white' ? 'var(--highlight-color-white-theme)' : 'var(--highlight-color-black-theme)');
    container.style.setProperty('--highlight-description', currentTheme === 'white' ? 'var(--highlight-description-white-theme)' : 'var(--highlight-description-black-theme)');
    buttonTheme.src = ('./assets/light-mode.svg', currentTheme === 'white' ? './assets/light-mode.svg' : './assets/dark-mode.svg');
    prvButton.src = ('./assets/seta-esquerda-preta.svg', currentTheme === 'white' ? './assets/seta-esquerda-preta.svg' : './assets/seta-esquerda-branca.svg');
    nxtButton.src = ('./assets/seta-direita-preta.svg', currentTheme === 'white' ? './assets/seta-direita-preta.svg' : './assets/seta-direita-branca.svg');
    localStorage.setItem('currentTheme', currentTheme);
}

changeThemeMode();

buttonTheme.addEventListener('click', () => {
    currentTheme = localStorage.getItem('currentTheme') === 'dark' ? 'white' : 'dark';
    changeThemeMode();
});