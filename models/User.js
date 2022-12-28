import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
        required: [true, 'Please provide email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6,
        select: false
    },
    lastName: {
        type: String,
        required: ['Please provide last name'],
        maxLength: 20,
        default: 'lastName'
    },
    location: {
        type: String,
        trim: true,
        maxLength: 20,
        default: 'my city'
    },
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({userID: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME,
    })
}

export default mongoose.model('User', UserSchema)