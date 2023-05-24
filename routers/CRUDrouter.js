import { Router } from 'express'
import { addingCourse } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { deletingCourses } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingUnreal } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingFigma } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingPhotoshop } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingillustrator } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingPremier } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingCorelDraw } from '../controllers/CRUDcontroller/addingCoursesController.js'
import { addingAfterEffects } from '../controllers/CRUDcontroller/addingCoursesController.js'
const CRUDRouter = Router()

CRUDRouter.post('/course', addingCourse)
CRUDRouter.post('/courses/unreal', addingUnreal)
CRUDRouter.post('/courses/figma', addingFigma)
CRUDRouter.post('/courses/photoshop', addingPhotoshop)
CRUDRouter.post('/courses/illustrator', addingillustrator)
CRUDRouter.post('/courses/premier', addingPremier)
CRUDRouter.post('/courses/corel', addingCorelDraw)
CRUDRouter.post('/courses/after-effects', addingAfterEffects)
////////////////////////////////////////////////////
CRUDRouter.get('/coursesBomb', deletingCourses)

export default CRUDRouter
