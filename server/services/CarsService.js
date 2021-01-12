import { dbContext } from "../db/DbContext"

class CarsService {
  async get(query = {}) {
    return await dbContext.Cars.find(query)
  }
  async create(body) {
    return await dbContext.Cars.create(body)
  }
  async put(query = {}, body) {
    if (query.id) {
      let id = query.id
      let car = await dbContext.Cars.findByIdAndUpdate(id, body)
      if (!car) return `No car found by id ${id}`
      return await dbContext.Cars.findById(id)
    } return `Please insert id as a query parameter.`
  }
  async delete(query = {}) {
    if (query.id) {
      let id = query.id
      let car = await dbContext.Cars.findByIdAndDelete(id)
      if (!car) return `No car found by id ${id}`
      return `Car with id ${id} has been successfully deleted.`
    } return `Please insert id as a query parameter.`
  }
}

export const carsService = new CarsService()