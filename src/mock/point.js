import { getRandom } from '../until.js';
import {POINT_TYPES, CITIES, DESCRIPTION_NAME, POINTS_AMOUNT, NAME_SERVICE} from '../const.js';

function getRandomValue(set) {
  const MIN = 0;
  const max = set.length - 1;
  return set[getRandom(MIN, max)];
}

function createPicture(descriptionName) {
  return Array.from({length: getRandom(1, 5)}, () => ({
    src: `https://loremflickr.com/248/152?random=${getRandom(1, 100)}`,
    description: descriptionName
  }));
}

function generateDestination() {
  const destinationName = getRandomValue(CITIES);
  const descriptionName = getRandomValue(DESCRIPTION_NAME);
  return {
    name: destinationName,
    description: descriptionName,
    pictures: createPicture(DESCRIPTION_NAME)
  }
}

function generateOffers() {
  return Array.from({length: getRandom(0, 1)}, (index) => ({
    id: index,
    title: getRandomValue(NAME_SERVICE),
    price: getRandom(30, 250)
  }));
}

function createOffers() {
  return Array.from({length: getRandom(1, 2)}, () => ({
    type: getRandomValue(POINT_TYPES),
    offers: generateOffers()
  }));
}

function createPoint() {

  const day = getRandom(0,31);
  const hour = getRandom(0,24);
  const minute = getRandom(0,60);

  return {
    basePrice: getRandom(50, 1500),
    dateFrom: new Date(2022, 11, day, hour, minute),
    dateTo: new Date(2022, 11, day + getRandom(0, 1), hour + getRandom(0, 24, minute + getRandom(0, 60))),
    destination: generateDestination(),
    id: getRandom(10, 50),
    offers: createOffers(),
    type: getRandomValue(POINT_TYPES)
  }
}

const createPoints = () => Array.from({length: getRandom(POINTS_AMOUNT.MIN, POINTS_AMOUNT.MAX)}, createPoint)

export {createPoints};
