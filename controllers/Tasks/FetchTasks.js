const expressAsyncHandler = require("express-async-handler");
const Tasks = require("../../model/Tasks/TasksModel");
const { Day, Year } = require("../../date");

const FetchTasksCtrl = expressAsyncHandler(async (req, res) => {
  // const id = req.user._id;
  try {
    const tasks = await Tasks.find();
    // res.json(tasks)
    res.render("list", {
      theDay: Day(),
      tasks: tasks,
      year: Year(),
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = FetchTasksCtrl;
