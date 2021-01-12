import { dbContext } from "../db/DbContext"


class JobsService {
    async get(query = {}) {
        return await dbContext.Jobs.find(query)
    }
    async post(body) {
        return await dbContext.Jobs.create(body)
    }
    async put(query = {}, body) {
        if (query.id) {
            let id = query.id
            let job = await dbContext.Jobs.findByIdAndUpdate(id, body)
            if (!job) return `No job found by id ${id}`
            return await dbContext.Jobs.findById(id)
        } return `Please insert id as a query parameter.`
    }
    async delete(query = {}) {
        if (query.id) {
            let id = query.id
            let job = await dbContext.Jobs.findByIdAndDelete(id)
            if (!job) return `No job found by id ${id}`
            return `Job with id ${id} has been successfully deleted`
        } return `Please insert id as a query parameter.`
    }
}

export const jobsService = new JobsService()