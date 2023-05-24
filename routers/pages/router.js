import { Router } from 'express'
import { Login } from '../../controllers/auth/loginController.js'
import { RegistrationForPost } from '../../controllers/auth/registrationController.js'
import { RegistrationForGet } from '../../controllers/auth/registrationController.js'
import { getMainPage } from '../../controllers/pages/mainPageController.js'
import { check } from 'express-validator'
import { LoginGet } from '../../controllers/auth/loginController.js'
import { checkToken } from '../../middlewares/authMiddlewares.js'
const authRouter = Router()

authRouter.get('/login', LoginGet)
authRouter.post('/login', Login, checkToken, getMainPage)
authRouter.get('/registration', RegistrationForGet)
authRouter.post(
    '/registration',
    check('username').not().isEmpty().withMessage('username ni kiriting'),
    check(
        'username',
        "username kamida 4 ta harfdan tashkil topgan bo'lishi kerak",
    ).isLength({ min: 4 }),

    check('password', 'parolni kiriting')
        .notEmpty()
        .withMessage('qani parol? kiritmisizmi?')
        .isLength({ min: 7 })
        .withMessage("parol kamida 7 ta simvoldan iborat bo'lishi kerak"),
    check('password', 'parollar bir xil emas').custom(
        (value, { req, loc, path }) => {
            if (value !== req.body.confirm_password) {
                throw new Error('parollar bir xil emas')
            } else {
                return value
            }
        },
    ),

    RegistrationForPost,
)

export default authRouter
//   [
//         check(
//             'username',
//             "foydalanuvchining ismi bo'sh bo'lishi mumkin emas",
//         ).notEmpty(),
//         check(
//             'username',
//             "foydalanuvchining ismi bo'sh bo'lishi mumkin emas vachaych",
//         ).trim(),
//         check(
//             'password',
//             "parolingiz 4 ta simboldan katta va 10 ta simvoldan kichik bo'lishi kerak",
//         ).isLength({ min: 4, max: 10 }),
//     ],
