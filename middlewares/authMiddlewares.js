import jwt from 'jsonwebtoken'
import { secret } from '../keys/config.js   '
export const checkToken = (req, res, next) => {
    try {
        const tokenWithBearer = req.headers.authorization
        const token = tokenWithBearer.split(' ')[1]
        if (!token) {
            return res.json('foydalanuvchi avtorizatsiya qilinmagan')
        }   
        const decodedata = jwt.verify(token, secret.secret)
        req.user = decodedata
        next()
    } catch (error) {
        console.log(error)
        return res.json('foydalanuvchi avtorizatsiya qilinmagan')
    }
}
