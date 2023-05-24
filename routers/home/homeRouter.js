import { Router } from 'express'
import {
    homePage,
    xazinaPage,
    loyihalarPage,
} from '../../controllers/home/homeController.js'

const homeRouter = Router()

homeRouter.get('/main', homePage)
homeRouter.get('/xazinaga', xazinaPage)
homeRouter.get('/loyihalar', loyihalarPage)
export default homeRouter
