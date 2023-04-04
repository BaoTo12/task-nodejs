var express = require('express');
var router = express.Router();
const { postCreateProject, editProject, deleteProject, getAllProject } = require("../controllers/projectController")
const { getAllTask, postCreateTask, editTask, deleteTask } = require("../controllers/taskController")
const { getAllBlog, postCreateBlog, editBlog, deleteBlog } = require("../controllers/blogController")

// project
router.get("/project", getAllProject)
router.post("/project", postCreateProject)
router.put("/project", editProject)
router.delete("/project", deleteProject)

// task
router.get("/task", getAllTask)
router.post("/task", postCreateTask)
router.put("/task", editTask)
router.delete("/task", deleteTask)

// blog
router.get("/blog", getAllBlog)
router.post("/blog", postCreateBlog)
router.put("/blog", editBlog)
router.delete("/blog", deleteBlog)

module.exports = router;
