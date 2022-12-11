import FilterView from "./view/filter-view.js";
import { render } from "./render.js";
import BoardPresenter from "./presenter/board-presenter.js";

const pageBodyElement = document.querySelector(".page-body");
const filtersContainerElement = pageBodyElement.querySelector(
  ".trip-controls__filters"
);
const tripEventsContainerElement =
  pageBodyElement.querySelector(".trip-events");
const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsContainerElement,
});

render(new FilterView(), filtersContainerElement);
boardPresenter.init();
