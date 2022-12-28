import User from "../models/User.js";
import {StatusCodes} from "http-status-codes";
import {BadRequestsError} from '../error/index.js'

const register = async (req, res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        throw new BadRequestsError('please provide all values')
    }

    const userAlreadyExists = await User.findOne({email})
    if (userAlreadyExists) {
        throw new BadRequestsError("Email already in use")
    }

    const user = await User.create({name, email, password})
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({
        user: {
            email: user.email,
            lastname: user.lastName,
            location: user.location,
            name: user.name,
        },
        token,
        location: user.location
    })
}
const login = (req, res) => {
    res.send('login user')
}
const updateUser = (req, res) => {
    res.send('updated user')
    user.save()
}

export {register, login, updateUser}