const expressAsyncHandler = require("express-async-handler");
const Users = require("../../model/Users/UsersModel");
const getToken = require("../../token/getToken");

const LoginCtrl = expressAsyncHandler(async(req, res) => {
    const user = await Users.findOne({ email: req.body.email, password: req.body.password })
    
    if(!user) throw new Error("Email doesn't exist")

    if(user.password) {
        // res.json({
        //     fullname: user.fullname,
        //     token: getToken(user.id),
        // })
        res.redirect('/tasks')
    } else {
        res.status(404)
        throw new Error("Invalid Password")
    }
})

module.exports = LoginCtrl