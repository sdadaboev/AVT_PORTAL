import { Router } from 'express'
import addingUser from '../../controllers/users/userController.js'
import { getUsers } from '../../controllers/actions/getUsersController.js'
import { checkToken } from '../../middlewares/authMiddlewares.js'
const userRouter = Router()
userRouter.post('/adding-new-user', addingUser)
userRouter.get('/get-users', checkToken, getUsers)
export default userRouter
