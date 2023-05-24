import User from '../../models/User/user.js'
import Role from '../../models/User/role.js'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
export const RegistrationForPost = async (req, res, next) => {
    try {
        console.log('req-body-----', req.body)
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(errors.errors)
            let crash = errors.errors
            return res.render('forms/auth/registration', {
                title: 'registration',
                errors: null || crash,
                message: null,
            })
        }
        const { username, password } = req.body
        const candidate = await User.findOne({
            username: username,
        })
        let salt = bcrypt.genSaltSync(7)
        let hashPassword = bcrypt.hashSync(password, salt)
        if (!candidate) {
            try {
                const user = new User({
                    username: username,
                    'importantUserProfile.username': username,
                    'importantUserProfile.password': hashPassword,
                    'importantUserProfile.roles': 'user',
                })
                if (user) {
                    const AddedUser = await User.create(user)
                    res.render('forms/auth/registration', {
                        title: 'registration',
                        errors: null,
                        message: "user qo'shildi",
                    })
                    // res.json({
                    //     AddedUser,
                    //     message: "user qo'shildi",
                    // })
                } else {
                    res.json("nimadir nito' ketti")
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            res.render('forms/auth/registration', {
                title: 'registration',
                errors: null,
                message: 'Bunday foydalanuvchi allaqachon mavjud',
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const RegistrationForGet = (req, res) => {
    try {
        res.render('forms/auth/registration', {
            title: 'registration',
            errors: null,
            message: null,
        })
    } catch (error) {
        console.log(error)
    }
}
