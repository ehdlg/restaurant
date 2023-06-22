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

function generateContent() {
  let section = this.dataset.section;
  console.log(contentFunctions[section]);
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

export { isMenuSelected, clearContent, generateContent, generateCardMeal };
