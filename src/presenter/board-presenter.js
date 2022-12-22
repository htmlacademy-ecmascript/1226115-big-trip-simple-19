import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import AddPointView from '../view/point-add-view.js';
// import EditPointView from '../view/point-edit-view.js';
import TripListView from '../view/trip-events-view.js';
import PointView from '../view/point-view.js';

export default class BoardPresenter {
  tripListComponent = new TripListView();

  constructor({ boardContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    render(new SortView(), this.boardContainer);
    render(new AddPointView(), this.boardContainer);
    // render(new EditPointView(this.pointsModel.getPoints()), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointView(this.boardPoints[i]), this.tripListComponent.getElement());
    }
  }
}
