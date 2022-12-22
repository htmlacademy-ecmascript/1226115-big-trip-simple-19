import { createElement } from '../render.js';
import {getDate, getDateWithoutSeconds, getDayFromDate, getTimeFromDate} from '../until.js';

function renderOffers(offers) {
  let result = '';
  offers.forEach((item) => {
    item.offers.forEach((elem) => {
      result = `${result}<li class="event__offer"><span class="event__offer-title">${elem.title} </span>&plus;&euro;&nbsp;<span class="event__offer-price">${elem.price}</span></li>`;
    });
  });
  return result;
}

function createPointView (point) {
  const {type, destination, basePrice, dateFrom, dateTo, offers} = point;

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${getDate(dateFrom)}">${getDayFromDate(dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${getDateWithoutSeconds(dateFrom)}">${getTimeFromDate(dateFrom)}</time>
            &mdash;
            <time class="event__end-time" datetime="${getDateWithoutSeconds(dateTo)}">${getTimeFromDate(dateTo)}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${renderOffers(offers)}
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class PointView {

  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createPointView(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
