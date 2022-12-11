import { render } from '../render.js';
import { RenderPosition } from '../render.js';
import SortView from '../view/sort-view.js';
import AddPointView from '../view/point-add-view.js';
import EditPointView from '../view/point-edit-view.js';
import TripListView from '../view/trip-events-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  tripListComponent = new TripListView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(
      new SortView(),
      this.boardContainer.firstElementChild,
      RenderPosition.AFTEREND
    );
    render(this.tripListComponent, this.boardContainer);
    render(new AddPointView(), this.tripListComponent.getElement());
    render(new EditPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripEventsList.getElement());
    }
  }
}
