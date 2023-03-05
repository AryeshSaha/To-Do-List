const expressAsyncHandler = require("express-async-handler");
const Tasks = require("../../model/Tasks/TasksModel");

const CreateTaskCtrl = expressAsyncHandler(async (req, res) => {
    // const { id } = req.user;
    const { id } = req.body;

    if(!req.body?.task) throw new Error("Task Bar empty!")

    try {
        const task1 = await Tasks.create({
            task: req.body.task,
            author: id,
        })
        // res.json(task1)
        res.redirect('/tasks')
    } catch (error) {
        res.json(error)
    }
    
})

module.exports = CreateTaskCtrl