const Task = require("../model/task.model")


const addTask = async (req, res) => {
    const {name, status} = req.body
    const newTask = await Task.create({name, status})

    res.status(200).json({message: "task created", data: newTask})
}

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({message: "tasks fetched", data: tasks})
}

module.exports = {
    addTask, getTasks
}