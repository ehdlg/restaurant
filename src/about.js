import './styles/about.css';
const aboutRestaurant = {
  name: 'Delicious Bites',
  address: '123 Main Street, Cityville',
  phone: '+1 123-456-7890',
  email: 'info@deliciousbites.com',
  website: 'www.deliciousbites.com',
  'Who are we': `Located in the heart of the city, Delicious Bites is a culinary haven for food enthusiasts. We pride ourselves on serving delectable dishes made from the finest ingredients sourced locally. Our cozy atmosphere, friendly staff, and exceptional service create a memorable dining experience for our valued guests. Whether you're looking for a casual lunch, a romantic dinner, or a venue to celebrate special occasions, Delicious Bites is the perfect destination.`,
};

export default function generateAbout() {
  let content = document.querySelector('#content');

  let subtitle = document.createElement('h2');
  subtitle.id = 'subtitle';
  subtitle.innerText = 'About';
  content.appendChild(subtitle);

  let divAbout = document.createElement('div');
  divAbout.id = 'content-about';

  for (let key in aboutRestaurant) {
    let divInfoAbout = document.createElement('div');
    divInfoAbout.id = `about-${key}`;
    divInfoAbout.classList.add('info-about');

    let infoTitle = document.createElement('h3');
    infoTitle.classList.add('about-title');

    let infoDescription = document.createElement('p');
    infoDescription.classList.add('about-description');

    infoTitle.innerText = key;
    infoDescription.innerText = aboutRestaurant[key];

    divInfoAbout.appendChild(infoTitle);
    divInfoAbout.appendChild(infoDescription);
    divAbout.appendChild(divInfoAbout);
  }

  content.appendChild(divAbout);
}
