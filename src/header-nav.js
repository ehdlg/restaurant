import Logo from './img/logo.svg';
import './styles/header-nav.css';

export default function generateHeaderNav() {
  let mainTitle = document.querySelector('#title');
  let logoElement = document.querySelector('#logo');
  let navHome = document.querySelector('#nav-home');
  let navMenu = document.querySelector('#nav-menu');
  let navAbout = document.querySelector('#nav-about');

  //Header elements
  mainTitle.textContent = 'Restaurant';
  logoElement.src = Logo;

  //Menu nav elements
  navHome.textContent = 'Home';
  navMenu.textContent = 'Menu';
  navAbout.textContent = 'About';
}
