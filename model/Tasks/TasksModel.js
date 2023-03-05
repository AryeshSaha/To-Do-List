const mongoose = require("mongoose");

const TasksModel = mongoose.Schema({
  task: {
    type: String,
    required: [true, "Don't enter empty task."],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },

  // isStarred: {
  //   type: Boolean,
  //   default: false,
  // }
});

const Tasks = mongoose.model("Tasks", TasksModel);
module.exports = Tasks;
