import Icon from './restaurant.jpg';

export default function generateHome() {
  let content = document.querySelector('#content');
  let home = document.createElement('div');
  let title = document.createElement('h1');
  let restaurantImg = document.createElement('img');

  title.textContent = 'Restaurant';
  home.appendChild(title);
  content.appendChild(home);
}
