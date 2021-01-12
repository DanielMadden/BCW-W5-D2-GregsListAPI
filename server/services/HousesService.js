import { dbContext } from "../db/DbContext"

class HousesService {
  async get(query = {}) {
    return await dbContext.Houses.find(query)
  }
  async post(body) {
    return await dbContext.Houses.create(body)
  }
  async put(query = {}, body) {
    if (query.id) {
      let id = query.id
      let house = await dbContext.Houses.findByIdAndUpdate(id, body)
      if (!house) return `No house found by id ${id}`
      return await dbContext.Houses.findById(id)
    } return `Please insert id as a query parameter`
  }
  async delete(query = {}) {
    if (query.id) {
      let id = query.id
      let house = await dbContext.Houses.findByIdAndDelete(id)
      if (!house) return `No house found by id ${id}`
      return `Deleted house with id ${id}`
    } return `Please insert id as a query parameter`
  }
}

export const housesService = new HousesService()