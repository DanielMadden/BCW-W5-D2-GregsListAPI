import { jobsService } from "../services/JobsService"
import BaseController from "../utils/BaseController"

export class JobsController extends BaseController {
    constructor() {
        super("api/jobs")
        this.router
            .get("", this.get)
            .post("", this.post)
            .put("", this.put)
            .delete("", this.delete)
    }
    async get(req, res, next) {
        try {
            res.send(await jobsService.get(req.query))
        } catch (error) {
            next(error)
        }
    }
    async post(req, res, next) {
        try {
            res.send(await jobsService.post(req.body))
        } catch (error) {
            next(error)
        }
    }
    async put(req, res, next) {
        try {
            res.send(await jobsService.put(req.query, req.body))
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await jobsService.delete(req.query))
        } catch (error) {
            next(error)
        }
    }
}