import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/model-point.js';

const pageBodyElement = document.querySelector('.page-body');
const filtersContainerElement = pageBodyElement.querySelector('.trip-controls__filters');
const tripEventsContainerElement = pageBodyElement.querySelector('.trip-events');
const pointsModel = new PointsModel;
const boardPresenter = new BoardPresenter({boardContainer: tripEventsContainerElement, pointsModel});

render(new FilterView(), filtersContainerElement);
boardPresenter.init();
