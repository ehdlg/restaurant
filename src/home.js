import RestaurantIcon from './restaurant.jpg';
export default function generateHome() {
  let content = document.querySelector('#content');
  let home = document.createElement('div');
  let title = document.createElement('h1');
  let restaurantIcon = document.createElement('img');

  title.textContent = 'Restaurant';
  home.appendChild(title);
  home.appendChild(restaurantIcon);
  restaurantIcon.src = RestaurantIcon;
  restaurantIcon.width = 200;
  content.appendChild(home);
}
