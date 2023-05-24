import { Router } from 'express'
import { addingRole } from '../../controllers/userRole/userRoleController.js'

const adminRouter = Router()

adminRouter.post('/adding-role', addingRole)

export default adminRouter
