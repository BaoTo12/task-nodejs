const { createProjectAPI, editProjectAPI, deleteProjectAPI, getAllProjectAPI } = require("../services/projectService")



const postCreateProject = async (req, res) => {
    let result = await createProjectAPI(req.body)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const editProject = async (req, res) => {
    const { id, title } = req.body
    let result = await editProjectAPI(id, title)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const deleteProject = async (req, res) => {
    const { id } = req.body
    let result = await deleteProjectAPI(id)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const getAllProject = async (req, res) => {
    let result = await getAllProjectAPI(req.query)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    postCreateProject,
    editProject,
    deleteProject,
    getAllProject
};