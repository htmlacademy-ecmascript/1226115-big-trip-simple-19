import dayjs from 'dayjs';

function getRandom (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getDate(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function getDateTime(date) {
  return dayjs(date).format('DD/MM/YY HH:mm');
}

function getDateWithoutSeconds(date) {
  return dayjs(date).format('YYYY-MM-DDThh:mm');
}

function getDayFromDate(date) {
  return dayjs(date).format('MMM DD');
}

function getTimeFromDate(date) {
  return dayjs(date).format('hh:mm');
}

function getPairsFromMap(data) {
  const result = new Array();
  data.forEach((value, key) => result.push([key, value]));
  return result;
}

export {getRandom, getDate, getDateTime, getDateWithoutSeconds, getDayFromDate, getTimeFromDate, getPairsFromMap};
