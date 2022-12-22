import {createPoints} from '../mock/point.js'

export default class PointsModel {
  points = createPoints();

  getPoints() {
    return this.points;
  }
}
