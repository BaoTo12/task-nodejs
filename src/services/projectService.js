const Project = require("../models/project")
const aqp = require('api-query-params');

module.exports = {
    async createProjectAPI(data) {
        try {
            if (data.type === "EMPTY-PROJECT") {
                const result = await Project.create({ title: data.title, status: data.status, description: data.description })
                return result
            }
            // if (data.type === "ADD-USER") {
            //     console.log(data);
            //     const project = await Project.findById(data.projectId).exec()
            //     for (let i = 0; i < data.userIdArr.length; i++) {
            //         project.users.push(data.userIdArr[i])
            //     }
            //     let newResult = await project.save()
            //     return newResult
            // }
            // if (data.type === "DELETE-USER") {
            //     const project = await Project.findById(data.projectId).exec()
            //     for (let i = 0; i < data.userIdArr.length; i++) {
            //         project.users.pull(data.userIdArr[i])
            //     }
            //     let newResult = await project.save()
            //     return newResult
            // }
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async editProjectAPI(id, title) {
        try {
            console.log(id, title);
            const result = await Project.updateOne({ _id: id }, { title })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async deleteProjectAPI(id) {
        try {
            const result = await Project.deleteOne({ _id: id })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async getAllProjectAPI(queryString) {
        const { filter, limit } = aqp(queryString);
        const page = filter.page
        filter["_id"] = filter["id"]
        delete filter.id
        delete filter.page

        const offset = (page - 1) * limit
        try {
            const result = await Project.find({}).skip(offset).limit(limit).exec()
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}