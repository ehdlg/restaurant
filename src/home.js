import RestaurantIcon from './img/restaurant.jpg';
import './styles/home.css';
import { generateHomeCard } from './functions/functions';
//Array de objetos con informacion del restaurante
const cardsInfo = [
  {
    title: 'About Us',
    text: 'Located in the heart of the city, "Delicious Bites" is a culinary haven for food enthusiasts. Our restaurant is dedicated to providing exceptional service and creating memorable moments for our guests.',
    img: RestaurantIcon,
  },
  {
    title: 'Ambiance',
    text: 'Step into our elegant and inviting space, where contemporary design meets warm hospitality. Our stylish decor and comfortable seating provide the perfect backdrop for an unforgettable dining experience.',
    img: RestaurantIcon,
  },
  {
    title: 'Cuisine',
    text: 'Indulge in a culinary journey through our diverse menu, inspired by international flavors. From savory appetizers to mouthwatering main courses and delightful desserts, our carefully curated selection showcases the artistry and passion of our culinary team.',
    img: RestaurantIcon,
  },
  {
    title: 'Private Events',
    text: "Whether you're celebrating a special occasion or hosting a corporate gathering, our restaurant offers a private event space that can accommodate your needs. We provide personalized menus and impeccable service to ensure a memorable event for you and your guests.",
    img: RestaurantIcon,
  },
  {
    title: 'Reservations',
    text: 'To guarantee a table at "Delicious Bites," we recommend making a reservation in advance. Our friendly staff will be delighted to assist you in securing your preferred date and time.',
    img: RestaurantIcon,
  },
];
export default function generateHome() {
  let content = document.querySelector('#content');
  let subtitle = document.createElement('h2');
  subtitle.textContent = 'Home';
  subtitle.id = 'subtitle';
  content.appendChild(subtitle);

  cardsInfo.forEach((info) => {
    content.appendChild(generateHomeCard(info));
  });
}
