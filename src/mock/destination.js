import { getMultipleRandomArrayElements, getRandomArrayElement, getRandomInteger } from '../util.js';
import { MAX_PICTURES, DESCRIPTION_NAME, CITIES } from '../const.js';

const generatePicture = () => ({
  src: `https://loremflickr.com/248/152?random=${getRandomInteger(100, 500)}`,
  description: getRandomArrayElement(DESCRIPTION_NAME)
});

const generateDescription = () => getMultipleRandomArrayElements(DESCRIPTION_NAME, 1, 3)
  .join(' ');

const generatePictures = () => Array.from(
  { length: getRandomInteger(1, MAX_PICTURES) },
  generatePicture
);

const generateDestination = (name,id) => ({
  id,
  description: generateDescription(),
  name,
  pictures: generatePictures()
});

const destinations = [];

CITIES
  .slice()
  .sort(() => 0.5 - Math.random())
  .forEach((city, id) => destinations.push(generateDestination(city, id)));

export { destinations };
