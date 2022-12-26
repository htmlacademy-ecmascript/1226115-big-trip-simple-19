import { getRandomArrayElement, getRandomInteger, getMultipleRandomArrayElements, getOffersByPointType } from '../until.js';
import { MAX_OFFERS, POINTS_AMOUNT, TYPES } from '../const.js';
import { offersByType } from './offer.js';
import { destinations } from './destination.js';

const generatePoint = () => {
  const day = getRandomInteger(1,31);
  const hour = getRandomInteger(0,23);
  const minute = getRandomInteger(0,60);

  const pointType = getRandomArrayElement(TYPES);

  const pointTypeOffers = getOffersByPointType(pointType, offersByType);

  const getOffersIds = () => getMultipleRandomArrayElements(pointTypeOffers, 0, MAX_OFFERS)
    .map((item) => item.id);

  const getDestinationId = () => getRandomArrayElement(destinations).id;

  return ({
    basePrice: getRandomInteger(100, 1500),
    dateFrom: new Date(2022, 11, day, hour, minute),
    dateTo: new Date(2022, 11, day + getRandomInteger(0, 1), hour + getRandomInteger(0, 12, minute + getRandomInteger(0, 30))),
    destination: getDestinationId(),
    id: getRandomInteger(10, 50),
    offers: getOffersIds(),
    type: pointType
  });
};

const generatePoints = () => Array.from({length: getRandomInteger(POINTS_AMOUNT.MIN, POINTS_AMOUNT.MAX)}, generatePoint);

export { generatePoints };
