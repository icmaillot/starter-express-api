const express = require("express")
const router = express.Router()

const {
    addTask, getTasks
} = require("../controllers/task.controller")



router.post("/", addTask)
router.get("/", getTasks)

module.exports = router