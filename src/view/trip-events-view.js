import AbstractView from '../framework/view/abstract-view';

const createTemplate = () => (
  '<ul class="trip-events__list">'
);

export default class TripEventsListView extends AbstractView {
  get template() {
    return createTemplate();
  }
}
