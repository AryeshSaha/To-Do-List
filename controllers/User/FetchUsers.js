const expressAsyncHandler = require("express-async-handler");
const Users = require("../../model/Users/UsersModel");

const FetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  // const { id } = req.user;
  // console.log(id);
  try {
    const users = await Users.find();
    if(users.length < 1)
        res.json("No users yet")
    else
        res.json(users);
  } catch (error) {
    res.json(error);
  }
});
module.exports = FetchUsersCtrl;