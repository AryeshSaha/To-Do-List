const expressAsyncHandler = require("express-async-handler");
const Users = require("../../model/Users/UsersModel");

const RegisterCtrl = expressAsyncHandler(async (req, res) => {
  const checkMail = await Users.findOne({ email: req.body.email });
  // console.log("From frontend: ", req.body.email);
  // console.log("after db op result is: ", checkMail);

  if (checkMail)
    throw new Error("Email already exists, try with a different one");

  try {
    const user = await Users.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    // res.json(user);
    res.redirect('/tasks')
  } catch (error) {
    res.json(error);
  }
});

module.exports = RegisterCtrl;
