const Task = require("../models/task")
const aqp = require('api-query-params');

module.exports = {
    async createTaskAPI(data) {
        try {
            const result = await Task.create({ title: data.title, percentComplete: Number(data.percentComplete), status: data.status })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async editTaskAPI(id, restData) {
        try {
            const result = await Task.updateOne({ _id: id }, { ...restData })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async deleteTaskAPI(id) {
        try {
            const result = await Task.deleteOne({ _id: id })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async getAllTaskAPI(queryString) {
        const { filter, limit } = aqp(queryString);
        const page = filter.page
        filter["_id"] = filter["id"]
        delete filter.id
        delete filter.page

        const offset = (page - 1) * limit
        try {
            const result = await Task.find({}).skip(offset).limit(limit).exec()
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}