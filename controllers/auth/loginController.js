import User from '../../models/User/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { secret } from '../../keys/config.js'
// const handleErrors = (error) => {
//     switch (error.message) {
//         case 'error-1':
//             console.log("1 lik error bo'ldi")
//             break
//         case 'error-2':
//             console.log("2 lik error bo'ldi")
//             break
//     }
// }

const generateAccessToken = (userID, roles) => {
    const payload = {
        userID,
        roles,
    }
    return jwt.sign(payload, secret.secret, { expiresIn: '30s' })
}
export const Login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({
            username: username,
        })
        if (!user) {
            res.render('forms/auth/login', {
                title: 'login',
                message: 'bunday username mavjud emas',
            })
        }
        const validPassword = bcrypt.compareSync(
            password,
            user.importantUserProfile.password,
        )
        if (!validPassword) {
            res.render('forms/auth/login', {
                title: 'login',
                message: "parolda muammo bor, boshidan urinib ko'ring",
            })
        }
        const token = generateAccessToken(
            user._id,
            user.importantUserProfile.roles,
        )
        req.token = token

        req.headers.authorization = `Bearer ${token}`
        next()
        // return res.json({ token })
    } catch (error) {
        console.log(error)
        res.render('forms/auth/login', {
            title: 'login',
            message: 'Login jarayonida hatolik yuzaga keldi',
        })
    }
}

export const LoginGet = (req, res) => {
    try {
        res.render('forms/auth/login', {
            title: 'login',
            message: null,
        })
    } catch (error) {
        console.log(error)
    }
}
