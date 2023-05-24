import { Router } from 'express'
import { courses3DSMAX } from '../../controllers/courses/coursesController.js'
import { coursesUnreal } from '../../controllers/courses/unrealController.js'
import { coursesFigma } from '../../controllers/courses/figmaController.js'
import { courseIllustrator } from '../../controllers/courses/illustratorController.js'
import { coursePremierPro } from '../../controllers/courses/premierProController.js'
import { coursesCorelDraw } from '../../controllers/courses/corelDrawController.js'
import { courseAfterEffects } from '../../controllers/courses/afterEffectsController.js'
import { coursePhotoshop } from '../../controllers/courses/photoshopController.js'
const courseRouter = Router()

courseRouter.get('/3dsmax', courses3DSMAX)
courseRouter.get('/unreal-engine', coursesUnreal)
courseRouter.get('/figma', coursesFigma)
courseRouter.get('/adobe-illustrator', courseIllustrator)
courseRouter.get('/adobe-premier-pro', coursePremierPro)
courseRouter.get('/corel-draw', coursesCorelDraw)
courseRouter.get('/adobe-after-effects', courseAfterEffects)
courseRouter.get('/adobe-photoshop', coursePhotoshop)

export default courseRouter
