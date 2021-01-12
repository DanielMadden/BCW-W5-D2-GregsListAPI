import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  let template = ""
  ProxyState.cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarsController {
  constructor() {
    ProxyState.on("cars", _drawCars)
    carsService.getCars()
  }
}