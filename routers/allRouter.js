import { Router } from 'express'
import authRouter from './pages/router.js'
import adminRouter from './userRole/adminRouter.js'
import userRouter from './users/userRouter.js'
import homeRouter from './home/homeRouter.js'
import courseRouter from './courses/coursesRouter.js'
import CRUDRouter from './CRUDrouter.js'
import projectRouter from './projects/projectRouter.js'
import projectRouterFigma from './projects/figmaProjectRouter/figmaProjectRouter.js'
import projectRouterPremierPro from './projects/premierProProjectRouter/premierProProjectRouter.js'
import projectRouterIllustrator from './projects/illustratorProjectRouter/illustratorProjectRouter.js'
import projectRouterCorel from './projects/corelProjectRouter/corelProjectRouter.js'
import projectRouterPhotoshop from './projects/photoshsopRouter/photoshsopRouter.js'
import projectRouterAfterEffects from './projects/afterEffectsProjectRouter/afterEffectsProjectRouter.js'

const allRouter = Router()
allRouter.use('/', authRouter)
allRouter.use('/auth', authRouter)
allRouter.use('/admin', adminRouter)
allRouter.use('/user', userRouter)
allRouter.use('/home', homeRouter)
allRouter.use('/course', courseRouter)
allRouter.use('/adding', CRUDRouter)
allRouter.use('/project', projectRouter)
allRouter.use('/project-figma', projectRouterFigma)
allRouter.use('/project-premier-pro', projectRouterPremierPro)
allRouter.use('/project-illustrator', projectRouterIllustrator)
allRouter.use('/project-corel', projectRouterCorel)
allRouter.use('/project-photoshop', projectRouterPhotoshop)
allRouter.use('/project-after-effects', projectRouterAfterEffects)
export default allRouter
