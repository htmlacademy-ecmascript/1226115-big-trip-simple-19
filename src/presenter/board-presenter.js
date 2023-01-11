import { render, RenderPosition } from '../framework/render.js';
import { getOffersByPointType } from '../until.js';
import TripEventsListView from '../view/trip-events-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import SortView from '../view/sort-view.js';
import ListEmptyView from '../view/list-empty-view.js';

export default class BoardPresenter {
  #offersModel = null;
  #offers = null;
  #destinationsModel = null;
  #boardContainer = null;
  #points = null;
  #destinations = null;
  #pointsModel = null;
  #tripEventsList = new TripEventsListView();

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

    if (this.#points.length < 1) {
      render(new ListEmptyView(), this.#boardContainer);
      return;
    }

    render(new SortView(), this.#boardContainer.firstElementChild, RenderPosition.AFTEREND);
    render(this.#tripEventsList, this.#boardContainer);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #renderPoint(point) {

    const pointData = {
      point: {
        ...point,
        destination: this.#destinations.find((item) => item.id === point.destination),
        allOffers: getOffersByPointType(point.type, this.#offers)
      }
    };

    const escKeydownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint.call(this);
        document.removeEventListener('keydown', escKeydownHandler);
      }
    };

    const newPoint = new PointView({...pointData,
      handleExpandButtonClick: () => {
        replacePointToForm.call(this);
        document.addEventListener('keydown', escKeydownHandler);
      }
    });

    const newEditPoint = new PointEditView({...pointData,
      handleSubmitForm: () => {
        replaceFormToPoint.call(this);
        document.removeEventListener('keydown', escKeydownHandler);
      }
    });

    function replacePointToForm() {this.#tripEventsList.element.replaceChild(newEditPoint.element, newPoint.element);}
    function replaceFormToPoint() {this.#tripEventsList.element.replaceChild(newPoint.element, newEditPoint.element);}

    render(newPoint, this.#tripEventsList.element);
  }
}
