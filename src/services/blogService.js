const Blog = require("../models/blog")
const aqp = require('api-query-params');
var path = require('path');

module.exports = {
    updateSingleFile: async (fileObject) => {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");

        // manh.jpg ===> manhDATE.now().jpg
        let extname = path.extname(fileObject.name) // jpg

        let baseName = path.basename(fileObject.name, extname); // manh

        let finalName = `${baseName}-${Date.now()}${extname}`
        let finalPath = `${uploadPath}/${finalName}`
        // Use the mv() method to place the file somewhere on your server
        try {
            await fileObject.mv(finalPath);
            return finalPath
        } catch (error) {
            return null
        }
    },
    updateMultipleFile: async (arrFileOject) => {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let results = []
        let countSuccess = 0
        for (var i = 0; i < arrFileOject.length; i++) {
            let extname = path.extname(arrFileOject[i].name) // jpg

            let baseName = path.basename(arrFileOject[i].name, extname); // manh

            let finalName = `${baseName}-${Date.now()}${extname}`
            let finalPath = `${uploadPath}/${finalName}`
            try {
                await arrFileOject[i].mv(finalPath);
                results.push({
                    status: "success",
                    path: finalPath,
                    fileName: arrFileOject[i].name,
                    error: null
                })
                countSuccess++
            } catch (error) {
                results.push({
                    status: "failed",
                    path: null,
                    fileName: arrFileOject[i].name,
                    error: error
                })
            }
        }
        return results
    },
    async createBlogAPI(data, imgPath) {
        try {
            const result = await Blog.create({ ...data, img: imgPath })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async editBlogAPI(id, restData) {
        try {
            const result = await Blog.updateOne({ _id: id }, { ...restData })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async deleteBlogAPI(id) {
        try {
            const result = await Blog.deleteOne({ _id: id })
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    },
    async getAllBlogAPI(queryString) {
        const { filter, limit } = aqp(queryString);
        const page = filter.page
        filter["_id"] = filter["id"]
        delete filter.id
        delete filter.page

        const offset = (page - 1) * limit
        try {
            const result = await Blog.find({}).skip(offset).limit(limit).exec()
            return result
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}