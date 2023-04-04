const { createTaskAPI, editTaskAPI, deleteTaskAPI, getAllTaskAPI } = require("../services/taskService")



const postCreateTask = async (req, res) => {
    let result = await createTaskAPI(req.body)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const editTask = async (req, res) => {
    const { id, ...restData } = req.body
    let result = await editTaskAPI(id, restData)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const deleteTask = async (req, res) => {
    const { id } = req.body
    let result = await deleteTaskAPI(id)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const getAllTask = async (req, res) => {
    let result = await getAllTaskAPI(req.query)
    res.status(200).json({
        errorCode: 0,
        data: result
    })
}
module.exports = {
    postCreateTask,
    editTask,
    deleteTask,
    getAllTask
};