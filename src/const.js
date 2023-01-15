const CITIES = [
  'Amsterdam',
  'Las Vegas',
  'Leipzig',
  'London',
  'Los Angeles',
  'Madrid',
  'Monaco',
  'Moscow',
  'Saint Petersburg'
];

const DESCRIPTION_NAME = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const POINTS_AMOUNT = {
  MIN: 3,
  MAX: 6
};

const MAX_OFFERS = 3;
const MAX_PICTURES = 5;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future'
};

export { MAX_OFFERS, TYPES, MAX_PICTURES, CITIES, DESCRIPTION_NAME, POINTS_AMOUNT, FilterType};
