import dayjs from 'dayjs';
import { DATE_TOPIC_FORMAT, DATE_FORMAT, MINUTES_FORMAT, DATE_EDIT_FORMAT } from './const.js';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getOffersByPointType = (pointType, offersByType) => offersByType.find((offer) => offer.type === pointType).offers;

const getMultipleRandomArrayElements = (items, min, max) => items
  .slice()
  .sort(() => 0.5 - Math.random())
  .slice(0, getRandomInteger(min, max));

const humanizeTopicDate = (date) => date
  ? dayjs(date).format(DATE_TOPIC_FORMAT)
  : '';

const humanizeDate = (date) => date
  ? dayjs(date).format(DATE_FORMAT)
  : '';

const humanizeMinutes = (minutes) => minutes
  ? dayjs(minutes).format(MINUTES_FORMAT)
  : '';

const humanizeEditDate = (date) => date
  ? dayjs(date).format(DATE_EDIT_FORMAT)
  : '';

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function getPairsFromMap(data) {
  const result = new Array();
  data.forEach((value, key) => result.push([key, value]));
  return result;
}

export { getRandomInteger, getOffersByPointType, humanizeTopicDate, humanizeDate, humanizeMinutes, humanizeEditDate, getPairsFromMap, getRandomArrayElement, getMultipleRandomArrayElements, capitalize };
