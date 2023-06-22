import MealImg from './img/restaurant.jpg';
import { generateCardMeal } from './functions/functions';
import './styles/menu.css';

const menuMeals = [
  {
    name: 'Classic Burger',
    description:
      'Delicious burger with juicy meat, melted cheese, and fresh toppings.',
    price: 10.99,
    img: MealImg,
  },
  {
    name: 'Margherita Pizza',
    description:
      'Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.',
    price: 12.99,
    img: MealImg,
  },
  {
    name: 'Caesar Salad',
    description:
      'Fresh salad with lettuce, grilled chicken, parmesan cheese, and Caesar dressing.',
    price: 8.99,
    img: MealImg,
  },
  {
    name: 'Grilled Salmon',
    description:
      'Juicy grilled salmon fillet with a side of vegetables and special sauce.',
    price: 15.99,
    img: MealImg,
  },
  {
    name: 'Pasta Carbonara',
    description:
      'Traditional Italian pasta dish with creamy sauce, pancetta, and parmesan cheese.',
    price: 11.99,
    img: MealImg,
  },
  {
    name: 'Steak Fajitas',
    description:
      'Sizzling fajitas with tender steak, bell peppers, onions, and warm tortillas.',
    price: 16.99,
    img: MealImg,
  },
  {
    name: 'Vegetable Stir-Fry',
    description:
      'Assorted fresh vegetables stir-fried to perfection with a savory sauce.',
    price: 9.99,
    img: MealImg,
  },
];

export default function generateMenu() {
  let content = document.querySelector('#content');

  let subtitle = document.createElement('h2');
  subtitle.id = 'subtitle';
  subtitle.innerText = 'Menu';
  content.appendChild(subtitle);

  let gridMenu = document.createElement('div');
  gridMenu.id = 'menu-meals';
  menuMeals.forEach((meal) => {
    let divMeal = document.createElement('div');
    divMeal.classList.add('menu-meal');

    let imgMeal = document.createElement('img');
    imgMeal.src = meal.img;
    imgMeal.alt = `${meal.name} image.`;
    divMeal.appendChild(imgMeal);

    let nameMeal = document.createElement('h3');
    nameMeal.classList.add('name-meal');
    nameMeal.textContent = meal.name;
    divMeal.appendChild(nameMeal);

    let descriptionMeal = document.createElement('p');
    descriptionMeal.classList.add('meal-description');
    descriptionMeal.textContent = meal.description;
    divMeal.appendChild(descriptionMeal);

    let priceMeal = document.createElement('p');
    priceMeal.classList.add('meal-price');
    priceMeal.textContent = `${meal.price}$`;
    divMeal.appendChild(priceMeal);

    gridMenu.appendChild(divMeal);
  });

  content.appendChild(gridMenu);
}
