

import { housesService } from "../services/HousesService"
import BaseController from "../utils/BaseController"

export class HousesController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get("", this.get)
      .post("", this.post)
      .put("", this.put)
      .delete("", this.delete)
  }
  async get(req, res, next) {
    try {
      res.send(await housesService.get(req.query))
    } catch (error) {
      next(error)
    }
  }
  async post(req, res, next) {
    try {
      res.send(await housesService.post(req.body))
    } catch (error) {
      next(error)
    }
  }
  async put(req, res, next) {
    try {
      res.send(await housesService.put(req.query, req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await housesService.delete(req.query))
    } catch (error) {
      next(error)
    }
  }
}

