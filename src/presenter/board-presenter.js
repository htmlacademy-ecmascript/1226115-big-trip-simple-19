import { render, RenderPosition } from '../framework/render.js';
import { getOffersByPointType, updateItem } from '../untils/common.js';
import TripEventsListView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import PointPresenter from './point-presenter.js';

export default class BoardPresenter {
  #offersModel = null;
  #offers = null;
  #destinationsModel = null;
  #boardContainer = null;
  #points = null;
  #destinations = null;
  #pointsModel = null;
  #tripEventsList = new TripEventsListView();
  #pointPresenters = new Map();

  constructor({
    boardContainer,
    pointsModel,
    destinationsModel,
    offersModel
  }) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#destinationsModel.destinations];
    this.#offers = [...this.#offersModel.offers];
    this.#renderBoard();
  }

  #renderPoint(point) {
    const pointData = {
      ...point,
      destination: this.#destinations.find((item) => item.id === point.destination),
      allOffers: getOffersByPointType(point.type, this.#offers)

    };

    const pointPresenter = new PointPresenter({
      pointsListContainer: this.#tripEventsList.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(pointData);
    this.#pointPresenters.set(pointData.id, pointPresenter);
  }

  #renderBoard() {
    if (this.#points.length < 1) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPointsList();
  }

  #renderNoPoints() {
    render(new ListEmptyView(), this.#boardContainer);
  }

  #renderSort() {
    render(new SortView(), this.#boardContainer.firstElementChild, RenderPosition.AFTEREND);
  }

  #renderPointsList() {
    render(this.#tripEventsList, this.#boardContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
