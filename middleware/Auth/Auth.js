const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const Users = require("../../model/Users/UsersModel")

const AuthHandler = expressAsyncHandler(async(req, res, next) => {
    let token;
    if(!req.headers.authorization) throw new Error("Please provide token")

    try {
        token = req.headers.authorization;
        if(token) {
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            console.log(decoded);

            const user = await Users.findById(decoded?.id).select("-password")

            req.user = user;
            next()
        } else {
            throw new Error("You don't have permission to have access")
        }
    } catch (error) {
        throw new Error("Token Expired! Login again")
    }
})

module.exports = AuthHandler