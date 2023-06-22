import generateHome from './home';
import generateMenu from './menu';
import generateAbout from './about';
import generateHeaderNav from './header-nav';
import './styles/layout.css';
import { clearContent, isMenuSelected } from './functions/functions.js';

const contentFunctions = {
  home: generateHome,
  menu: generateMenu,
  about: generateAbout,
};

//Variable que recoge los elemento <li> del menu de navegación
let navElements = document.querySelectorAll('.list-element');
let content = document.querySelector('#content');

navElements.forEach((element) => {
  element.addEventListener('click', function () {
    if (!isMenuSelected(this)) {
      let sectionToGenerate =
        contentFunctions[this.dataset.section] ?? generateHome;
      clearContent(content);
      sectionToGenerate();
    }
  });
});

//Se genera el header y nav de la pagina con la funcion del modulo 'generateHeaderNav.js'
generateHeaderNav();
generateHome();
