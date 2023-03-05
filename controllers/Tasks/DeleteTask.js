const expressAsyncHandler = require("express-async-handler");
const Tasks = require("../../model/Tasks/TasksModel");

const DeleteTasksCtrl = expressAsyncHandler(async (req, res) => {
  // const id  = req.body.checkbox;
  const id  = req.body.id;

//   console.log(req.body);

  try {
    const tasks = await Tasks.findByIdAndRemove(id);
    // res.json(tasks)
    res.redirect("/tasks");
  } catch (error) {
    res.json(error);
  }
});

module.exports = DeleteTasksCtrl;
