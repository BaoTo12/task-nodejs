const { createBlogAPI, editBlogAPI, deleteBlogAPI, getAllBlogAPI, updateSingleFile } = require("../services/blogService")



const postCreateBlog = async (req, res) => {
    // if (!req.files || Object.keys(req.files).length === 0) {
    //     return res.status(400).send('No files were uploaded.');
    // }
    let imgPath = "";
    // Check for file is array or object
    // if (Array.isArray(req.files.image)) {
    //     imgPath = await updateMultipleFile(req.files.image)
    // } else {
    //     imgPath = await updateSingleFile(req.files.image)
    // }
    imgPath = await updateSingleFile(req.files.image)
    console.log(imgPath);
    let result = await createBlogAPI(req.body, imgPath)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const editBlog = async (req, res) => {
    const { id, ...restData } = req.body
    let result = await editBlogAPI(id, restData)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const deleteBlog = async (req, res) => {
    const { id } = req.body
    let result = await deleteBlogAPI(id)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const getAllBlog = async (req, res) => {
    let result = await getAllBlogAPI(req.query)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    postCreateBlog,
    editBlog,
    deleteBlog,
    getAllBlog
};