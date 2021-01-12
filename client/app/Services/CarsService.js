import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {
  constructor() {

  }

  async getCars() {
    let res = await api.get("cars")
    ProxyState.cars = res.data.map(car => new Car(car))
  }

  //   createCar(data) {
  // api.
  //   }
}

export const carsService = new CarsService()