import { carsService } from "../services/CarsService"
import BaseController from "../utils/BaseController"

export class CarsController extends BaseController {
    constructor() {
        super("api/cars")
        this.router
            .get("", this.get)
            .post("", this.create)
            .put("", this.put)
            .delete("", this.delete)
    }
    async get(req, res, next) {
        try {
            res.send(await carsService.get(req.query))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            res.send(await carsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
    async put(req, res, next) {
        try {
            res.send(await carsService.put(req.query, req.body))
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await carsService.delete(req.query))
        } catch (error) {
            next(error)
        }
    }
}