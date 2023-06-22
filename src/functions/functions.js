function isMenuSelected(navElement) {
  let selectedMenu = document.querySelector('.selected');
  if (navElement === selectedMenu) {
    return true;
  }
  selectedMenu.classList.remove('selected');
  navElement.classList.add('selected');
  return false;
}

function clearContent() {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

function generateCardMeal(meal) {
  let card = document.createElement('div');
  card.classList.add('card-menu');

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-menu-body');

  let mealName = document.createElement('h3');
  titleElement.textContent = meal.name;
  card.appendChild(mealName);

  let mealImg = document.createElement('img');
  mealImg.src = meal.img;
  mealImg.alt = `${meal.title} image.`;
  cardBody.appendChild(mealImg);

  let textElement = document.createElement('p');
  textElement.textContent = meal.text;
  cardBody.appendChild(textElement);

  card.appendChild(cardBody);

  return card;
}
/**
 * Funcion que genera una card con el objeto info pasado por parametro
 */
function generateHomeCard(info) {
  let card = document.createElement('div');
  card.classList.add('card-home');

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-home-body');

  let titleElement = document.createElement('h3');
  titleElement.textContent = info.title;
  card.appendChild(titleElement);

  let imgElement = document.createElement('img');
  imgElement.src = info.img;
  imgElement.alt = `${info.title} image.`;
  cardBody.appendChild(imgElement);

  let textElement = document.createElement('p');
  textElement.textContent = info.text;
  cardBody.appendChild(textElement);

  card.appendChild(cardBody);

  return card;
}

export {
  generateHomeCard,
  isMenuSelected,
  clearContent,
  generateContent,
  generateCardMeal,
};
